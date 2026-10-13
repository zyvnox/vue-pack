<template>
  <div
    class="zyvnox-w-full zyvnox-h-screen zyvnox-flex zyvnox-flex-col zyvnox-bg-white zyvnox-text-slate-800 zyvnox-relative zyvnox-transition-all dark:zyvnox-bg-slate-900 dark:zyvnox-text-slate-100 zyvnox-overflow-hidden"
  >
    <div
      v-if="showSeoModal"
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-[100] zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-p-4 zyvnox-bg-slate-900/50 zyvnox-backdrop-blur-sm zyvnox-animate-[fadeIn_0.2s_ease-out]"
    >
      <div
        class="zyvnox-bg-white dark:zyvnox-bg-slate-900 zyvnox-w-full zyvnox-max-w-3xl zyvnox-rounded-2xl zyvnox-shadow-xl zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-flex zyvnox-flex-col zyvnox-max-h-[85vh] zyvnox-animate-[slideIn_0.2s_ease-out]"
      >
        <div
          class="zyvnox-flex zyvnox-items-center zyvnox-justify-between zyvnox-p-6 zyvnox-border-b zyvnox-border-slate-100 dark:zyvnox-border-slate-800"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3">
            <div
              class="zyvnox-p-2 zyvnox-bg-blue-50 zyvnox-text-blue-500 zyvnox-rounded-lg dark:zyvnox-bg-blue-500/10 dark:zyvnox-text-blue-400"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 12h4l3-9 5 18 3-9h5" />
              </svg>
            </div>
            <div>
              <h2
                class="zyvnox-text-lg zyvnox-font-bold zyvnox-text-slate-800 dark:zyvnox-text-slate-100"
              >
                Laporan SEO
              </h2>
              <p class="zyvnox-text-xs zyvnox-text-slate-500">
                Rata-rata Keseluruhan: {{ averageSeoScore }}%
              </p>
            </div>
          </div>
          <button
            @click="showSeoModal = false"
            class="zyvnox-p-2 zyvnox-text-slate-400 hover:zyvnox-bg-slate-100 zyvnox-rounded-xl dark:hover:zyvnox-bg-slate-800 zyvnox-transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 6L6 18M6 6L18 18" />
            </svg>
          </button>
        </div>
        <div class="zyvnox-p-0 zyvnox-overflow-y-auto zyvnox-flex-1 table-scroll-container">
          <table class="zyvnox-w-full zyvnox-text-sm zyvnox-border-collapse">
            <thead
              class="zyvnox-sticky zyvnox-top-0 zyvnox-bg-slate-50 dark:zyvnox-bg-slate-800/90 zyvnox-backdrop-blur-md"
            >
              <tr
                class="zyvnox-text-left zyvnox-text-slate-500 dark:zyvnox-text-slate-400 zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700"
              >
                <th class="zyvnox-p-4 zyvnox-font-semibold">{{ t('table.contentName') }}</th>
                <th class="zyvnox-p-4 zyvnox-font-semibold zyvnox-text-center">
                  {{ t('table.seoScore') }}
                </th>
                <th class="zyvnox-p-4 zyvnox-font-semibold zyvnox-text-right">
                  {{ labels?.table?.actions ?? t('table.actions') }}
                </th>
              </tr>
            </thead>
            <tbody class="zyvnox-divide-y zyvnox-divide-slate-100 dark:zyvnox-divide-slate-800/50">
              <tr
                v-for="item in seoDataList"
                :key="item.id"
                class="hover:zyvnox-bg-slate-50/50 dark:hover:zyvnox-bg-slate-800/30 zyvnox-transition-colors"
              >
                <td
                  class="zyvnox-p-4 zyvnox-font-medium zyvnox-text-slate-700 dark:zyvnox-text-slate-200"
                >
                  {{ item.name }}
                </td>
                <td class="zyvnox-p-4">
                  <div class="zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-gap-2">
                    <div
                      class="zyvnox-w-2 zyvnox-h-2 zyvnox-rounded-full"
                      :class="
                        item.score >= 80
                          ? 'zyvnox-bg-emerald-500'
                          : item.score >= 50
                            ? 'zyvnox-bg-amber-500'
                            : 'zyvnox-bg-red-500'
                      "
                    ></div>
                    <span
                      class="zyvnox-font-bold"
                      :class="
                        item.score >= 80
                          ? 'zyvnox-text-emerald-600 dark:zyvnox-text-emerald-400'
                          : item.score >= 50
                            ? 'zyvnox-text-amber-600 dark:zyvnox-text-amber-400'
                            : 'zyvnox-text-red-600 dark:zyvnox-text-red-400'
                      "
                      >{{ item.score }}%</span
                    >
                  </div>
                </td>
                <td class="zyvnox-p-4 zyvnox-text-right">
                  <button
                    @click="
                      () => {
                        showSeoModal = false
                        openEditModal(item.id)
                      }
                    "
                    class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-bg-blue-50 zyvnox-text-blue-600 zyvnox-rounded-lg hover:zyvnox-bg-blue-100 zyvnox-text-sm zyvnox-font-medium zyvnox-transition-colors dark:zyvnox-bg-blue-500/10 dark:zyvnox-text-blue-400 dark:hover:zyvnox-bg-blue-500/20"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    {{ labels?.btn?.edit ?? t('btn.edit') }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="zyvnox-flex-shrink-0 zyvnox-p-6 zyvnox-pb-0">
      <div
        class="zyvnox-flex zyvnox-flex-col zyvnox-gap-4 zyvnox-p-6 zyvnox-bg-slate-50 zyvnox-rounded-2xl zyvnox-shadow-sm zyvnox-border zyvnox-border-slate-200 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-700"
      >
        <div
          class="zyvnox-flex zyvnox-items-center zyvnox-flex-col zyvnox-justify-center zyvnox-gap-4 min-[512px]:zyvnox-flex-row min-[512px]:zyvnox-justify-between min-[512px]:zyvnox-items-center"
        >
          <div class="zyvnox-flex zyvnox-items-center">
            <div class="zyvnox-flex zyvnox-gap-3 zyvnox-flex-wrap">
              <button
                v-if="propertys?.feature?.createActive"
                @click="openCreateModal()"
                class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-6 zyvnox-py-3 zyvnox-border-none zyvnox-rounded-lg zyvnox-text-sm zyvnox-font-medium zyvnox-cursor-pointer zyvnox-transition-all zyvnox-relative zyvnox-overflow-hidden zyvnox-bg-gradient-to-br zyvnox-from-blue-500 zyvnox-to-blue-600 zyvnox-text-white zyvnox-shadow-md hover:zyvnox-shadow-lg hover:-zyvnox-translate-y-0.5 dark:zyvnox-from-blue-600 dark:zyvnox-to-blue-700"
              >
                <span class="zyvnox-flex zyvnox-items-center zyvnox-justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                {{ labels?.btn?.add ?? t('btn.add') }}
              </button>

              <button
                v-if="selectedItems.length > 0 && propertys?.feature?.deleteManyActive"
                @click="openWarningDeleteSelectedData()"
                class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-6 zyvnox-py-3 zyvnox-border-none zyvnox-rounded-lg zyvnox-text-sm zyvnox-font-medium zyvnox-cursor-pointer zyvnox-transition-all zyvnox-bg-gradient-to-br zyvnox-from-red-500 zyvnox-to-red-600 zyvnox-text-white zyvnox-shadow-md hover:zyvnox-shadow-lg hover:-zyvnox-translate-y-0.5"
              >
                {{ labels?.btn?.deleteMany ?? t('btn.deleteMany') }}
              </button>
            </div>
          </div>

          <button
            v-if="averageSeoScore !== null"
            @click="showSeoModal = true"
            class="zyvnox-flex zyvnox-items-center zyvnox-text-slate-600 dark:zyvnox-text-slate-300 zyvnox-gap-3 zyvnox-p-2 zyvnox-px-4 zyvnox-bg-white zyvnox-rounded-xl zyvnox-border zyvnox-border-slate-200 dark:zyvnox-bg-slate-900/50 dark:zyvnox-border-slate-700 hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-800 zyvnox-transition-colors zyvnox-cursor-pointer zyvnox-text-left"
            :title="t('table.viewSeoReport')"
          >
            <div class="zyvnox-w-10 zyvnox-h-10">
              <svg
                viewBox="0 0 36 36"
                class="zyvnox-block zyvnox-m-auto zyvnox-max-w-full zyvnox-max-h-full"
              >
                <path
                  class="zyvnox-fill-none zyvnox-stroke-slate-200 dark:zyvnox-stroke-slate-700 zyvnox-stroke-[3.8]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="zyvnox-fill-none zyvnox-stroke-[3.8] [stroke-linecap:round] zyvnox-transition-colors"
                  :stroke-dasharray="`${averageSeoScore}, 100`"
                  :class="seoColorClass"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text
                  x="18"
                  y="19.5"
                  class="zyvnox-fill-slate-900 dark:zyvnox-fill-slate-300 zyvnox-font-sans zyvnox-font-bold zyvnox-text-[12px] zyvnox-p-2"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  {{ averageSeoScore }}
                </text>
              </svg>
            </div>
            <span class="zyvnox-text-xs zyvnox-font-bold zyvnox-uppercase zyvnox-tracking-wider">{{
              t('table.avgSeo')
            }}</span>
          </button>

          <div class="zyvnox-flex zyvnox-items-center">
            <div
              class="zyvnox-relative zyvnox-min-w-[250px]"
              v-if="propertys?.feature?.searchQueryActive"
            >
              <div
                class="zyvnox-absolute zyvnox-left-3 zyvnox-top-1/2 -zyvnox-translate-y-1/2 zyvnox-text-slate-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="labels?.search || 'Search...'"
                class="zyvnox-w-full zyvnox-py-3 zyvnox-pr-3 zyvnox-pl-10 zyvnox-bg-white zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-lg zyvnox-text-sm focus:zyvnox-outline-none focus:zyvnox-border-blue-500 dark:zyvnox-bg-slate-900 dark:zyvnox-border-slate-700 dark:zyvnox-text-slate-100"
              />
            </div>
          </div>
        </div>

        <div
          v-if="selectedItems.length > 0"
          class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-bg-blue-500 zyvnox-text-white zyvnox-rounded-lg zyvnox-text-sm zyvnox-animate-[slideIn_0.2s_ease-out]"
        >
          <span
            class="zyvnox-bg-white/20 zyvnox-px-2 zyvnox-py-0.5 zyvnox-rounded zyvnox-font-bold"
            >{{ selectedItems.length }}</span
          >
          {{
            selectedItems.length === 1
              ? `${t('counter.item')} ${t('counter.selected')}`
              : `${t('counter.items')} ${t('counter.selected')}`
          }}
        </div>
      </div>
    </div>

    <div class="zyvnox-flex-1 zyvnox-overflow-hidden zyvnox-p-6 zyvnox-flex zyvnox-flex-col">
      <div
        v-if="filteredData.length === 0"
        class="zyvnox-flex-1 zyvnox-flex zyvnox-flex-col zyvnox-items-center zyvnox-justify-center zyvnox-bg-slate-50 zyvnox-rounded-2xl zyvnox-border zyvnox-border-dashed zyvnox-border-slate-300 dark:zyvnox-bg-slate-800/50 dark:zyvnox-border-slate-700"
      >
        <h3 class="zyvnox-text-lg zyvnox-font-semibold zyvnox-text-slate-400">
          {{ labels?.message?.notFound ?? t('message.notFound') }}
        </h3>
      </div>

      <div
        v-else
        class="zyvnox-flex-1 zyvnox-overflow-auto zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-xl zyvnox-bg-white zyvnox-shadow-sm dark:zyvnox-border-slate-700 dark:zyvnox-bg-slate-900 table-scroll-container"
      >
        <table class="zyvnox-w-full zyvnox-border-collapse zyvnox-relative">
          <thead
            class="zyvnox-sticky zyvnox-top-0 zyvnox-bg-slate-100 dark:zyvnox-bg-slate-800 zyvnox-z-20"
          >
            <tr class="zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700">
              <th class="zyvnox-w-12 zyvnox-p-4 zyvnox-bg-inherit">
                <input
                  v-if="propertys?.feature?.deleteManyActive"
                  type="checkbox"
                  @change="toggleAll"
                  v-model="selectAll"
                  class="zyvnox-w-4 zyvnox-h-4 zyvnox-cursor-pointer"
                />
              </th>
              <th
                v-for="(header, index) in propertys?.base.headersTabelDisplay"
                :key="header"
                class="zyvnox-p-4 zyvnox-text-left zyvnox-text-xs zyvnox-font-bold zyvnox-text-slate-500 zyvnox-uppercase zyvnox-tracking-wider zyvnox-whitespace-nowrap zyvnox-bg-inherit dark:zyvnox-text-slate-400"
                :class="{ 'zyvnox-hidden md:zyvnox-table-cell': index > 0 }"
              >
                <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-2">
                  <span>{{ header }}</span>
                  <Tooltip
                    v-if="getColumnTooltip(header)"
                    :text="getColumnTooltip(header)!.tooltip"
                    :position="getColumnTooltip(header)?.position ?? 'top'"
                  >
                    <span
                      class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs zyvnox-cursor-help"
                    >
                      {{ getColumnTooltip(header)?.icon ?? '❓' }}
                    </span>
                  </Tooltip>
                  <button
                    v-if="propertys?.feature?.sortable"
                    @click="sortBy(header)"
                    class="zyvnox-text-slate-400 hover:zyvnox-text-blue-500"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M8 9L12 5L16 9M16 15L12 19L8 15" />
                    </svg>
                  </button>
                </div>
              </th>
              <th
                class="zyvnox-p-4 zyvnox-text-right zyvnox-text-xs zyvnox-font-bold zyvnox-text-slate-500 zyvnox-uppercase zyvnox-bg-inherit dark:zyvnox-text-slate-400"
              >
                {{ labels?.table?.actions ?? t('table.actions') }}
              </th>
            </tr>
          </thead>

          <tbody class="zyvnox-divide-y zyvnox-divide-slate-100 dark:zyvnox-divide-slate-800">
            <tr
              v-for="item in paginatedData"
              :key="item?.[propertys?.keys?.idKey ?? 'id']"
              class="zyvnox-transition-colors hover:zyvnox-bg-slate-50/80 dark:hover:zyvnox-bg-slate-800/50"
            >
              <td class="zyvnox-p-4 zyvnox-text-center">
                <input
                  type="checkbox"
                  v-model="selectedItems"
                  :value="item?.[propertys?.keys?.idKey ?? 'id']"
                  class="zyvnox-w-4 zyvnox-h-4"
                />
              </td>

              <td
                v-for="(value, key, index) in displayItem(item, props.keys?.idKey)"
                :key="key"
                class="zyvnox-p-4 zyvnox-text-sm zyvnox-text-slate-500 zyvnox-max-w-[200px] dark:zyvnox-text-slate-400"
                :class="{
                  'zyvnox-hidden md:zyvnox-table-cell': index > 0,
                  'zyvnox-font-semibold zyvnox-text-slate-800 dark:zyvnox-text-slate-100':
                    index === 0,
                }"
              >
                <template v-if="value !== null && value !== undefined">
                  <div
                    v-if="getColumnType(key) === 'richtext' || isHtml(value)"
                    v-html="value"
                    class="zyvnox-max-w-full zyvnox-max-h-16 zyvnox-overflow-hidden"
                  ></div>

                  <div v-else-if="getColumnType(key) === 'boolean'">
                    <span
                      class="zyvnox-px-3 zyvnox-py-1 zyvnox-rounded-full zyvnox-text-xs zyvnox-font-medium zyvnox-inline-block"
                      :class="{
                        'zyvnox-bg-green-500/10 zyvnox-text-emerald-500 dark:zyvnox-text-emerald-400':
                          value,
                        'zyvnox-bg-red-500/10 zyvnox-text-red-500 dark:zyvnox-text-red-400': !value,
                      }"
                    >
                      {{
                        value
                          ? labels?.btn.toogle?.active || 'Active'
                          : labels?.btn.toogle?.inactive || 'Inactive'
                      }}
                    </span>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'dateTime' || isDateTimeString(value)"
                    class="zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis zyvnox-flex zyvnox-items-center zyvnox-gap-2"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="zyvnox-shrink-0 zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
                    >
                      <path
                        d="M8 7V3M16 7V3M4 11H20M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 15H12.01M12 18H12.01M16 15H16.01M16 18H16.01M8 15H8.01M8 18H8.01"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{{ formatDateTime(value, propertys.base.lang ?? 'en') }}</span>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'date' || isDateOnlyString(value)"
                    class="zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis zyvnox-flex zyvnox-items-center zyvnox-gap-2"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="zyvnox-shrink-0 zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
                    >
                      <path
                        d="M8 7V3M16 7V3M4 11H20M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{{ formatDate(value, propertys.base.lang ?? 'en') }}</span>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'time' || isTimeOnlyString(value)"
                    class="zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis zyvnox-flex zyvnox-items-center zyvnox-gap-2"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="zyvnox-shrink-0 zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{{ formatTime(value, propertys.base.lang ?? 'en') }}</span>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'image' || isImage(value)"
                    class="zyvnox-whitespace-nowrap"
                  >
                    <div
                      class="zyvnox-w-12 zyvnox-h-12 zyvnox-rounded-lg zyvnox-overflow-hidden zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-700"
                    >
                      <img
                        :src="getImageSource(value)"
                        class="zyvnox-w-full zyvnox-h-full zyvnox-object-cover"
                        :alt="`Preview ${key}`"
                      />
                    </div>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'arrayColor' || isColorArray(value)"
                    class="zyvnox-whitespace-nowrap zyvnox-flex zyvnox-items-center zyvnox-gap-1"
                  >
                    <template v-for="(color, i) in value.slice(0, 3)" :key="i">
                      <div
                        :style="{ backgroundColor: color }"
                        class="zyvnox-w-6 zyvnox-h-6 zyvnox-rounded-full zyvnox-border-2 zyvnox-border-slate-200 zyvnox-inline-block zyvnox-mr-1 zyvnox-cursor-pointer zyvnox-transition-all hover:zyvnox-scale-110 dark:zyvnox-border-slate-700"
                        :title="color"
                      ></div>
                    </template>
                    <span
                      v-if="value.length > 3"
                      class="zyvnox-text-xs zyvnox-text-slate-400 zyvnox-ml-1 dark:zyvnox-text-slate-500"
                      >+{{ value.length - 3 }}</span
                    >
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'color' || isColor(value)"
                    class="zyvnox-whitespace-nowrap"
                  >
                    <div
                      :style="{ backgroundColor: value }"
                      class="zyvnox-w-8 zyvnox-h-8 zyvnox-rounded-full zyvnox-border-2 zyvnox-border-slate-200 zyvnox-inline-block zyvnox-mr-1 zyvnox-cursor-pointer zyvnox-transition-all hover:zyvnox-scale-110 dark:zyvnox-border-slate-700"
                      :title="value"
                    ></div>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'arrayImage' || isImageArray(value)"
                    class="zyvnox-whitespace-nowrap zyvnox-flex zyvnox-items-center zyvnox-gap-1"
                  >
                    <template v-for="(img, i) in value.slice(0, 3)" :key="i">
                      <div
                        class="zyvnox-w-8 zyvnox-h-8 zyvnox-rounded-md zyvnox-overflow-hidden zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-700"
                      >
                        <img
                          :src="getImageSource(img)"
                          class="zyvnox-w-full zyvnox-h-full zyvnox-object-cover"
                          :alt="`Preview ${key}-${i}`"
                        />
                      </div>
                    </template>
                    <span
                      v-if="value.length > 3"
                      class="zyvnox-text-xs zyvnox-text-slate-400 zyvnox-ml-1 dark:zyvnox-text-slate-500"
                      >+{{ value.length - 3 }}</span
                    >
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'file' || isFile(value)"
                    class="zyvnox-whitespace-nowrap"
                  >
                    <a
                      :href="getImageSource(value)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-slate-500 zyvnox-transition-colors hover:zyvnox-text-blue-500 dark:zyvnox-text-slate-400 dark:hover:zyvnox-text-blue-400"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="zyvnox-shrink-0"
                      >
                        <path
                          d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4805 7.89464 14.7348 8 15 8H19M14 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V8M14 3L19 8"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span class="zyvnox-overflow-hidden zyvnox-text-ellipsis">{{
                        getFileName(value)
                      }}</span>
                    </a>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'arrayFile' || isFileArray(value)"
                    class="zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis"
                  >
                    {{ value.map((file: any) => getFileName(file)).join(', ') }}
                  </div>

                  <a
                    v-else-if="getColumnType(key) === 'url'"
                    :href="value"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-blue-500 hover:zyvnox-underline zyvnox-transition-colors dark:zyvnox-text-blue-400"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="zyvnox-shrink-0"
                    >
                      <path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="zyvnox-overflow-hidden zyvnox-text-ellipsis">{{ value }}</span>
                  </a>

                  <div
                    v-else-if="getColumnType(key) === 'currency'"
                    class="zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis"
                  >
                    {{ formatCurrency(value) }}
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'rate'"
                    class="zyvnox-flex zyvnox-items-center zyvnox-gap-0.5"
                  >
                    <template v-for="i in 5" :key="i">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        :class="
                          i <= value
                            ? 'zyvnox-text-amber-400'
                            : 'zyvnox-text-slate-300 dark:zyvnox-text-slate-600'
                        "
                      >
                        <path
                          fill="currentColor"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    </template>
                  </div>

                  <div
                    v-else-if="getColumnType(key) === 'seo'"
                    class="zyvnox-flex zyvnox-items-center zyvnox-gap-2"
                  >
                    <div
                      class="zyvnox-w-2.5 zyvnox-h-2.5 zyvnox-rounded-full"
                      :class="{
                        'zyvnox-bg-red-500': value < 50,
                        'zyvnox-bg-amber-500': value >= 50 && value < 80,
                        'zyvnox-bg-emerald-500': value >= 80,
                      }"
                    ></div>
                    <span
                      class="zyvnox-font-semibold"
                      :class="{
                        'zyvnox-text-red-600 dark:zyvnox-text-red-400': value < 50,
                        'zyvnox-text-amber-600 dark:zyvnox-text-amber-400':
                          value >= 50 && value < 80,
                        'zyvnox-text-emerald-600 dark:zyvnox-text-emerald-400': value >= 80,
                      }"
                      >{{ value }}%</span
                    >
                  </div>

                  <div
                    v-else-if="Array.isArray(value)"
                    class="zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis"
                  >
                    {{ value.join(', ') }}
                  </div>

                  <div
                    v-else
                    class="zyvnox-whitespace-nowrap zyvnox-overflow-hidden zyvnox-text-ellipsis"
                  >
                    {{ value }}
                  </div>
                </template>
                <span v-else class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500">—</span>
              </td>

              <td class="zyvnox-p-4 zyvnox-text-right">
                <div class="zyvnox-hidden md:zyvnox-flex zyvnox-justify-end zyvnox-gap-2">
                  <button
                    v-for="action in getActions(item)"
                    :key="action.key"
                    @click.stop="action.handler"
                    :class="action.class"
                    class="zyvnox-p-2 zyvnox-rounded-lg zyvnox-transition-transform hover:-zyvnox-translate-y-0.5 zyvnox-flex zyvnox-items-center zyvnox-justify-center"
                    :title="action.label"
                  >
                    <span
                      v-html="action.icon"
                      class="zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-w-4 zyvnox-h-4"
                    ></span>
                  </button>
                </div>

                <div class="zyvnox-flex md:zyvnox-hidden zyvnox-justify-end zyvnox-relative">
                  <button
                    @click.stop="toggleActionMenu(item?.[propertys?.keys?.idKey ?? 'id'])"
                    class="zyvnox-p-2 zyvnox-text-slate-500 hover:zyvnox-bg-slate-100 zyvnox-rounded-lg dark:hover:zyvnox-bg-slate-800 zyvnox-transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>

                  <transition name="zyvnox-action-menu">
                    <div
                      v-if="openActionMenuId === item?.[propertys?.keys?.idKey ?? 'id']"
                      class="zyvnox-absolute zyvnox-right-0 zyvnox-top-full zyvnox-mt-1 zyvnox-w-48 zyvnox-bg-white zyvnox-rounded-xl zyvnox-shadow-lg zyvnox-border zyvnox-border-slate-200 zyvnox-z-[60] dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-700 zyvnox-py-2 zyvnox-overflow-hidden"
                    >
                      <button
                        v-for="action in getActions(item)"
                        :key="action.key"
                        @click.stop="action.handler"
                        class="zyvnox-w-full zyvnox-flex zyvnox-items-center zyvnox-gap-3 zyvnox-px-4 zyvnox-py-2 zyvnox-text-sm zyvnox-text-left hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-700 zyvnox-transition-colors"
                      >
                        <div :class="action.class" class="zyvnox-p-1.5 zyvnox-rounded-md">
                          <span
                            v-html="action.icon"
                            class="zyvnox-w-4 zyvnox-h-4 zyvnox-flex zyvnox-items-center zyvnox-justify-center"
                          ></span>
                        </div>
                        <span
                          class="zyvnox-font-medium zyvnox-text-slate-700 dark:zyvnox-text-slate-200"
                          >{{ action.label }}</span
                        >
                      </button>
                    </div>
                  </transition>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="filteredData.length > 0" class="zyvnox-flex-shrink-0 zyvnox-p-6 zyvnox-pt-0">
      <div
        class="zyvnox-flex zyvnox-flex-col zyvnox-gap-4 zyvnox-items-center zyvnox-justify-between zyvnox-p-4 zyvnox-bg-slate-50 zyvnox-rounded-2xl zyvnox-border zyvnox-border-slate-200 md:zyvnox-flex-row dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-700"
      >
        <div
          class="zyvnox-text-sm zyvnox-font-medium zyvnox-text-slate-500 dark:zyvnox-text-slate-400"
        >
          {{ t('counter.showing') }}
          <span class="zyvnox-text-slate-900 dark:zyvnox-text-slate-100">
            {{ (currentPage - 1) * (propertys?.pagination?.itemsPerPage ?? 5) + 1 }} -
            {{
              Math.min(
                currentPage * (propertys?.pagination?.itemsPerPage ?? 5),
                filteredData.length,
              )
            }}
          </span>
          {{ t('counter.of') }} {{ filteredData.length }} {{ t('counter.entries') }}
        </div>

        <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-bg-white zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-xl zyvnox-text-sm zyvnox-font-bold disabled:zyvnox-opacity-50 dark:zyvnox-bg-slate-900 dark:zyvnox-border-slate-700"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
            <span class="zyvnox-hidden sm:zyvnox-block">{{ t('common.prev') }}</span>
          </button>

          <div class="zyvnox-flex zyvnox-gap-1">
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="typeof page === 'number' && (currentPage = page)"
              :class="
                currentPage === page
                  ? 'zyvnox-bg-blue-600 zyvnox-text-white zyvnox-border-blue-600'
                  : 'zyvnox-bg-white zyvnox-text-slate-600 zyvnox-border-slate-200 dark:zyvnox-bg-slate-900 dark:zyvnox-border-slate-700'
              "
              class="zyvnox-w-10 zyvnox-h-10 zyvnox-rounded-xl zyvnox-border zyvnox-text-sm zyvnox-font-bold zyvnox-transition-all hover:zyvnox-border-blue-500"
            >
              {{ page }}
            </button>
          </div>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-px-4 zyvnox-py-2 zyvnox-bg-white zyvnox-border zyvnox-border-slate-200 zyvnox-rounded-xl zyvnox-text-sm zyvnox-font-bold disabled:zyvnox-opacity-50 dark:zyvnox-bg-slate-900 dark:zyvnox-border-slate-700"
          >
            <span class="zyvnox-hidden sm:zyvnox-block">{{ t('common.next') }}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <Loader ref="loader" />
    <WarningForm
      v-if="showWarningModel"
      :title="labels.warning.delete"
      :message="`${selectedItem.name ?? selectedItem[propertys?.keys?.nameKey ?? propertys?.keys?.idKey ?? 'id']}`"
      @confirm="
        () => {
          if (idData !== null) DeleteData(idData)
        }
      "
      @close="closeModal"
    />
    <WarningForm
      v-if="showWarningModelSelected"
      :title="labels.warning.deleteMany"
      :message="selectedItemNames"
      @confirm="() => DeleteSeletedData(selectedItems)"
      @close="closeModal"
    />
    <ModalDetailData
      v-if="detailItemModal"
      :title="labels?.title?.display"
      :close-text="labels?.btn?.close"
      :schema="propertys?.base?.schema.display ?? propertys?.base?.schema.global ?? {}"
      :form-data="initialData ?? {}"
      :lang="propertys.base.lang ?? 'en'"
      :value-null-view="true"
      @close="closeModal"
    />
    <AlertApp ref="alert" />
    <FormModal
      v-if="FormModalOpen"
      :id="isUpdate ?? null"
      :is-update="!!isUpdate"
      :schema="
        isUpdate
          ? (propertys.base.schema.update ?? propertys.base.schema.global!)
          : (propertys.base.schema.create ?? propertys.base.schema.global!)
      "
      :initial-data="initialData"
      :lang="propertys.base.lang ?? 'en'"
      @cancel="FormModalOpen = false"
      @create:Options="(k: string, o: string | number, v: string) => newOptionsSelect(k, o, v)"
      :demo="propertys.demo"
      :seo="propertys.base.schema.SeoDisplay ?? undefined"
      @-data-child-remove="(itemsRemove: any[]) => (dataChildDelete = itemsRemove)"
      @submit="submitFormData"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, provide, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import FormModal from '../Form/FormModal.vue'
