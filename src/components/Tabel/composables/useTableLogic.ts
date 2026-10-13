import { ref, computed, type Ref } from 'vue'
import { getFromIndexedDB, getItemById } from '../../../lib'
import { submitData } from '../../../fetch'
import type { Item, TabelDataConfig, dataProperty, GlobalDefaultText } from '../../../configs/types'

import type { StoreArray } from '../../../lib'
export function useTableLogic<TEmit extends (event: any, ...args: any[]) => void>(
  props: TabelDataConfig<Item>,
  emit: TEmit,
  loader: Ref<any>,
  labels: GlobalDefaultText,
) {
  const searchQuery = ref('')
  const currentPage = ref(1)
  const selectedItems = ref<(string | number)[]>([])
  const selectAll = ref(false)
  const showWarningModel = ref(false)
  const showWarningModelSelected = ref(false)
  const idData = ref<string | number | null>(null)
  const sortField = ref<string | null>(null)
  const sortDirection = ref<'asc' | 'desc'>('asc')
  const FormModalOpen = ref(false)
  const detailItemModal = ref(false)
  const isUpdate = ref<number | null>(null)
  const dataChildDelete = ref<number[] | null>(null)
  const itemsPerPage = computed(() => props.pagination?.itemsPerPage ?? 10)
  const maxVisiblePages = computed(() => props.pagination?.maxVisiblePages ?? 5)
  const filterField = ref<string | null>(null)
  const filterMode = ref<'none' | 'max' | 'min' | 'freq'>('none')

  const selectedItem = computed<Item>(() => {
    const key = props.keys?.idKey
    return props.data.find((item: Item) => item?.[key ?? 'id'] === idData.value) || ({} as Item)
  })

  const selectedItemNames = computed(() => {
    // Ambil kunci untuk ID dan Nama secara dinamis dari properti Anda
    const idKey = props.keys?.idKey ?? 'id'
    const nameKey = props.keys?.nameKey ?? 'name'

    // 1. Filter props.data: Ambil hanya item yang ID-nya ada di dalam array selectedItems.
    return (
      props.data
        .filter((item: Item) => selectedItems.value.includes(item[idKey]))
        // 2. Map hasilnya: Dari item yang sudah difilter, ambil hanya properti namanya.
        .map((item: Item) => item[nameKey])
        // 3. Join hasilnya: Gabungkan semua nama menjadi satu string, dipisahkan koma.
        .join(', ')
    )
  })

  const filteredData = computed<Item[]>(() => {
    let result = (props.base.data ?? []).filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.value.toLowerCase()),
      ),
    )
    if (sortField.value) {
      result.sort((a, b) => {
        let valA = a[sortField.value!]
        let valB = b[sortField.value!]
        if (typeof valA === 'string') valA = valA.toLowerCase()
        if (typeof valB === 'string') valB = valB.toLowerCase()
        if (valA < valB) return sortDirection.value === 'asc' ? -1 : 1
        if (valA > valB) return sortDirection.value === 'asc' ? 1 : -1
        return 0
      })
    }
    return result
  })

  const paginatedData = computed<Item[]>(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    return filteredData.value.slice(start, start + itemsPerPage.value)
  })

  const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value))

  const visiblePages = computed(() => {
    const pages: (number | '...')[] = []
    const total = totalPages.value
    const current = currentPage.value
    const maxVisible = maxVisiblePages.value // misalnya 5

    if (total <= maxVisible + 2) {
      // tampilkan semua kalau sedikit
      for (let i = 1; i <= total; i++) pages.push(i)
      return pages
    }

    pages.push(1)

    let start = Math.max(2, current - 2)
    let end = Math.min(total - 1, current + 2)

    if (start > 2) {
      pages.push('...')
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < total - 1) {
      pages.push('...')
    }

    pages.push(total)

    return pages
  })

  function toggleAll() {
    selectedItems.value = selectAll.value
      ? paginatedData.value.map((item) => item?.[props.keys?.idKey ?? 'id'])
      : []
  }

  function sortBy(field: string) {
    if (sortField.value === field) {
      sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc'
    } else {
      sortField.value = field
      sortDirection.value = 'desc'
    }
  }

  function prevPage() {
    if (currentPage.value > 1) currentPage.value--
  }

  function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++
  }

  // helper untuk ambil value by path (misal "images.colorToolsId")
  function getValueByPath1(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => acc?.[key], obj)
  }

  async function RefresData() {
    // case: IndexedDB
    if (props.base.source.DB_NAME) {
      const data = await getFromIndexedDB(props.base.source.DB_NAME as StoreArray)

      if (props.base.source.connect?.length) {
        // prefetch semua child DB paralel
        const connectedMap: Record<string, any[]> = {}
        await Promise.all(
          props.base.source.connect.map(async (c) => {
            connectedMap[c.DB_NAME] = await getFromIndexedDB(c.DB_NAME as StoreArray)
          }),
        )

        return data.map((item) => {
          let result = { ...item }
          for (const c of props.base.source.connect!) {
            const parentKey = c.key
            const childKey = c.connectKey

            const children = (connectedMap[c.DB_NAME] || []).filter(
              (cd) => getValueByPath(cd, childKey) === getValueByPath(item, parentKey),
            )

            result[c.DB_NAME] = children.length > 0 ? children : null
          }
          return result
        })
      }
      return data
    }

    // case: API
    else if (props.base.source.fetchApi?.getAll) {
      const getAuthOptions = (mode: 'get' | 'delete' = 'get') => ({
        authType:
          props.submitOption?.[mode]?.authType ?? props.submitOption?.global?.authType ?? 'cookie',
        token: props.submitOption?.[mode]?.token ?? props.submitOption?.global?.token,
        customHeaders:
          props.submitOption?.[mode]?.customHeaders ?? props.submitOption?.global?.customHeaders,
      })

      const response = await submitData({
        mode: 'get',
        endpoint: props.base.source.fetchApi?.getAll,
        db: props.base.source.DB_NAME,
        ...getAuthOptions(),
      })
      if (!response.data) {
        response.data = response
      }
      if (props.base.source.fetchApi.connect?.length) {
        const connectedMap: Record<string, any[]> = {}

        // prefetch semua child API paralel
        await Promise.all(
          props.base.source.fetchApi.connect.map(async (c) => {
            const resp = await submitData({
              mode: 'get',
              endpoint: c.url,
              db: props.base.source.DB_NAME,
              ...getAuthOptions(),
            })
            const mapKey = c.valueKey ?? c.url ?? c.key
            connectedMap[mapKey] = resp.data ?? []
          }),
        )

        if (!response.data || !Array.isArray(response.data)) return response.data

        return response.data.map((item: any) => {
          let result = { ...item }
          for (const c of props.base.source.fetchApi!.connect!) {
            const parentKey = c.key
            const childKey = c.connectKey
            const mapKey = c.valueKey ?? c.url ?? c.key

            const children = (connectedMap[mapKey] || []).filter(
              (cd: any) => getValueByPath(cd, childKey) === getValueByPath(item, parentKey),
            )

            result[mapKey] = children.length > 0 ? children : null
          }
          return result
        })
      }

      return response.data ?? []
    } else {
      return undefined
    }
  }

  async function GetDataConnect(DP: dataProperty, id: string | number) {
    if (DP.connect?.withDB) {
      return await getItemById(DP.connect.withDB.DB_NAME, id)
    } else if (DP.connect?.withFetch) {
      const authType: 'cookie' | 'bearer' | 'none' | 'custom' =
        props.submitOption?.delete?.authType ?? props.submitOption?.global?.authType ?? 'cookie'
      const token: string | undefined =
        props.submitOption?.delete?.token ?? props.submitOption?.global?.token ?? undefined
      const customHeaders: Record<string, string> | undefined =
        props.submitOption?.delete?.customHeaders ??
        props.submitOption?.global?.customHeaders ??
        undefined
      const response = await submitData({
        mode: 'get',
        endpoint: DP.connect?.withFetch.url + '/' + id,
        db: props.base.source.DB_NAME,
        authType,
        token,
        customHeaders,
      })
      if (!response.data) {
        response.data = response
      }
      if (response.data) {
        return response.data
      }
    } else {
      return undefined
    }
  }

  async function GetDataById<T extends { id: string | number; [key: string]: any }>(
    list: T[],
    id: string | number,
  ): Promise<T | undefined> {
    return list.find((item) => item[props.keys?.idKey ?? 'id'] == id)
  }

  let fisrt: boolean = true
  let autoRefreshTimer: ReturnType<typeof setTimeout> | null = null
  async function setUpData() {
    if (fisrt) {
      loader.value?.show('loading', labels.message.process.loading)
    }
    if (props.base?.dataTabelCustomDisplay && props.base?.dataTabelCustomDisplay.length !== 0) {
      props.base.data = props.base.dataTabelCustomDisplay
      props.data = await RefresData()
      await SetUpSchema()
      if (fisrt) {
        loader.value?.hide()
        fisrt = false
      }
      return
    }

    const dataDB = await RefresData()
    props.data = dataDB
    await SetUpSchema()
    if (!Array.isArray(dataDB)) {
      if (fisrt) {
        loader.value?.hide()
        fisrt = false
      }
      return
    } else {
      const idKey = props.keys?.idKey ?? 'id'
      dataDB.sort((a, b) => {
        // kalau ada updatedAt pakai itu, kalau enggak fallback ke id
        if (a.updatedAt && b.updatedAt) {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        }
        return (b[idKey] ?? 0) - (a[idKey] ?? 0)
      })

      props.data = dataDB
    }

    const idKey = props.keys?.idKey
    const shouldInitHeader =
      props.base.headersTabelDisplay?.length === 0 || props.base.headersTabelDisplay === undefined
    props.base.data = await Promise.all(
      dataDB.map(async (item: any) => {
        const mappedItem: Record<string, any> = {}

        if (idKey && item[idKey] != null) {
          mappedItem[idKey] = item[idKey]
          if (
            shouldInitHeader &&
            (!props.base.headersTabelDisplay?.includes(idKey) ||
              props.base.headersTabelDisplay === undefined)
          ) {
            props.base.headersTabelDisplay = []
          }
        }

        if (props.base.dataTabelDisplay) {
          for (const [header, path] of Object.entries(props.base.dataTabelDisplay)) {
            if (typeof path === 'string') {
              mappedItem[header] = getValueByPath(item, path) ?? null
              if (shouldInitHeader && !props.base.headersTabelDisplay?.includes(header)) {
                props.base.headersTabelDisplay?.push(header)
              }
            } else {
              let value = getValueByPath(item, path.valueKey)
              if ((path.connect?.withDB || path.connect?.withFetch) && value) {
                if (Array.isArray(value)) {
                  const results = await Promise.all(
                    value.map(async (v) => {
                      const getValConnect = await GetDataConnect(path, v)
                      return getValConnect
                        ? getValConnect[
                            path.connect?.withDB?.valueKey ?? path.connect?.withFetch?.valueKey!
                          ]
                        : v
                    }),
                  )
                  mappedItem[header] = results
                } else {
                  const getValConnect = await GetDataConnect(path, value)
                  if (getValConnect) {
                    value =
                      getValConnect[
                        path.connect.withDB?.valueKey ?? path.connect.withFetch?.valueKey!
                      ]
                  }
                  mappedItem[header] = value
                }
              } else {
                mappedItem[header] = value ?? null
              }

              if (shouldInitHeader && !props.base.headersTabelDisplay?.includes(header)) {
                props.base.headersTabelDisplay?.push(header)
              }
            }
          }
        } else {
          let count = 0
          for (const [key, val] of Object.entries(item)) {
            if (key === idKey) continue
            if (count >= 8) break

            const label = toTitleCase(key)
            mappedItem[label] = val ?? null

            if (shouldInitHeader && !props.base.headersTabelDisplay?.includes(label)) {
              props.base.headersTabelDisplay?.push(label)
            }

            count++
          }
        }
        return mappedItem
      }),
    )
    if (fisrt) {
      loader.value?.hide()
      fisrt = false
    }
    if (props.base?.source?.fetchApi?.autoRefresh?.time) {
      if (autoRefreshTimer) clearTimeout(autoRefreshTimer)
      autoRefreshTimer = setTimeout(() => {
        setUpData()
      }, props.base.source.fetchApi.autoRefresh.time)
    }
  }

  async function SetUpSchema() {
    // Daftar schema yang perlu diproses (global, create, update, display)
    const schemaGroups = {
      global: props.base.schema.global ?? {},
      create: props.base.schema.create ?? {},
      update: props.base.schema.update ?? {},
      display: props.base.schema.display ?? {},
    }

    // Utility: ambil authOption
    const resolveAuth = (mode: 'get') => ({
      authType:
        props.submitOption?.[mode]?.authType ?? props.submitOption?.global?.authType ?? 'cookie',
      token: props.submitOption?.[mode]?.token ?? props.submitOption?.global?.token,
      customHeaders:
        props.submitOption?.[mode]?.customHeaders ?? props.submitOption?.global?.customHeaders,
    })

    // Utility: proses field select (url / DB)
    const processSelectField = async (field: any) => {
      const valKeyOptions = field.options?.valueKey ?? 'id'
      const valKeyOptionsView = field.options?.viewKey ?? 'name'
      let data
      // Jika ambil dari API
      if (field.options?.url) {
        data = await submitData({
          mode: 'get',
          endpoint: field.options.url,
          ...resolveAuth('get'),
        })
        if (Array.isArray(data?.data)) {
          field.options = data.data.map((item: any) => item[valKeyOptions]) ?? []
          if (field.options?.viewKey) {
            field.optionsView = data.data.map((item: any) => item[valKeyOptionsView]) ?? []
          } else {
            field.optionsView = data.data.map((item: any) => item[valKeyOptions]) ?? []
          }
        }
      }

      // Jika ambil dari IndexedDB
      if (field.options?.DB_NAME) {
        const storeName = field.options?.DB_NAME ?? field.optionsView?.DB_NAME
        data = await getFromIndexedDB(storeName as StoreArray)
        if (Array.isArray(data)) {
          const optionsConfig = field.options
          if (optionsConfig?.DB_NAME) {
            field.options = data.map((item: any) => item[valKeyOptions]) ?? []
          }
          if (optionsConfig?.viewKey) {
            field.optionsView = data.map((item: any) => item[valKeyOptionsView]) ?? []
          } else {
            field.optionsView = data.map((item: any) => item[valKeyOptions]) ?? []
          }
        }
      }
    }

    // Utility: proses field duplicate validation
    const processDuplicateField = (field: any, key: string) => {
      if (props.data && field.validate?.duplicate === true) {
        field.validate.duplicate = props.data.map((item: any) => item[key]) ?? []
      }
    }

    async function processSchemaRecursive(schema: Record<string, any>) {
      for (const [key, field] of Object.entries<any>(schema)) {
        const type = field?.type

        if (type === 'select') {
          await processSelectField(field)
        }
        if (type === 'text') {
          processDuplicateField(field, key)
        }
        if (type === 'optionGroupSchema') {
          const opts = field?.options ?? {}
          for (const [optionKey, optionSchema] of Object.entries<any>(opts)) {
            await processSchemaRecursive(optionSchema)
          }
        }
        if (type === 'arrayObject') {
          if (field.schema) {
            await processSchemaRecursive(field.schema)
          }
        }
        if (type === 'object') {
          if (field.schema) {
            await processSchemaRecursive(field.schema)
          }
        }
      }
    }

    // Loop tiap group schema
    for (const [groupName, schema] of Object.entries(schemaGroups)) {
      if (!schema) continue
      await processSchemaRecursive(schema)
    }
  }

  function getValueByPath(obj: any, path: string): any {
    if (!obj || typeof path !== 'string') return undefined

    try {
      const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let result: any = obj

      for (const key of keys) {
        if (result == null) return undefined

        if (Array.isArray(result)) {
          const index = Number(key)
          if (!isNaN(index)) {
            result = result[index]
          } else {
            result = result.map((item) => item?.[key]).filter((v) => v !== undefined)
            if (result.some((v: any) => Array.isArray(v))) {
              result = result.flat()
            }
            if (result.length === 1) {
              result = result[0]
            }
          }
        } else {
          result = result?.[key]
        }
      }

      return result
    } catch (err) {
      return '-'
    }
  }

  function toTitleCase(str: string): string {
    return str
      .replace(/([A-Z])/g, ' $1') // Pisah camelCase
      .replace(/[_\-]/g, ' ') // Ganti underscore/dash
      .replace(/\s+/g, ' ') // Rapikan spasi
      .trim()
      .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
  }

  return {
    searchQuery,
    currentPage,
    selectedItems,
    selectAll,
    showWarningModel,
    showWarningModelSelected,
    idData,
    sortField,
    sortDirection,
    FormModalOpen,
    detailItemModal,
    isUpdate,
    dataChildDelete,
    selectedItem,
    selectedItemNames,
    filteredData,
    paginatedData,
    totalPages,
    visiblePages,
    toggleAll,
    sortBy,
    prevPage,
    nextPage,
    setUpData,
    getValueByPath,
    toTitleCase,
    GetDataById,
  }
}
