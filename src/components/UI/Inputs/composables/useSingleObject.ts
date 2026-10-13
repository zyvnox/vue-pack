import { ref } from 'vue'
import type { Ref } from 'vue'
import type { SingleObjectProps } from '../../../../configs/types'

interface SingleObjectComposable {
  fieldIsColor: Ref<string[]>
  addColor: (key: string, color: string) => void
  removeColor: (key: string, index: number) => void
  errorPush: (key: string, message: string) => void
  errorRemove: (key: string) => void
}

export function useSingleObject<TEmit extends (event: any, ...args: any[]) => void>(
  props: SingleObjectProps,
  emit: TEmit,
): SingleObjectComposable {
  const fieldIsColor = ref<string[]>([])

  const addColor = (key: string, color: string): void => {
    if (!fieldIsColor.value.includes(color)) {
      fieldIsColor.value.push(color)
      emit('update:model-value', [...fieldIsColor.value], key)
    }
    emit('add-color', key, color)
  }

  const removeColor = (key: string, index: number): void => {
    fieldIsColor.value.splice(index, 1)
    emit('update:model-value', [...fieldIsColor.value], key)
    emit('remove-color', key, index)
  }

  const errorPush = (key: string, message: string): void => {
    emit('push:errors', key, message)
  }

  const errorRemove = (key: string): void => {
    emit('remove:errors', key)
  }

  return {
    fieldIsColor,
    addColor,
    removeColor,
    errorPush,
    errorRemove,
  }
}