import WarningForm from '../../components/UI/Feedback/WarningForm.vue'
import ModalDetailData from '../../components/UI/Display/ModalDetailData.vue'
import Tooltip from '../../components/UI/Display/Tooltip.vue'
import {
  getImageSource,
  isImage,
  isFile,
  getFileName,
  isImageArray,
  isFileArray,
  isColorArray,
  isColor,
  isHtml,
  useTableLogic,
  useFormHandling,
  displayItem,
} from './composables'

import type {
  GlobalDefaultText,
  FormData,
  TabelDataProperty,
  TabelDataConfig,
  Item,
  CustomAction,
  dataProperty,
} from '../../configs/types'

import {
  defaultKeys,
  defaultFeatureToggles,
  defaultPagination,
  defaultValidation,
  defaultEndpoints,
  defaultSubmitAuth,
} from '../../configs/defaults'
import { defaultTextLabelsMap } from '../../configs/i18n'
import { Loader, AlertApp } from '../../components/UI/Feedback'

const showSeoModal = ref(false)

const isDateTimeString = (value: any): value is string =>
  typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)

const isDateOnlyString = (value: any): value is string =>
  typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)

const isTimeOnlyString = (value: any): value is string =>
  typeof value === 'string' && /^\d{2}:\d{2}$/.test(value)

