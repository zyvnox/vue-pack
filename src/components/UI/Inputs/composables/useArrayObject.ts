// composables/useArrayObject.ts
import { ref, computed, watch } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { ArrayObjectProps, GlobalDefaultText } from '../../../../configs/types'

interface ArrayObjectComposable {
  showModal: Ref<boolean>
  currentEditItem: Ref<any>
  currentEditIndex: Ref<number | null>
  removeDatas: Ref<number[]>
  addButtonText: ComputedRef<string>
  localItems: Ref<any[]>
  handleAddClick: () => void
  handleEditClick: (idx: number) => void
  handleSubmit: (item: any) => void
  remove: (index: number) => void
  getImageSrc: (image: string | File) => string
}

export function useArrayObject(
  props: ArrayObjectProps,
  labels: Ref<GlobalDefaultText>,
  emit: (e: 'update:modelValue', value: any[], key: string) => void,
): ArrayObjectComposable {
  const showModal = ref(false)
  const currentEditItem = ref<any>({})
  const currentEditIndex = ref<number | null>(null)
  const removeDatas = ref<number[]>([])
  const localItems = ref<any[]>([...(props.modelValue ?? [])])
  watch(
    () => props.modelValue,
    (val) => {
      localItems.value = [...(val ?? [])]
    },
  )

  const addButtonText = computed(() => {
    return labels.value.btn.add || 'Add Item'
  })

  const handleAddClick = (): void => {
    currentEditItem.value = {}
    currentEditIndex.value = null
    showModal.value = true
  }

  const handleEditClick = (idx: number): void => {
    currentEditItem.value = { ...localItems.value[idx] }
    currentEditIndex.value = idx
    showModal.value = true
  }

  const handleSubmit = (item: any): void => {
    const newItems = [...localItems.value]
    if (currentEditIndex.value === null) {
      newItems.push(item)
    } else {
      if (currentEditItem.value.id) {
        item.id = currentEditItem.value.id
      }
      newItems[currentEditIndex.value] = item
    }
    localItems.value = newItems
    emit('update:modelValue', newItems, props.id!)
    showModal.value = false
  }

  const remove = (index: number): void => {
    const newItems = [...localItems.value]
    newItems.splice(index, 1)
    localItems.value = newItems
    emit('update:modelValue', newItems, props.id!)
  }

  const getImageSrc = (image: string | File): string => {
    if (typeof image === 'string') return image
    if (image instanceof File) return URL.createObjectURL(image)
    return ''
  }

  return {
    showModal,
    currentEditItem,
    currentEditIndex,
    removeDatas,
    addButtonText,
    localItems,
    handleAddClick,
    handleEditClick,
    handleSubmit,
    remove,
    getImageSrc,
  }
}
