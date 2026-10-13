import { ref, toRaw, type Ref } from 'vue'
import isEqual from 'lodash.isequal'
import { normalizeDataForForm, normalizeData, normalizeDataForDetail } from './index'
import type { Item, TabelDataConfig, FormData, GlobalDefaultText } from '../../../configs/types'
import { submitData } from '../../../fetch'

import { type StoreArray, updateItemInStore } from '../../../lib'
import type { ZodType } from 'zod'
export function useFormHandling<TEmit extends (event: any, ...args: any[]) => void>(
  props: TabelDataConfig<Item>,
  emit: TEmit,
  setUpData: Function,
  loader: Ref<any>,
  ShowAlert: Function,
  labels: GlobalDefaultText,
  GetDataById: Function,
  refs: {
    selectedItems: any
    idData: Ref<string | number | null>
    isUpdate: Ref<number | null>
    FormModalOpen: Ref<boolean>
    detailItemModal: Ref<boolean>
    dataChildDelete: Ref<number[] | null>
    showWarningModel: Ref<boolean>
    showWarningModelSelected: Ref<boolean>
  },
) {
  const initialData = ref<Record<string, any>>({})
  async function openEditModal(id: number | string) {
    loader.value?.show('loading', labels.message.process.loading)
    try {
      const rawData = await GetDataById(props.data, id)
      refs.isUpdate.value = Number(id)
      if (!rawData) {
        loader.value?.show('error', labels.message.notFound)
        return
      }
      const schema = props.base.schema.update ?? props.base.schema.global ?? {}
      initialData.value = await normalizeDataForForm(
        rawData,
        schema,
        refs.isUpdate.value,
        props.keys?.idKey ?? 'id',
      )
      if (props.base?.justTabel || props.manual?.update || !props.endPoints?.update) {
        emit('edit', initialData.value, id)
        loader.value?.hide()
        return
      }
      refs.FormModalOpen.value = true
      loader.value?.hide()
    } catch (error: any) {
      const message =
        typeof error === 'string'
          ? error
          : error instanceof Error
            ? error.message
            : JSON.stringify(error, Object.getOwnPropertyNames(error))

      loader.value?.show('error', message || 'An unknown error occurred')
    }
  }

  async function openCreateModal() {
    if (props.base?.justTabel || props.manual?.create || !props.endPoints?.create) {
      emit('create')
      return
    }

    // Tampilkan loader saat memproses schema (terutama jika ada async fetch di select)
    loader.value?.show('loading', labels.message.process.loading)

    try {
      refs.isUpdate.value = null

      // Ambil schema spesifik untuk create, jika tidak ada fallback ke global
      const schema = props.base.schema.create ?? props.base.schema.global ?? {}

      // Bangun struktur initialData kosong berdasarkan schema create
      initialData.value = await normalizeDataForForm(
        {},
        schema,
        refs.isUpdate.value,
        props.keys?.idKey ?? 'id',
      )

      refs.FormModalOpen.value = true
    } catch (error: any) {
      ShowAlert('error', 'Error', [error?.message || 'Gagal memuat form'])
      console.error('Error saat membuka modal create:', error)
    } finally {
      loader.value?.hide()
    }
  }

  async function openShowModal(id: string | number) {
    loader.value?.show('loading', labels.message.process.loading)
    try {
      const rawData = await GetDataById(props.data, id)
      refs.isUpdate.value = Number(id)
      if (!rawData) {
        loader.value?.show('error', labels.message.notFound)
        return
      }
      initialData.value = await normalizeDataForDetail(
        rawData,
        props.base?.schema.display ?? props.base?.schema.global ?? {},
        null,
      )
      if (props.base.justTabel || props.manual?.display) {
        emit('show', initialData.value, id)
        loader.value?.hide()
        return
      }
      refs.detailItemModal.value = true
      loader.value?.hide()
    } catch (error) {
      loader.value?.show('error', JSON.stringify(error))
    }
  }

  function openWarningDeleteData(id: string | number) {
    refs.idData.value = id
    refs.showWarningModel.value = true
  }

  function openWarningDeleteSelectedData() {
    refs.showWarningModelSelected.value = true
  }

  function closeModal() {
    refs.showWarningModel.value = false
    refs.showWarningModelSelected.value = false
    refs.FormModalOpen.value = false
    refs.detailItemModal.value = false
    initialData.value = {}
    refs.isUpdate.value = null
  }

  const submitFormData = async (formData: FormData) => {
    const isUpdateMode = refs.isUpdate.value !== null
    const endpoint = isUpdateMode ? props.endPoints?.update : props.endPoints?.create
    const validation = isUpdateMode
      ? props.validation?.update || null
      : props.validation?.create || null
    const mode = isUpdateMode ? 'update' : 'create'
    const successMessage = isUpdateMode
      ? labels.message.success.update
      : labels.message.success.create
    const errorMessage = isUpdateMode ? labels.message.error.update : labels.message.error.create
    if (!endpoint) {
      loader.value?.show(
        'error',
        isUpdateMode ? labels.message.error.update : labels.message.error.create,
      )
      return
    }
    if (
      Array.isArray(refs.dataChildDelete.value) &&
      refs.dataChildDelete.value.length > 0 &&
      isUpdateMode
    ) {
      const schema = props.base.schema.update ?? props.base.schema.global ?? {}

      let arrayFieldKey: string = ''
      let endPointDelete: string | undefined
      let initialItem: Record<string, any> | undefined = await GetDataById(
        props.data,
        refs.isUpdate.value,
      )
      let DB_NAME: string | undefined
      let deleteValidation: Record<string, any> | undefined
      let deleteDataDB = true

      for (const key in schema) {
        const field = schema[key] as {
          type: string
          endPoint?: {
            delete?: string
            deleteMany?: string
            update?: string
            create?: string
          }
          deleteValidation?: Record<string, any>
          DB_NAME?: string
          deleteDataDB?: boolean
        }

        if (field.type === 'arrayObject') {
          arrayFieldKey = key
          endPointDelete = field.endPoint?.deleteMany ?? props.endPoints?.deleteMany
          DB_NAME = field.DB_NAME ?? props.base.source.DB_NAME
          deleteValidation = field.deleteValidation ?? props.validation?.delete ?? undefined
          deleteDataDB = true
          break
        }
      }

      if (Array.isArray(initialData.value[arrayFieldKey])) {
        for (let index = 0; index < refs.dataChildDelete.value.length; index++) {
          const element = refs.dataChildDelete.value[index]
          const id = props.keys?.idKey ?? 'id'
          initialData.value[arrayFieldKey] = (
            initialData.value[arrayFieldKey] as Array<{ [id: string]: number | string }>
          ).filter((items) => items?.[props.keys?.idKey ?? 'id'] !== element)
          if (initialItem && Array.isArray(initialItem[arrayFieldKey])) {
            initialItem[arrayFieldKey] = (
              initialItem[arrayFieldKey] as Array<{ [id: string]: number | string }>
            ).filter((items) => items?.[props.keys?.idKey ?? 'id'] !== element)
          }
        }
      }
      const isSame = isEqual(normalizeData(formData), normalizeData(toRaw(initialData.value)))
      const res = await DeleteSeletedData(
        refs.dataChildDelete.value,
        endPointDelete,
        deleteValidation,
        DB_NAME,
        deleteDataDB,
      )
      if (res?.response && isSame) {
        loader.value?.show('success', labels.message.success.delete)
        await updateItemInStore(DB_NAME as StoreArray, normalizeData(toRaw(initialItem)))
        await setUpData()
        closeModal()
        return
      } else if (!res?.response) {
        loader.value?.show('error', res?.message || labels.message.error.delete)
        return
      }
    }

    try {
      loader.value?.show(
        'loading',
        isUpdateMode ? labels.message.process.update : labels.message.process.create,
      )
      const authType: 'cookie' | 'bearer' | 'none' | 'custom' = isUpdateMode
        ? (props.submitOption?.update?.authType ?? props.submitOption?.global?.authType ?? 'cookie')
        : (props.submitOption?.create?.authType ?? props.submitOption?.global?.authType ?? 'cookie')
      const token: string | undefined = isUpdateMode
        ? (props.submitOption?.update?.token ?? props.submitOption?.global?.token ?? undefined)
        : (props.submitOption?.create?.token ?? props.submitOption?.global?.token ?? undefined)
      const customHeaders: Record<string, string> | undefined = isUpdateMode
        ? (props.submitOption?.update?.customHeaders ??
          props.submitOption?.global?.customHeaders ??
          undefined)
        : (props.submitOption?.create?.customHeaders ??
          props.submitOption?.global?.customHeaders ??
          undefined)

      await submitData(
        {
          data: normalizeData(formData),
          oldData: isUpdateMode ? normalizeData(toRaw(initialData.value)) : undefined,
          validation: validation ?? undefined,
          endpoint,
          mode,
          token,
          authType,
          customHeaders,
          db: props.base.source.DB_NAME,
          ...(isUpdateMode
            ? (props.submitOption?.update ?? props.submitOption?.global)
            : (props.submitOption?.create ?? props.submitOption?.global)),
          demo: props.demo,
        },
        undefined,
        props.keys?.idKey ?? 'id',
        props.keys?.idsKey ?? 'ids',
      )
      if (!props.base.dataTabelCustomDisplay) {
        await setUpData()
      } else {
        emit('refreshData')
      }
      loader.value?.show('success', successMessage)
      closeModal()
    } catch (err: any) {
      ShowAlert(
        'error',
        errorMessage,
        Object.entries(err).map(([key, message]) => `${key} : ${message}`),
      )
      loader.value?.show('error', errorMessage)
    }
  }

  async function DeleteData(
    id: string | number,
    endPointDelete?: string,
    deleteValidation?: Record<string, any>,
    DB_NAME?: string,
    deleteDataDB: boolean = true,
  ) {
    if (props.base.justTabel || props.manual?.delete || !props.endPoints?.delete) {
      emit('delete', id)
      return
    }
    endPointDelete = endPointDelete ?? props.endPoints?.delete
    deleteValidation = deleteValidation ?? props.validation?.delete
    DB_NAME = DB_NAME ?? props.base?.source.DB_NAME ?? undefined

    if (!endPointDelete) {
      loader.value?.show('error', labels.message.error.delete)
      return
    }

    const data = { [props.keys?.idKey ?? 'id']: id }

    try {
      loader.value?.show('loading', labels.message.process.delete)
      const authType: 'cookie' | 'bearer' | 'none' | 'custom' =
        props.submitOption?.delete?.authType ?? props.submitOption?.global?.authType ?? 'cookie'
      const token: string | undefined =
        props.submitOption?.delete?.token ?? props.submitOption?.global?.token ?? undefined
      const customHeaders: Record<string, string> | undefined =
        props.submitOption?.delete?.customHeaders ??
        props.submitOption?.global?.customHeaders ??
        undefined

      await submitData(
        {
          data,
          validation: (deleteValidation as ZodType<any>) ?? undefined,
          endpoint: endPointDelete,
          mode: 'delete',
          token,
          authType,
          customHeaders,
          db: DB_NAME,
          deleteDataDB,
          demo: props.demo,
          ...(props.submitOption?.delete ?? props.submitOption?.global),
        },
        undefined,
        props.keys?.idKey ?? 'id',
        props.keys?.idsKey ?? 'ids',
      )
      if (!props.base?.dataTabelCustomDisplay) {
        await setUpData()
      } else {
        emit('refreshData')
      }
      loader.value?.show('success', labels.message.success.delete)
    } catch (err: any) {
      ShowAlert(
        'error',
        labels.message.error.delete,
        Object.entries(err).map(([key, message]) => `${key} : ${message}`),
      )
      loader.value?.show('error', labels.message.error.delete)
    } finally {
      closeModal()
    }
  }

  async function DeleteSeletedData(
    ids: (string | number)[],
    endPointDeleteMany?: string,
    deleteManyValidation?: Record<string, any>,
    DB_NAME?: string,
    deleteDataDB: boolean = true,
  ) {
    if (props.base?.justTabel || props.manual?.delete || !props.endPoints?.delete) {
      emit('deleteMany', ids)
      return
    }
    endPointDeleteMany = endPointDeleteMany ?? props.endPoints?.deleteMany
    deleteManyValidation = deleteManyValidation ?? props.validation?.deleteMany
    DB_NAME = DB_NAME ?? props.base?.source.DB_NAME ?? undefined

    if (!endPointDeleteMany) {
      loader.value?.show('error', labels.message.error.deleteMany)
      return
    }

    try {
      loader.value?.show('loading', labels.message.process.deleteMany)
      const authType: 'cookie' | 'bearer' | 'none' | 'custom' =
        props.submitOption?.delete?.authType ?? props.submitOption?.global?.authType ?? 'cookie'
      const token: string | undefined =
        props.submitOption?.delete?.token ?? props.submitOption?.global?.token ?? undefined
      const customHeaders: Record<string, string> | undefined =
        props.submitOption?.delete?.customHeaders ??
        props.submitOption?.global?.customHeaders ??
        undefined

      const res = await submitData(
        {
          data: { [props.keys?.idsKey ?? 'ids']: ids },
          validation: (deleteManyValidation as ZodType<any>) ?? undefined,
          endpoint: endPointDeleteMany,
          mode: 'delete',
          db: DB_NAME,
          authType,
          token,
          customHeaders,
          deleteDataDB,
          demo: props.demo,
        },
        undefined,
        props.keys?.idKey ?? 'id',
        props.keys?.idsKey ?? 'ids',
      )
      refs.selectedItems.value = []
      if (props.base?.dataTabelCustomDisplay) {
        emit('refreshData')
        loader.value?.show('success', labels.message.success.deleteMany)
        closeModal()
        return res
      } else {
        await setUpData()
        loader.value?.show('success', labels.message.success.deleteMany)
        closeModal()
        return res
      }
    } catch (err: any) {
      ShowAlert(
        'error',
        labels.message.error.deleteMany,
        Object.entries(err).map(([key, message]) => `${key} : ${message}`),
      )
      loader.value?.show('error', labels.message.error.deleteMany)
    }
  }

  return {
    initialData,
    openEditModal,
    openCreateModal,
    openShowModal,
    openWarningDeleteData,
    openWarningDeleteSelectedData,
    closeModal,
    submitFormData,
    DeleteData,
    DeleteSeletedData,
  }
}