function formatDateTime(value: string, lang: string = 'en') {
  try {
    const date = new Date(value)
    const locale = lang === 'id' ? 'id-ID' : lang
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date)
  } catch (e) {
    return value
  }
}

function formatDate(value: string, lang: string = 'en') {
  try {
    const date = new Date(`${value}T00:00:00`)
    const locale = lang === 'id' ? 'id-ID' : lang
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
    }).format(date)
  } catch (e) {
    return value
  }
}

function formatTime(value: string, lang: string = 'en') {
  try {
    const [hours, minutes] = value.split(':')
    const date = new Date()
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0)
    const locale = lang === 'id' ? 'id-ID' : lang

    return new Intl.DateTimeFormat(locale, {
      timeStyle: 'short',
    }).format(date)
  } catch (e) {
    return value
  }
}

function getColumnType(header: string): dataProperty['type'] | null {
  const dataDisplay = propertys.value.base.dataTabelDisplay?.[header]
  if (typeof dataDisplay === 'object' && dataDisplay.type) {
    return dataDisplay.type
  }
  return null
}

function getColumnTooltip(
  header: string,
): { tooltip: string; position?: 'top' | 'bottom' | 'left' | 'right'; icon?: string } | null {
  const dataDisplay = propertys.value.base.dataTabelDisplay?.[header]
  if (typeof dataDisplay === 'object' && dataDisplay?.tooltip) {
    return {
      tooltip: dataDisplay.tooltip,
      position: dataDisplay.tooltipPosition,
      icon: dataDisplay.tooltipIcon,
    }
  }
  const valueKey =
    typeof dataDisplay === 'object'
      ? dataDisplay.valueKey
      : typeof dataDisplay === 'string'
        ? dataDisplay
        : header
  const field =
    propertys.value.base.schema?.global?.[header] ||
    propertys.value.base.schema?.display?.[header] ||
    (valueKey
      ? propertys.value.base.schema?.global?.[valueKey] ||
        propertys.value.base.schema?.display?.[valueKey]
      : undefined)
  if (field?.tooltip) {
    return {
      tooltip: field.tooltip,
      position: field.tooltipPosition,
      icon: field.tooltipIcon,
    }
  }
  return null
}

