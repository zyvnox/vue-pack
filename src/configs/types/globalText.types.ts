export type SupportedLanguage = 'en' | 'id' | (string & {})

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends readonly (infer U)[]
      ? readonly DeepPartial<U>[]
      : T[P] extends object
        ? DeepPartial<T[P]>
        : T[P]
}

export interface CustomLanguagePack {
  lang: string
  fallback?: 'en' | 'id'
  labels?: DeepPartial<GlobalDefaultText>
  inputs?: Partial<Record<string, string>>
  errors?: {
    required?: string
    [key: string]: string | undefined
  }
}

export interface GlobalDefaultText {
  lang: string
  required: string
  optional: string
  noSelection: string
  search: string
  reset: string
  filter: string
  save: string
  action: string

  // Counter / Statistics
  counter: {
    word: string
    words: string
    character: string
    characters: string
    item: string
    items: string
    selected: string
    total: string
    remaining: string
    page: string
    of: string
    showing: string
    entry: string
    entries: string
  }

  // File upload
  upload: {
    dragDrop: string
    orClick: string
    maxFiles: string
    maxSize: string
    uploading: string
    uploaded: string
    remove: string
    replace: string
    preview: string
    name: string
    size: string
    type: string
    pixels: string
    ratio: string
    watermark: string
    selectImage: string
    changeImage: string
    useUrl: string
    watermarkConfig: string
    watermarkHint: string
    invalidUrl: string
    invalidUrlDesc: string
    invalidFileType: string
    processingImage: string
    watermarkMissing: string
    watermarkMissingHint: string
    watermarkSkipped: string
    corsError: string
    corsFallbackPrompt: string
    watermarkError: string
    processingError: string
    enterWatermarkUrl: string
    watermarkUrlPrompt: string
  }

  // Status
  status: {
    loading: string
    saving: string
    saved: string
    error: string
    success: string
    warning: string
    info: string
    empty: string
    active: string
    inactive: string
    pending: string
    processing: string
    completed: string
    cancelled: string
  }

  // Quill Editor
  editor: {
    wordCount: string
    charCount: string
    readingTime: string
    minutes: string
    maximize: string
    minimize: string
    sourceCode: string
    preview: string
    aiGenerate: string
    alignLeft: string
    alignCenter: string
    alignRight: string
    alignFull: string
    altText: string
    insertLink: string
    insertImage: string
    insertVideo: string
    generatingContent: string
    generating: string
    undo: string
    redo: string
    fontFamily: string
    fontSize: string
    headingLevel: string
    normal: string
    bold: string
    italic: string
    underline: string
    strike: string
    subscript: string
    superscript: string
    textColor: string
    bgColor: string
    textDirection: string
    orderedList: string
    bulletList: string
    checkList: string
    indentDecrease: string
    indentIncrease: string
    blockquote: string
    codeBlock: string
    divider: string
    clearFormat: string
    aiModalTitle: string
    aiModalSubtitle: string
    aiTopicLabel: string
    aiTopicPlaceholder: string
    aiKeywordLabel: string
    aiKeywordPlaceholder: string
    aiToneLabel: string
    aiToneProfessional: string
    aiToneCasual: string
    aiToneInformative: string
    aiTonePersuasive: string
    aiTips: string
    aiGenerateNow: string
    editAltTitle: string
    altPlaceholder: string
    altHelp: string
    embedGalleryEmpty: string
    embedDeleteConfirmTitle: string
    embedDeleteConfirmDesc: string
    embedDeleteProceed: string
    embedInsert: string
    embedInserting: string
    embedTabLibrary: string
    embedTabUpload: string
    embedTabUrl: string
    embedDirectUrl: string
    embedDisplayText: string
    embedInvalidType: string
  }

  // DataTable
  table: {
    rowsPerPage: string
    showing: string
    to: string
    of: string
    entries: string
    noData: string
    noResult: string
    clearFilter: string
    sortAsc: string
    sortDesc: string
    filterColumn: string
    selectAll: string
    deselectAll: string
    export: string
    import: string
    refresh: string
    columns: string
    settings: string
    contentName: string
    seoScore: string
    avgSeo: string
    viewSeoReport: string
    totalScore: string
    actions: string
  }

  // Common actions
  common: {
    copy: string
    copied: string
    paste: string
    cut: string
    undo: string
    redo: string
    save: string
    reset: string
    apply: string
    confirm: string
    yes: string
    no: string
    ok: string
    back: string
    next: string
    prev: string
    finish: string
    skip: string
    more: string
    less: string
    showAll: string
    showLess: string
    readMore: string
    viewAll: string
    download: string
    print: string
    share: string
    show: string
    hide: string
    delete: string
    cancel: string
    close: string
    preview: string
    empty: string
    all: string
    none: string
  }

  // Map instructions & actions
  map: {
    howToUse: string
    viewGuide: string
    viewOnlyWarning: string
    stepUnlock: string
    stepClickPin: string
    stepSearch: string
    stepManualCoords: string
    stepResetHome: string
    locked: string
    unlock: string
    understood: string
  }

  // Selection
  selection: {
    selected: string
    selectedOne: string
    selectAll: string
    clear: string
  }

  // Placeholders
  placeholder: {
    string: string
    number: string
    array: string
    select: string
    quillEditor: string
    password: string
    email: string
    tag: string
    url: string
    date: string
    time: string
    datetime: string
    files: string
    images: string
  }

  // Message
  message: {
    notFoundDesc: string
    notFound: string
    noChange: string
    noItemSelected: string
    error: {
      create: string
      update: string
      delete: string
      get: string
      getAll: string
      deleteMany: string
    }
    success: {
      create: string
      update: string
      delete: string
      get: string
      getAll: string
      deleteMany: string
    }
    process: {
      loading: string
      create: string
      update: string
      delete: string
      get: string
      getAll: string
      deleteMany: string
    }
  }

  warning: {
    delete: string
    deleteMany: string
  }

  btn: {
    edit: string
    remove: string
    add: string
    cancel: string
    close: string
    change: string
    select: string
    deleteMany: string
    create: string
    update: string
    upload: string
    display: string
    next: string
    prev: string
    toogle: {
      active: string
      inactive: string
    }
    submit: {
      create: string
      update: string
    }
  }

  title: {
    create: string
    update: string
    display: string
  }
}
