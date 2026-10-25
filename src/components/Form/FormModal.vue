<template>
  <transition name="zyvnox-modal-overlay" appear>
    <div
      class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-20 zyvnox-flex zyvnox-items-center zyvnox-justify-center 2xl:zyvnox-p-4 zyvnox-bg-black/70 zyvnox-backdrop-blur-md"
    >
      <transition name="zyvnox-modal-container" appear>
        <div
          class="zyvnox-w-full zyvnox-h-full zyvnox-flex zyvnox-flex-col zyvnox-max-h-screen zyvnox-bg-gradient-to-br zyvnox-from-white zyvnox-to-slate-50 zyvnox-shadow-2xl zyvnox-overflow-hidden zyvnox-relative before:zyvnox-content-[''] before:zyvnox-absolute before:zyvnox-top-0 before:zyvnox-left-0 before:zyvnox-right-0 before:zyvnox-h-px before:zyvnox-bg-gradient-to-r before:zyvnox-from-transparent before:zyvnox-via-white/80 before:zyvnox-to-transparent before:zyvnox-z-10 md:zyvnox-h-auto md:zyvnox-w-[90%] md:zyvnox-max-w-[700px] md:zyvnox-max-h-[90vh] md:zyvnox-rounded-2xl lg:zyvnox-w-[80%] dark:zyvnox-from-slate-800 dark:zyvnox-to-slate-900 dark:zyvnox-text-slate-100"
          :class="[
            isMobile ? 'zyvnox-rounded-xl' : '',
            'xl:zyvnox-max-w-[900px] lg:zyvnox-max-w-[800px]',
          ]"
        >
          <div
            class="zyvnox-p-6 zyvnox-bg-gradient-to-br zyvnox-from-indigo-600 zyvnox-to-violet-600 zyvnox-text-white zyvnox-relative zyvnox-shadow-md md:zyvnox-px-8 md:zyvnox-py-6 zyvnox-flex-shrink-0"
          >
            <div class="zyvnox-flex zyvnox-justify-between zyvnox-items-center">
              <div
                class="zyvnox-flex zyvnox-items-center zyvnox-gap-3 zyvnox-text-center md:zyvnox-text-left md:zyvnox-flex-row zyvnox-flex-col md:zyvnox-gap-3"
              >
                <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-3 zyvnox-flex-wrap">
                  <div
                    class="zyvnox-bg-white/20 zyvnox-rounded-xl zyvnox-w-10 zyvnox-h-10 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-backdrop-blur-md zyvnox-animate-[slideInFromBottom_0.5s_ease-out]"
                    v-if="isUpdate"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    class="zyvnox-bg-white/20 zyvnox-rounded-xl zyvnox-w-10 zyvnox-h-10 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-backdrop-blur-md zyvnox-animate-[slideInFromBottom_0.5s_ease-out]"
                    v-else
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <h2
                    class="zyvnox-text-xl md:zyvnox-text-2xl zyvnox-font-bold zyvnox-m-0 zyvnox-animate-[slideInFromBottom_0.5s_ease-out_0.1s_both]"
                  >
                    {{
                      isUpdate
                        ? typeof labels?.title === 'object'
                          ? labels?.title?.update
                          : labels?.title
                        : typeof labels?.title === 'object'
                          ? labels?.title?.create
                          : labels?.title
                    }}
                  </h2>

                  <div
                    v-if="seoResult"
                    @click="showSeoDetails = true"
                    class="zyvnox-group zyvnox-cursor-pointer zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-bg-white/20 zyvnox-backdrop-blur-sm zyvnox-rounded-full zyvnox-px-3 zyvnox-py-1 zyvnox-transition-all hover:zyvnox-bg-white/30 hover:zyvnox-scale-105 active:zyvnox-scale-95 zyvnox-animate-[slideInFromBottom_0.5s_ease-out_0.2s_both]"
                    :title="t('table.viewSeoReport')"
                  >
                    <span
                      class="zyvnox-text-xs zyvnox-font-semibold zyvnox-uppercase zyvnox-tracking-wide zyvnox-opacity-80"
                      >{{ t('table.seoScore') }}</span
                    >
                    <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-1">
                      <div
                        class="zyvnox-w-2 zyvnox-h-2 zyvnox-rounded-full"
                        :class="{
                          'zyvnox-bg-red-400': (seoResult?.score || 0) < 50,
                          'zyvnox-bg-yellow-400':
                            (seoResult?.score || 0) >= 50 && (seoResult?.score || 0) < 80,
                          'zyvnox-bg-emerald-400': (seoResult?.score || 0) >= 80,
                        }"
                      ></div>
                      <span class="zyvnox-font-bold zyvnox-text-white">{{
                        seoResult?.score || 0
                      }}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="zyvnox-ml-1 zyvnox-opacity-70 group-hover:zyvnox-opacity-100"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                  </div>

                  <button
                    v-if="seoResult && seo?.apiAI"
                    @click="autoGenerateSEO"
                    :disabled="isGeneratingSeo"
                    class="zyvnox-group zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-bg-purple-100/20 hover:zyvnox-bg-purple-100/30 zyvnox-backdrop-blur-sm zyvnox-rounded-full zyvnox-px-3 zyvnox-py-1.5 zyvnox-transition-all hover:zyvnox-scale-105 active:zyvnox-scale-95 zyvnox-animate-[slideInFromBottom_0.5s_ease-out_0.3s_both] zyvnox-border zyvnox-border-purple-300/30 disabled:zyvnox-opacity-50 disabled:zyvnox-cursor-not-allowed"
                    :title="t('editor.aiGenerate')"
                  >
                    <div
                      v-if="isGeneratingSeo"
                      class="zyvnox-w-4 zyvnox-h-4 zyvnox-text-purple-200 zyvnox-animate-spin"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
                        />
                      </svg>
                    </div>
                    <div v-else class="zyvnox-w-4 zyvnox-h-4 zyvnox-text-purple-200">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <span
                      class="zyvnox-text-xs zyvnox-font-semibold zyvnox-text-white zyvnox-tracking-wide"
                      >{{ isGeneratingSeo ? t('editor.generating') : 'Auto SEO' }}</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="zyvnox-flex-1 zyvnox-relative zyvnox-flex zyvnox-flex-col zyvnox-overflow-y-auto zyvnox-modal-scrollbar"
          >
            <div
              class="2xl:zyvnox-p-8 zyvnox-bg-white zyvnox-relative dark:zyvnox-bg-slate-800 zyvnox-flex-1"
            >
              <div
                class="zyvnox-flex zyvnox-p-6 2xl:zyvnox-p-8 zyvnox-border-1 zyvnox-border-solid zyvnox-border-slate-200 zyvnox-shadow-lg md:zyvnox-rounded-xl zyvnox-flex-col zyvnox-gap-6 dark:zyvnox-border-blue-600 dark:zyvnox-shadow-blue-900/50"
              >
                <transition-group
                  name="zyvnox-form-field"
                  tag="div"
                  class="zyvnox-flex zyvnox-flex-col zyvnox-gap-6"
                >
                  <FormFieldRenderer
                    v-for="(field, key) in schema"
                    :key="key"
                    :field="field"
                    :field-key="key"
                    :form-data="formData"
                    :is-update="isUpdate"
                    :errors="errors"
                    :lang="(lang as SupportedLanguage) ?? 'en'"
                    @update:model-value="
                      (val, key) => {
                        if (getNested(formData, key) !== val) {
                          setNested(formData, key, val)
                        }
                      }
                    "
                    @push:errors="pushInputValidateErrorMessage"
                    @remove:errors="deleteInputValidateErrorMessage"
                    @multi-selected-change="
                      (val, key) => {
                        setNested(multiSelected, key, val)
                      }
                    "
                    @selected-option-change="
                      (val, key) => {
                        setNested(seletedOption, key, val)
                      }
                    "
                    :demo="demo"
                    @create:Options="
                      (k: string, o: string | number, v: string) => $emit('create:Options', k, o, v)
                    "
                  />
                </transition-group>
              </div>
            </div>
          </div>

          <div
            class="zyvnox-p-5 md:zyvnox-p-6 zyvnox-bg-slate-50 zyvnox-border-t zyvnox-border-slate-200 zyvnox-relative dark:zyvnox-bg-slate-900 dark:zyvnox-border-slate-700 zyvnox-flex-shrink-0"
          >
            <div
              class="zyvnox-flex zyvnox-justify-center md:zyvnox-justify-end zyvnox-gap-4 zyvnox-flex-row"
            >
              <button
                type="button"
                @click="handleCancel"
                class="zyvnox-px-7 zyvnox-py-3.5 zyvnox-rounded-xl zyvnox-border-none zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-relative zyvnox-overflow-hidden zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-min-w-[100px] zyvnox-justify-center disabled:zyvnox-opacity-70 disabled:zyvnox-cursor-not-allowed before:zyvnox-content-[''] before:zyvnox-absolute before:zyvnox-top-0 before:zyvnox-left-[-100%] before:zyvnox-w-full before:zyvnox-h-full before:zyvnox-bg-gradient-to-r before:zyvnox-from-transparent before:zyvnox-via-white/30 before:zyvnox-to-transparent before:zyvnox-transition-[left] before:zyvnox-duration-600 hover:before:zyvnox-left-full zyvnox-text-white zyvnox-bg-gradient-to-br zyvnox-from-red-500 zyvnox-to-red-600 zyvnox-shadow-md hover:zyvnox-from-red-600 hover:zyvnox-to-red-700 hover:-zyvnox-translate-y-0.5 active:zyvnox-translate-y-0"
              >
                <span
                  class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-transition-opacity zyvnox-duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ labels?.btn?.cancel ?? t('common.cancel') }}
                </span>
              </button>
              <button
                type="submit"
                @click="handleSubmit"
                class="zyvnox-px-7 zyvnox-py-3.5 zyvnox-rounded-xl zyvnox-border-none zyvnox-font-semibold zyvnox-text-sm zyvnox-cursor-pointer zyvnox-transition-all zyvnox-relative zyvnox-overflow-hidden zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-min-w-[100px] zyvnox-justify-center disabled:zyvnox-opacity-70 disabled:zyvnox-cursor-not-allowed before:zyvnox-content-[''] before:zyvnox-absolute before:zyvnox-top-0 before:zyvnox-left-[-100%] before:zyvnox-w-full before:zyvnox-h-full before:zyvnox-bg-gradient-to-r before:zyvnox-from-transparent before:zyvnox-via-white/30 before:zyvnox-to-transparent before:zyvnox-transition-[left] before:zyvnox-duration-600 hover:before:zyvnox-left-full zyvnox-text-white zyvnox-bg-gradient-to-br zyvnox-from-emerald-500 zyvnox-to-emerald-600 zyvnox-shadow-md hover:zyvnox-from-emerald-600 hover:zyvnox-to-emerald-700 hover:-zyvnox-translate-y-0.5 active:zyvnox-translate-y-0"
                :disabled="isSubmitting"
              >
                <span
                  class="zyvnox-flex zyvnox-items-center zyvnox-gap-2 zyvnox-transition-opacity zyvnox-duration-300"
                  :class="{ 'zyvnox-opacity-70': isSubmitting }"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{
                    isUpdate
                      ? typeof labels?.btn?.submit === 'object'
                        ? labels?.btn?.submit?.update
                        : labels?.btn?.submit
                      : typeof labels?.btn?.submit === 'object'
                        ? labels?.btn?.submit?.create
                        : labels?.btn?.submit
                  }}
                </span>
                <span
                  class="zyvnox-flex zyvnox-items-center zyvnox-animate-[rotate_1s_linear_infinite]"
                  v-if="isSubmitting"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <transition name="zyvnox-seo-popup">
            <div
              v-if="showSeoDetails && seoResult"
              class="zyvnox-absolute zyvnox-inset-0 zyvnox-z-50 zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-bg-black/40 zyvnox-backdrop-blur-[2px] zyvnox-p-4"
              @click.self="showSeoDetails = false"
            >
              <div
                class="zyvnox-bg-white zyvnox-w-full zyvnox-max-w-[380px] zyvnox-max-h-[70vh] zyvnox-flex zyvnox-flex-col zyvnox-rounded-2xl zyvnox-shadow-2xl zyvnox-border zyvnox-border-slate-100 dark:zyvnox-bg-slate-800 dark:zyvnox-border-slate-600 zyvnox-animate-[popupScale_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"
              >
                <div
                  class="zyvnox-p-4 zyvnox-border-b zyvnox-border-slate-100 dark:zyvnox-border-slate-700 zyvnox-flex zyvnox-justify-between zyvnox-items-center zyvnox-flex-shrink-0"
                >
                  <h3
                    class="zyvnox-text-base zyvnox-font-bold zyvnox-text-slate-700 dark:zyvnox-text-white zyvnox-m-0"
                  >
                    {{ t('table.viewSeoReport') }}
                  </h3>
                  <button
                    @click="showSeoDetails = false"
                    class="zyvnox-text-slate-400 hover:zyvnox-text-slate-600 dark:hover:zyvnox-text-slate-200"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                <div class="zyvnox-p-4 zyvnox-overflow-y-auto zyvnox-modal-scrollbar zyvnox-flex-1">
                  <div class="zyvnox-flex zyvnox-flex-col zyvnox-gap-3">
                    <div
                      v-for="(item, idx) in seoResult?.details"
                      :key="idx"
                      class="zyvnox-flex zyvnox-gap-3 zyvnox-p-3 zyvnox-rounded-lg zyvnox-border zyvnox-transition-colors"
                      :class="
                        item.passed
                          ? 'zyvnox-bg-emerald-50/50 zyvnox-border-emerald-100 dark:zyvnox-bg-emerald-900/10 dark:zyvnox-border-emerald-800'
                          : 'zyvnox-bg-red-50/50 zyvnox-border-red-100 dark:zyvnox-bg-red-900/10 dark:zyvnox-border-red-800'
                      "
                    >
                      <div class="zyvnox-flex-shrink-0 zyvnox-mt-0.5">
                        <svg
                          v-if="item.passed"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="zyvnox-text-emerald-500"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          v-else
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          class="zyvnox-text-red-500"
                        >
                          <path
                            d="M18 6L6 18M6 6l12 12"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div class="zyvnox-flex-1">
                        <p
                          class="zyvnox-text-xs zyvnox-font-bold zyvnox-uppercase zyvnox-mb-0.5"
                          :class="
                            item.passed
                              ? 'zyvnox-text-emerald-700 dark:zyvnox-text-emerald-400'
                              : 'zyvnox-text-red-700 dark:zyvnox-text-red-400'
                          "
                        >
                          {{ item.label }}
                        </p>
                        <p
                          class="zyvnox-text-xs zyvnox-text-slate-600 dark:zyvnox-text-slate-300 zyvnox-leading-relaxed"
                        >
                          {{ item.message }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="zyvnox-p-4 zyvnox-border-t zyvnox-border-slate-100 dark:zyvnox-border-slate-700 zyvnox-flex-shrink-0"
                >
                  <div
                    class="zyvnox-bg-slate-50 zyvnox-rounded-xl zyvnox-p-3 zyvnox-border zyvnox-border-slate-100 dark:zyvnox-bg-slate-900/50 dark:zyvnox-border-slate-700"
                  >
                    <div class="zyvnox-flex zyvnox-justify-between zyvnox-mb-2">
                      <span
                        class="zyvnox-text-xs zyvnox-font-bold zyvnox-uppercase zyvnox-text-slate-500"
                        >{{ t('table.totalScore') }}</span
                      >
                      <span
                        class="zyvnox-text-sm zyvnox-font-bold"
                        :class="{
                          'zyvnox-text-red-500': (seoResult?.score || 0) < 50,
                          'zyvnox-text-yellow-500':
                            (seoResult?.score || 0) >= 50 && (seoResult?.score || 0) < 80,
                          'zyvnox-text-emerald-500': (seoResult?.score || 0) >= 80,
                        }"
                        >{{ seoResult?.score || 0 }}%</span
                      >
                    </div>
                    <div
                      class="zyvnox-w-full zyvnox-h-2 zyvnox-bg-slate-200 zyvnox-rounded-full zyvnox-overflow-hidden dark:zyvnox-bg-slate-700"
                    >
                      <div
                        class="zyvnox-h-full zyvnox-transition-all zyvnox-duration-500"
                        :style="{ width: `${seoResult?.score || 0}%` }"
                        :class="{
                          'zyvnox-bg-red-500': (seoResult?.score || 0) < 50,
                          'zyvnox-bg-yellow-500':
                            (seoResult?.score || 0) >= 50 && (seoResult?.score || 0) < 80,
                          'zyvnox-bg-emerald-500': (seoResult?.score || 0) >= 80,
                        }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>

      <!-- Fallback Alert and Loader when FormModal is used without TabelData provide -->
      <AlertApp v-if="!hasInjectedShowAlert" ref="localAlert" />
      <LoaderSuccessError v-if="!hasInjectedLoader" ref="localLoader" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { inject, ref, computed, provide, onMounted, onUnmounted } from 'vue'