const formatCurrency = (value: any) => {
  if (typeof value !== 'number') return value
  const lang = propertys.value.base.lang === 'id' ? 'id-ID' : 'en-US'
  const currency = propertys.value.base.lang === 'id' ? 'IDR' : 'USD'
  return new Intl.NumberFormat(lang, { style: 'currency', currency: currency }).format(value)
}

const props = withDefaults(defineProps<TabelDataProperty<Item>>(), {
  keys: () => defaultKeys,
  feature: () => defaultFeatureToggles,
  pagination: () => defaultPagination,
  validation: () => defaultValidation,
  endpoints: () => defaultEndpoints,
  submitAuth: () => defaultSubmitAuth,
  demo: () => false,
  customActions: () => [],
})

// Gabungkan ke propertys
const propertys = ref<TabelDataConfig<Item>>({
  ...props,
})

import { get } from 'lodash-es'

function newOptionsSelect(k: string, o: number | string, v: string) {
  const schemaTypes = ['update', 'create', 'display', 'global'] as const

  // Membersihkan titik sebelum kurung siku (berjaga-jaga jika format string-nya salah)
  // Mengubah "options.['Pilihan'].id" menjadi "options['Pilihan'].id"
  const cleanPath = k.replace(/\.\[/g, '[')

  schemaTypes.forEach((schemaType) => {
    // 1. Ambil target field menggunakan lodash get
    // Ini akan otomatis menelusuri ke dalam objek walaupun k isinya string path bersarang
    const targetField = get(propertys.value.base.schema[schemaType], cleanPath)

    // 2. Eksekusi logika seperti biasa
    if (targetField?.type === 'select') {
      if (Array.isArray(targetField.options)) {
        targetField.options.push(o)
        targetField.optionsView?.push(v)
      } else {
        console.warn(
          `Properti options pada schema "${schemaType}" path "${cleanPath}" bukan array.`,
        )
      }
    }
  })
}

const emit = defineEmits<{
  (e: 'refreshData'): void
  (e: 'edit', value: FormData, id: number | string): void
  (e: 'create'): void
  (e: 'show', value: FormData, id: number | string): void
  (e: 'delete', value: number): void
  (e: 'deleteMany', value: number[]): void
  (e: 'customAction', payload: { key: string; item: Item }): void
}>()

const loader = ref<InstanceType<typeof Loader> | null>(null)

// Average SEO Score calculation
const averageSeoScore = computed(() => {
  const seoKey = propertys.value.base.seoDisplay
  const dataToAverage = filteredData.value

  if (!seoKey || !propertys.value.data || dataToAverage.length === 0) {
    return null
  }

  const idKey = propertys.value.keys?.idKey ?? 'id'

  const scores = dataToAverage
    .map((displayItem: Item) => {
      const originalItem = propertys.value.data.find(
        (rawItem: Item) => rawItem[idKey] === displayItem[idKey],
      )
      if (!originalItem) return null

      const score = originalItem[seoKey]
      return typeof score === 'number' ? score : null
    })
    .filter((score): score is number => score !== null)

  if (scores.length === 0) {
    return null
  }

  const totalScore = scores.reduce((sum, score) => sum + score, 0)
  return Math.round(totalScore / scores.length)
})

const seoColorClass = computed(() => {
  if (averageSeoScore.value === null) return ''
  if (averageSeoScore.value >= 80) return 'zyvnox-stroke-emerald-500'
  if (averageSeoScore.value >= 50) return 'zyvnox-stroke-amber-500'
  return 'zyvnox-stroke-red-500'
})

const alert = ref()
const { t, labels } = useI18n(
  computed(() => propertys.value?.base?.lang ?? props.base?.lang ?? 'en'),
)

const {
  searchQuery,
  currentPage,
  selectedItems,
  selectAll,
  showWarningModel,
  showWarningModelSelected,
  idData,
  FormModalOpen,
  detailItemModal,
  isUpdate,
  dataChildDelete,
  selectedItem,
  filteredData,
  paginatedData,
  totalPages,
  visiblePages,
  selectedItemNames,
  toggleAll,
  sortBy,
  prevPage,
  nextPage,
  setUpData,
  GetDataById,
} = useTableLogic(propertys.value!, emit, loader, labels.value)

// Computed List Detail SEO untuk Modal
// Computed List Detail SEO untuk Modal
const seoDataList = computed(() => {
  const seoKey = propertys.value.base.seoDisplay
  if (!seoKey || !propertys.value.data) return []

  const idKey = propertys.value.keys?.idKey ?? 'id'
  const nameKey = propertys.value.keys?.nameKey ?? 'name'

  return filteredData.value.map((displayItem: Item) => {
    const originalItem = propertys.value.data.find(
      (rawItem: Item) => rawItem[idKey] === displayItem[idKey],
    )

    // Deteksi otomatis: Ambil semua key dari object, cari key pertama yang bukan idKey
    const itemKeys = Object.keys(displayItem)
    const firstNonIdKey = itemKeys.find((k) => k !== idKey)

    return {
      id: displayItem[idKey],
      name:
        displayItem[nameKey] ??
        displayItem.title ??
        displayItem.name ??
        (firstNonIdKey ? displayItem[firstNonIdKey] : `Item #${displayItem[idKey]}`),
      score: originalItem
        ? typeof originalItem[seoKey] === 'number'
          ? originalItem[seoKey]
          : 0
        : 0,
    }
  })
})
const {
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
} = useFormHandling(
  propertys.value!,
  emit,
  setUpData,
  loader,
  ShowAlert,
  labels.value,
  GetDataById,
  {
    selectedItems,
    idData,
    isUpdate,
    FormModalOpen,
    detailItemModal,
    dataChildDelete,
    showWarningModel,
    showWarningModelSelected,
  },
)

const openActionMenuId = ref<string | number | null>(null)

function handleCustomAction(key: string, item: Item) {
  emit('customAction', { key, item })
}

// Watchers
watch(selectedItems, (newVal) => {
  selectAll.value = newVal.length === paginatedData.value.length && paginatedData.value.length > 0
})

// Fix Dropdown Logic click outside
watch(openActionMenuId, (newVal) => {
  if (newVal !== null) {
    setTimeout(() => window.addEventListener('click', closeActionMenu), 0)
  } else {
    window.removeEventListener('click', closeActionMenu)
  }
})

watch(searchQuery, () => {
  currentPage.value = 1
})

watch(
  () => props.base.dataTabelCustomDisplay || props.base.schema,
  async () => {
    Object.assign(propertys.value, {
      ...props,
    })
    selectedItems.value = []
    await setUpData()
  },
)

onMounted(async () => {
  Object.assign(propertys.value, {
    ...props,
  })

  await setUpData()
})

provide('TableComponents', { ShowAlert, loader, labels, t })
provide('tableComponents', { ShowAlert, loader, labels, t })

function ShowAlert(status: 'error' | 'success', title: string, message: string[]) {
  const AlertData = {
    type: status,
    title,
    messages: message,
  }
  alert.value?.addAlert(AlertData)
}

function toggleActionMenu(id: string | number) {
  if (openActionMenuId.value === id) {
    openActionMenuId.value = null
  } else {
    openActionMenuId.value = id
  }
}

function closeActionMenu() {
  openActionMenuId.value = null
}

function getActions(item: Item) {
  const allActions = []
  const id = item?.[propertys.value?.keys?.idKey ?? 'id']

  // Custom Actions
  if (propertys.value.customActions) {
    for (const action of propertys.value.customActions) {
      allActions.push({
        key: `custom-${action.key}`,
        label: action.label,
        icon: action.icon,
        class:
          action.class ||
          'zyvnox-bg-gray-500/10 zyvnox-text-gray-500 hover:zyvnox-bg-gray-500 hover:zyvnox-text-white dark:zyvnox-text-gray-400 dark:hover:zyvnox-bg-gray-600',
        handler: () => {
          handleCustomAction(action.key, item)
          closeActionMenu()
        },
      })
    }
  }

  // Built-in: Update
  if (propertys.value?.feature?.updateActive) {
    allActions.push({
      key: 'update',
      label: labels.value?.btn?.update,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      class:
        'zyvnox-bg-blue-500/10 zyvnox-text-blue-500 hover:zyvnox-bg-blue-500 hover:zyvnox-text-white dark:zyvnox-text-blue-400 dark:hover:zyvnox-bg-blue-600',
      handler: () => {
        openEditModal(id)
        closeActionMenu()
      },
    })
  }

  // Built-in: Delete
  if (propertys.value?.feature?.deleteActive) {
    allActions.push({
      key: 'delete',
      label: labels.value?.btn?.remove,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      class:
        'zyvnox-bg-red-500/10 zyvnox-text-red-500 hover:zyvnox-bg-red-500 hover:zyvnox-text-white dark:zyvnox-text-red-400 dark:hover:zyvnox-bg-red-600',
      handler: () => {
        openWarningDeleteData(id)
        closeActionMenu()
      },
    })
  }

  // Built-in: Display
  if (propertys.value?.feature?.displayActive) {
    allActions.push({
      key: 'display',
      label: labels.value?.btn?.display,
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2"/></svg>',
      class:
        'zyvnox-bg-slate-500/10 zyvnox-text-slate-500 hover:zyvnox-bg-slate-500 hover:zyvnox-text-white dark:zyvnox-text-slate-400 dark:hover:zyvnox-bg-slate-400',
      handler: () => {
        openShowModal(id)
        closeActionMenu()
      },
    })
  }

  return allActions
}

defineExpose({
  refreshData: setUpData,
})
</script>
