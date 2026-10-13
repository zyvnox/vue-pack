// defaults/defaultTabelOptions.ts

import type {
  TabelFeatureToggles,
  TabelManualControl,
  TabelPagination,
  TabelValidationSchema,
  TabelEndpoints,
  DataKeyConfig,
  CustomAction,
  Item,
  SubmitAuthOptionMap,
} from '../types'

export const defaultKeys: DataKeyConfig = {
  idKey: 'id',
  idsKey: 'ids',
}

export const defaultFeatureToggles: TabelFeatureToggles = {
  btnInfoActive: true,
  searchQueryActive: true,
  sortable: true,
  createActive: true,
  updateActive: true,
  deleteActive: true,
  deleteManyActive: true,
  displayActive: true,
}

export const defaultManualControl: TabelManualControl = {
  create: false,
  update: false,
  delete: false,
  deleteMany: false,
  display: false,
}

export const defaultPagination: TabelPagination = {
  itemsPerPage: 5,
  maxVisiblePages: 5,
}

export const defaultValidation: TabelValidationSchema<Item> = {
  create: undefined,
  update: undefined,
  delete: undefined,
  deleteMany: undefined,
}

export const defaultEndpoints: TabelEndpoints = {
  create: undefined,
  update: undefined,
  delete: undefined,
  deleteMany: undefined,
}

export const defaultSubmitAuth: SubmitAuthOptionMap = {
  global: {
    authType: 'cookie',
  },
}