import { type FromModalProps, type SupportedLanguage } from '../../configs/types'
import { FormFieldRenderer } from './index'
import { useFormModal } from './composables'
import { getNested, setNested } from '../../untils'
import { useI18n } from '../composables/useI18n'
import AlertApp from '../UI/Feedback/AlertApp.vue'
import LoaderSuccessError from '../UI/Feedback/LoaderSuccessError.vue'

const tableComponents = inject<any>('TableComponents', null) ?? inject<any>('tableComponents', null)
const injectedLoader = tableComponents?.loader
const injectedShowAlert = tableComponents?.ShowAlert

const hasInjectedLoader = !!injectedLoader
const hasInjectedShowAlert = typeof injectedShowAlert === 'function'

const localLoader = ref<InstanceType<typeof LoaderSuccessError> | null>(null)
const localAlert = ref<InstanceType<typeof AlertApp> | null>(null)

function localShowAlert(status: 'error' | 'success' | 'warning' | 'info', title: string, message: string[]) {
  localAlert.value?.addAlert({
    type: status,
    title,
    messages: message,
  })
}

const loader = hasInjectedLoader ? injectedLoader : localLoader
const ShowAlert = hasInjectedShowAlert ? injectedShowAlert : localShowAlert

const props = withDefaults(defineProps<FromModalProps>(), {
  demo: false,
})

