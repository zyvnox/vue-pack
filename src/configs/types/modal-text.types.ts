// types/modal-ui.types.ts

export interface GlobalModal {
  displayNullValue?: boolean
  labels?: {
    title?: {
      display?: string
      create?: string
      update?: string
    }
    optional?: string
    required?: string
    btn?: {
      close?: string
      cancel?: string
      create?: string
      update?: string
      submit?: {
        create?: string
        update?: string
      }
    }
  }
}

export interface ModalView {
  labels: {
    title?: string
    btn: {
      close?: string
    }
  }
  displayNullValue?: boolean
}

export interface ModalCreateUpdate {
  labels: {
    btn: {
      submit?: string
      cancel?: string
      optional?: string
    }
    title?: string
    required?: string
  }
}