const { t, labels } = useI18n(computed(() => props.lang))

if (!hasInjectedShowAlert || !hasInjectedLoader) {
  provide('TableComponents', {
    ShowAlert,
    loader,
    labels,
    t,
    ...(tableComponents || {}),
  })
  provide('tableComponents', {
    ShowAlert,
    loader,
    labels,
    t,
    ...(tableComponents || {}),
  })
}
const emit = defineEmits<{
  (e: 'submit', value: Record<string, any>): void
  (e: 'cancel'): void
  (e: 'DataChildRemove', value: number[]): void
  (e: 'create:Options', key: string, options: string | number, optionView: string): void
}>()

const showSeoDetails = ref(false)

const isMobile = ref(false)
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const {
  formData,
  errors,
  seletedOption,
  multiSelected,
  handleSubmit,
  handleCancel,
  pushInputValidateErrorMessage,
  deleteInputValidateErrorMessage,
  isSubmitting,
  seoResult,
  isGeneratingSeo,
  autoGenerateSEO,
} = useFormModal(
  {
    id: props.id,
    initialData: props.initialData,
    schema: props.schema,
    isUpdate: props.isUpdate,
    lang: props.lang,
    demo: props.demo,
    seo: props.seo,
  },
  emit,
  loader,
  ShowAlert,
  labels.value,
)
</script>
