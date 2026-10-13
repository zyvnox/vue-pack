<template>
  <div class="zyvnox-w-full zyvnox-relative zyvnox-mb-4">
    <label
      :for="id"
      v-if="!isEffectivelyViewOnly"
      class="zyvnox-inline-flex zyvnox-items-center zyvnox-gap-2 zyvnox-text-sm zyvnox-font-medium zyvnox-mb-2 zyvnox-text-slate-900 zyvnox-transition-colors zyvnox-duration-200 dark:zyvnox-text-slate-100"
      :class="{
        'zyvnox-text-red-500 dark:zyvnox-text-red-400': errorMessage.length !== 0 || error,
      }"
    >
      {{ label }}

      <Tooltip v-if="tooltip" :text="tooltip" :position="tooltipPosition ?? 'top'">
        <span class="zyvnox-text-slate-400 dark:zyvnox-text-slate-500 zyvnox-text-xs">
          {{ tooltipIcon ?? '❓' }}
        </span>
      </Tooltip>

      <!-- Tombol Pemicu Modal Tata Cara -->
      <button
        type="button"
        @click.prevent="showInfoModal = true"
        class="zyvnox-inline-flex zyvnox-items-center zyvnox-justify-center zyvnox-w-5 zyvnox-h-5 zyvnox-rounded-full zyvnox-bg-blue-100 zyvnox-text-blue-600 hover:zyvnox-bg-blue-200 dark:zyvnox-bg-blue-900/50 dark:zyvnox-text-blue-400 dark:hover:zyvnox-bg-blue-800/60 zyvnox-transition-colors"
        :title="t('map.viewGuide')"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </button>
    </label>

    <div
      class="zyvnox-w-full zyvnox-border zyvnox-rounded-lg zyvnox-overflow-hidden zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-transition-all zyvnox-duration-200"
      :class="[
        errorMessage.length !== 0 || error
          ? 'zyvnox-border-red-400 zyvnox-ring-4 zyvnox-ring-red-500/10'
          : 'zyvnox-border-slate-300 dark:zyvnox-border-slate-600',
      ]"
    >
      <Loader ref="loader" />
      <AlertApp ref="alert" v-if="!tableComponents.ShowAlert" />

      <div
        v-if="!isEffectivelyViewOnly"
        class="zyvnox-p-3 zyvnox-border-b zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-bg-slate-50 dark:zyvnox-bg-slate-900/50"
      >
        <div
          class="zyvnox-flex zyvnox-flex-col lg:zyvnox-flex-row lg:zyvnox-items-center zyvnox-justify-between zyvnox-gap-3 zyvnox-mb-3"
        >
          <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-1.5">
            <button
              type="button"
              @click="toggleDarkMode"
              class="zyvnox-p-2 zyvnox-rounded-md zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-border zyvnox-border-slate-300 dark:zyvnox-border-slate-600 zyvnox-text-xs zyvnox-shadow-sm hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-700 zyvnox-transition-colors"
            >
              {{ darkMode ? '🌙' : '☀️' }}
            </button>
            <button
              type="button"
              @click="resetToDefault"
              :disabled="locked || isEffectivelyDisabled"
              class="zyvnox-p-2 zyvnox-rounded-md zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-border zyvnox-border-slate-300 dark:zyvnox-border-slate-600 zyvnox-text-xs zyvnox-shadow-sm hover:zyvnox-bg-slate-50 dark:hover:zyvnox-bg-slate-700 zyvnox-transition-colors"
              :class="
                isEffectivelyDisabled || locked ? 'zyvnox-cursor-not-allowed zyvnox-opacity-50' : ''
              "
            >
              🏠
            </button>
          </div>

          <div
            class="zyvnox-grid zyvnox-grid-cols-2 md:zyvnox-flex md:zyvnox-items-center zyvnox-gap-2 zyvnox-w-full lg:zyvnox-w-auto"
          >
            <div
              class="zyvnox-flex zyvnox-items-center zyvnox-bg-slate-200 dark:zyvnox-bg-slate-700 zyvnox-rounded-md zyvnox-px-2 zyvnox-py-1.5 zyvnox-shadow-inner"
            >
              <span
                class="zyvnox-text-[10px] zyvnox-font-mono dark:zyvnox-text-white zyvnox-font-bold zyvnox-opacity-50 zyvnox-mr-2"
                >LAT:</span
              >
              <input
                v-model="latDisplay"
                @change="handleManualInput"
                :disabled="locked || isEffectivelyDisabled"
                type="text"
                class="zyvnox-bg-transparent zyvnox-w-full md:zyvnox-w-16 zyvnox-text-left zyvnox-font-mono zyvnox-text-[10px] zyvnox-outline-none zyvnox-text-slate-700 dark:zyvnox-text-slate-300"
                :class="isEffectivelyDisabled || locked ? 'zyvnox-cursor-not-allowed' : ''"
              />
            </div>

            <div
              class="zyvnox-flex zyvnox-items-center zyvnox-bg-slate-200 dark:zyvnox-bg-slate-700 zyvnox-rounded-md zyvnox-px-2 zyvnox-py-1.5 zyvnox-shadow-inner"
            >
              <span
                class="zyvnox-text-[10px] zyvnox-font-mono dark:zyvnox-text-white zyvnox-font-bold zyvnox-opacity-50 zyvnox-mr-2"
                >LNG:</span
              >
              <input
                v-model="lngDisplay"
                @change="handleManualInput"
                :disabled="locked || isEffectivelyDisabled"
                type="text"
                class="zyvnox-bg-transparent zyvnox-w-full md:zyvnox-w-16 zyvnox-text-left zyvnox-font-mono zyvnox-text-[10px] zyvnox-outline-none zyvnox-text-slate-700 dark:zyvnox-text-slate-300"
                :class="isEffectivelyDisabled || locked ? 'zyvnox-cursor-not-allowed' : ''"
              />
            </div>

            <button
              type="button"
              @click="toggleLock"
              :disabled="isEffectivelyDisabled"
              :class="[
                locked
                  ? 'zyvnox-bg-red-500 zyvnox-text-white hover:zyvnox-bg-red-600'
                  : 'zyvnox-bg-slate-200 zyvnox-text-slate-700 dark:zyvnox-bg-slate-700 dark:zyvnox-text-slate-300 hover:zyvnox-bg-slate-300 dark:hover:zyvnox-bg-slate-600',
              ]"
              class="zyvnox-col-span-2 md:zyvnox-col-span-1 zyvnox-p-2 zyvnox-rounded-md zyvnox-text-xs zyvnox-font-medium zyvnox-shadow-sm zyvnox-transition-colors"
            >
              {{ locked ? t('map.locked') : t('map.unlock') }}
            </button>
          </div>
        </div>

        <div class="zyvnox-flex zyvnox-gap-2 zyvnox-w-full">
          <input
            v-model="searchText"
            :disabled="locked || isEffectivelyDisabled"
            @keyup.enter="search"
            type="text"
            class="zyvnox-w-full zyvnox-min-w-0 zyvnox-flex-1 dark:zyvnox-text-white zyvnox-px-3 zyvnox-py-2 zyvnox-text-sm zyvnox-rounded-md zyvnox-border zyvnox-border-slate-300 dark:zyvnox-border-slate-600 dark:zyvnox-bg-slate-900 focus:zyvnox-outline-none focus:zyvnox-ring-2 focus:zyvnox-ring-blue-500/20"
            :placeholder="labels?.search ? `${labels.search}...` : `${t('common.search')}...`"
            :class="
              isEffectivelyDisabled || locked ? 'zyvnox-cursor-not-allowed zyvnox-bg-gray' : ''
            "
          />
          <button
            type="button"
            @click="search"
            :disabled="locked || isEffectivelyDisabled"
            class="zyvnox-shrink-0 zyvnox-px-4 zyvnox-py-2 zyvnox-bg-blue-600 zyvnox-text-white zyvnox-rounded-md zyvnox-text-sm zyvnox-font-medium hover:zyvnox-bg-blue-700 zyvnox-transition-colors"
            :class="
              isEffectivelyDisabled || locked ? 'zyvnox-cursor-not-allowed hover:zyvnox-bg-red' : ''
            "
          >
            {{ labels?.search || t('common.search') }}
          </button>
        </div>
      </div>

      <div
        v-if="routeSummary"
        class="zyvnox-absolute zyvnox-z-[2] zyvnox-top-2 zyvnox-right-2 zyvnox-bg-white/90 dark:zyvnox-bg-slate-800/90 zyvnox-backdrop-blur-sm zyvnox-p-2 zyvnox-rounded-md zyvnox-shadow-sm zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-flex zyvnox-flex-col sm:zyvnox-flex-row zyvnox-gap-1 sm:zyvnox-gap-3 zyvnox-text-[10px] sm:zyvnox-text-[11px] zyvnox-font-medium"
      >
        <div class="zyvnox-flex zyvnox-items-center zyvnox-gap-1">
          <span class="zyvnox-opacity-60">🛣️</span>
          <span class="dark:zyvnox-text-white">{{ formatDistance(routeSummary.distance) }}</span>
        </div>
        <div
          class="zyvnox-flex zyvnox-items-center zyvnox-gap-1 sm:zyvnox-border-l sm:zyvnox-pl-3 zyvnox-border-slate-300 dark:zyvnox-border-slate-600"
        >
          <span class="zyvnox-opacity-60">⏱️</span>
          <span class="dark:zyvnox-text-white">{{ formatDuration(routeSummary.duration) }}</span>
        </div>
      </div>

      <div
        :id="mapId"
        :style="{ height: height }"
        class="zyvnox-w-full zyvnox-z-[1]"
        :class="{ 'zyvnox-map-disabled': isEffectivelyDisabled }"
      ></div>
    </div>

    <p
      v-if="errorMessage.length !== 0 && !isEffectivelyViewOnly"
      v-for="(err, i) in errorMessage"
      :key="i"
      class="zyvnox-text-sm zyvnox-text-red-500 zyvnox-mt-2 zyvnox-animate-[zyvnox-fadeIn_300ms_ease-out] dark:zyvnox-text-red-400"
    >
      {{ err }}
    </p>

    <!-- Modal Tata Cara (Teleport agar tidak kena overflow hidden parent) -->
    <Teleport to="body">
      <div
        v-if="showInfoModal"
        class="zyvnox-fixed zyvnox-inset-0 zyvnox-z-[99999] zyvnox-flex zyvnox-items-center zyvnox-justify-center zyvnox-bg-slate-900/50 zyvnox-backdrop-blur-sm zyvnox-p-4 zyvnox-animate-[zyvnox-fadeIn_200ms_ease-out]"
        @click.self="showInfoModal = false"
      >
        <div
          class="zyvnox-bg-white dark:zyvnox-bg-slate-800 zyvnox-w-full zyvnox-max-w-md zyvnox-rounded-2xl zyvnox-shadow-xl zyvnox-border zyvnox-border-slate-200 dark:zyvnox-border-slate-700 zyvnox-overflow-hidden zyvnox-transform zyvnox-transition-all"
        >
          <div
            class="zyvnox-px-6 zyvnox-py-4 zyvnox-border-b zyvnox-border-slate-100 dark:zyvnox-border-slate-700 zyvnox-flex zyvnox-justify-between zyvnox-items-center zyvnox-bg-slate-50 dark:zyvnox-bg-slate-800/80"
          >
            <h3
              class="zyvnox-text-lg zyvnox-font-bold zyvnox-text-slate-800 dark:zyvnox-text-white"
            >
              {{ t('map.howToUse') }}
            </h3>
            <button
              type="button"
              @click="showInfoModal = false"
              class="zyvnox-text-slate-400 hover:zyvnox-text-slate-600 dark:hover:zyvnox-text-slate-300 zyvnox-transition-colors zyvnox-p-1"
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
          <div
            class="zyvnox-p-6 zyvnox-text-slate-600 dark:zyvnox-text-slate-300 zyvnox-text-sm zyvnox-leading-relaxed"
          >
            <p
              v-if="isEffectivelyViewOnly"
              class="zyvnox-font-semibold zyvnox-text-amber-600 dark:zyvnox-text-amber-400"
            >
              {{ t('map.viewOnlyWarning') }}
            </p>
            <ul v-else class="zyvnox-space-y-3 zyvnox-list-disc zyvnox-pl-4">
              <li>{{ t('map.stepUnlock') }}</li>
              <li>{{ t('map.stepClickPin') }}</li>
              <li>{{ t('map.stepSearch') }}</li>
              <li>{{ t('map.stepManualCoords') }}</li>
              <li>{{ t('map.stepResetHome') }}</li>
            </ul>
          </div>
          <div
            class="zyvnox-px-6 zyvnox-py-4 zyvnox-bg-slate-50 dark:zyvnox-bg-slate-800/80 zyvnox-border-t zyvnox-border-slate-100 dark:zyvnox-border-slate-700 zyvnox-flex zyvnox-justify-end"
          >
            <button
              type="button"
              @click="showInfoModal = false"
              class="zyvnox-px-5 zyvnox-py-2.5 zyvnox-bg-blue-600 zyvnox-text-white zyvnox-text-sm zyvnox-font-medium zyvnox-rounded-lg hover:zyvnox-bg-blue-700 zyvnox-transition-colors zyvnox-shadow-sm"
            >
              {{ t('map.understood') }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed, inject, nextTick } from 'vue'

import 'leaflet/dist/leaflet.css'

// Library Internal Imports
import type { MapPickerProps } from '../../../configs/types'
import { setUID } from '../../../untils'
import { getMessage } from '../../../helpers'
import { Tooltip } from '../Display'
import { Loader } from '../Feedback'
import AlertApp from '../Feedback/AlertApp.vue'
import { useI18n } from '../../composables/useI18n'

let L: any

const props = withDefaults(defineProps<MapPickerProps>(), {
  id: setUID(),
  tooltipPosition: 'top',
  tooltipIcon: '❓',
  latKey: 'lat',
  lngKey: 'lng',
  height: '400px',
  initialLat: '-7.245905',
  initialLng: '112.737821',
  searchCity: 'Surabaya',
  searchCountry: 'Indonesia',
  viewOnly: false,
  lang: 'en',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, string>, key: string): void
  (e: 'update:lat', value: string, key: string): void
  (e: 'update:lng', value: string, key: string): void
  (e: 'push:error', message: string[], key: string): void
  (e: 'remove:error', key: string): void
  (e: 'coordinates-selected', value: Record<string, string>): void
  (e: 'locked-coordinates', value: Record<string, string>): void
  (e: 'unlock-coordinates', value: Record<string, string>): void
}>()

// ========== i18n & Labels ========== //
const { t, labels } = useI18n(computed(() => props.lang))

// ========== Map State ========== //
const mapId = `map-${props.id}`
const map = ref<any | null>(null)
const marker = ref<any | null>(null)
const locked = ref(props.viewOnly)
const darkMode = ref(false)
const loader = ref<any>(null)
const alert = ref<any>(null)
const searchText = ref('')

// State Modal Info
const showInfoModal = ref(false)

// Display format (Internal)
const latDisplay = ref(props.initialLat.toString())
const lngDisplay = ref(props.initialLng.toString())
const updatingInternal = ref(false)
const loadedGeoJsonData = ref<any>(null)

// ========== Helper: Create Payload ========== //
const createPayload = (lat: string | number, lng: string | number) => {
  return {
    [props.latKey]: typeof lat === 'number' ? lat.toFixed(6) : lat,
    [props.lngKey]: typeof lng === 'number' ? lng.toFixed(6) : lng,
  }
}

const tableComponents = inject<any>('TableComponents', {})

const ShowAlert = (status: 'error' | 'success', title: string, message: string[]) => {
  if (tableComponents.ShowAlert) {
    tableComponents.ShowAlert(status, title, message)
  } else {
    const AlertData = {
      type: status,
      title,
      messages: message,
    }
    alert.value?.addAlert(AlertData)
  }
}

// ========== Manual Input Handler ========== //
const handleManualInput = () => {
  if (locked.value || isEffectivelyDisabled.value) {
    let titleAlert: string = 'Akses Dibatasi'
    let messageAlert: string = ''

    if (props.viewOnly) {
      titleAlert = 'Mode Lihat Saja'
      messageAlert = 'Koordinat tidak dapat diubah karena sedang dalam mode lihat saja.'
    } else if (props.disabled) {
      titleAlert = 'Input Nonaktif'
      messageAlert =
        'Input lokasi saat ini sedang dinonaktifkan dan tidak dapat menerima perubahan.'
    } else if (props.geoJson && Object.keys(props.geoJson).length > 0) {
      titleAlert = 'Wilayah Terkunci'
      messageAlert = 'Lokasi telah ditetapkan berdasarkan data wilayah (GeoJSON) yang tersedia.'
    } else {
      titleAlert = 'Peta Terkunci'
      messageAlert =
        'Klik tombol "Unlock" terlebih dahulu untuk mengubah koordinat atau mencari lokasi.'
    }

    ShowAlert('error', titleAlert, [messageAlert])
    return
  }
  const lat = parseFloat(latDisplay.value)
  const lng = parseFloat(lngDisplay.value)

  if (!isNaN(lat) && !isNaN(lng)) {
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      loader.value?.show('error', 'Koordinat tidak valid')
      return
    }

    setNewLocation(lat, lng)
    map.value?.setView([lat, lng], 15)
  }
}

// ========== Override Logic existing ========== //
const toggleLock = () => {
  if (isEffectivelyDisabled.value) return
  locked.value = !locked.value
  if (marker.value && marker.value.dragging) {
    locked.value ? marker.value.dragging.disable() : marker.value.dragging.enable()
  }
  if (locked.value) {
    emit('locked-coordinates', createPayload(latDisplay.value, lngDisplay.value))
  } else {
    emit('unlock-coordinates', createPayload(latDisplay.value, lngDisplay.value))
  }
}

const updateMarker = (lat: number, lng: number) => {
  if (!map.value || !L) return // Pastikan L sudah ter-load
  if (props.geoJson && Object.keys(props.geoJson).length > 0) {
    if (marker.value) {
      marker.value.remove()
      marker.value = null
    }
    return
  }
  const color = darkMode.value ? '#3b82f6' : '#dc2626'
  const icon = L.divIcon({
    className: '',
    html: `<div class="zyvnox-pin-marker" style="--pin-color:${color}"><div class="zyvnox-pin-inner"></div></div>`,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
  })

  if (!marker.value) {
    marker.value = L.marker([lat, lng], {
      draggable: !locked.value && !isEffectivelyDisabled.value,
      icon,
    }).addTo(map.value)

    marker.value.on('dragend', () => {
      const pos = marker.value!.getLatLng()
      setNewLocation(pos.lat, pos.lng)
    })
  } else {
    marker.value.setLatLng([lat, lng])
    marker.value.setIcon(icon)
    locked.value || isEffectivelyDisabled.value
      ? marker.value.dragging?.disable()
      : marker.value.dragging?.enable()
  }
}

// ========== Error & Validation ========== //
const errorMessage = ref<string[]>([])

const checkInside = (lat: number, lng: number, polygon: any[]) => {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0],
      yi = polygon[i][1]
    const xj = polygon[j][0],
      yj = polygon[j][1]

    const intersect = yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

const isPointInGeoJSON = (lat: number, lng: number, geoData: any): boolean => {
  if (!geoData) return true
  if (geoData.type === 'FeatureCollection') {
    return geoData.features.some((feature: any) => isPointInGeoJSON(lat, lng, feature.geometry))
  }
  if (geoData.type === 'Feature') {
    return isPointInGeoJSON(lat, lng, geoData.geometry)
  }
  if (geoData.type === 'GeometryCollection') {
    return geoData.geometries.some((geom: any) => isPointInGeoJSON(lat, lng, geom))
  }
  if (geoData.type === 'MultiPolygon') {
    return geoData.coordinates.some((polygon: any) => checkInside(lat, lng, polygon[0]))
  }
  if (geoData.type === 'Polygon') {
    return checkInside(lat, lng, geoData.coordinates[0])
  }
  return true
}

const validateLocal = (lat: number, lng: number) => {
  if (props.disabled) return
  const err: string[] = []

  if (props.required && (isNaN(lat) || isNaN(lng))) {
    err.push('Koordinat wajib dipilih')
  }

  if (props.validate) {
    const v = props.validate as any

    if (v.geoJson) {
      if (loadedGeoJsonData.value) {
        const isInside = isPointInGeoJSON(lat, lng, loadedGeoJsonData.value)
        if (!isInside) {
          err.push('Lokasi harus berada di dalam wilayah yang ditentukan')
        }
      }
    } else if (v.minLat !== undefined) {
      if (lat < v.minLat) err.push(`Latitude tidak boleh kurang dari ${v.minLat}`)
      if (lat > v.maxLat) err.push(`Latitude tidak boleh lebih dari ${v.maxLat}`)
      if (lng < v.minLng) err.push(`Longitude tidak boleh kurang dari ${v.minLng}`)
      if (lng > v.maxLng) err.push(`Longitude tidak boleh lebih dari ${v.maxLng}`)
    }
  }

  errorMessage.value = err

  if (err.length > 0) {
    emit('push:error', err, props.id)
  } else {
    emit('remove:error', props.id)
  }
}

const isEffectivelyDisabled = computed(() => {
  return props.disabled || (props.geoJson && Object.keys(props.geoJson).length > 0)
})

const isEffectivelyViewOnly = computed(() => {
  return props.viewOnly || (props.geoJson && Object.keys(props.geoJson).length > 0)
})

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal && newVal[props.latKey] && newVal[props.lngKey]) {
      const lat = parseFloat(String(newVal[props.latKey]))
      const lng = parseFloat(String(newVal[props.lngKey]))

      latDisplay.value = lat.toFixed(6)
      lngDisplay.value = lng.toFixed(6)
      validateLocal(lat, lng)
    }
  },
  { deep: true, immediate: true },
)

const setNewLocation = (lat: number, lng: number) => {
  latDisplay.value = lat.toFixed(6)
  lngDisplay.value = lng.toFixed(6)

  updateMarker(lat, lng)
  validateLocal(lat, lng)

  emit('update:modelValue', createPayload(lat, lng), props.id)
  emit('update:lat', lat.toFixed(6), props.id)
  emit('update:lng', lng.toFixed(6), props.id)
}

const routeSummary = ref<{ distance: number; duration: number } | null>(null)

const formatDistance = (m: number) => {
  if (m >= 1000) {
    return (m / 1000).toFixed(2) + ' km'
  }
  return Math.round(m) + ' m'
}

const formatDuration = (s: number) => {
  const mins = Math.floor(s / 60)
  const secs = Math.round(s % 60)
  if (mins > 0) {
    return `${mins} menit ${secs} detik`
  }
  return `${secs} detik`
}

// ========== Leaflet Logic ========== //
const initMap = async () => {
  if (!L) return // Pastikan Leaflet ter-load

  if (map.value !== null) {
    map.value.off()
    map.value.remove()
    map.value = null
  }

  const container = L.DomUtil.get(mapId)
  if (container !== null) {
    ;(container as any)._leaflet_id = null
  }

  const startLat = parseFloat(String(props.modelValue?.[props.latKey] || props.initialLat))
  const startLng = parseFloat(String(props.modelValue?.[props.lngKey] || props.initialLng))

  map.value = L.map(mapId).setView([startLat, startLng], 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(map.value)

  const rawValidateGeoJson = props.validate?.geoJson
  let mapValidateGeoData = null

  if (rawValidateGeoJson) {
    try {
      if (typeof rawValidateGeoJson === 'string') {
        if (rawValidateGeoJson.startsWith('http')) {
          const fetchValidateData = await fetch(rawValidateGeoJson)
          mapValidateGeoData = await fetchValidateData.json()
        } else {
          mapValidateGeoData = JSON.parse(rawValidateGeoJson)
        }
      } else {
        mapValidateGeoData = rawValidateGeoJson
      }
    } catch (e) {
      console.warn('Gagal memproses GeoJSON dari validate:', e)
    }
  }

  let mapDisplayGeoData = null

  if (props.geoJson) {
    try {
      const rawData = typeof props.geoJson === 'string' ? JSON.parse(props.geoJson) : props.geoJson

      // ===== SMART PARSER: Deteksi Otomatis Format API Rute =====
      if (rawData.routes && rawData.routes.length > 0) {
        // 1. Jika data dari OSRM
        mapDisplayGeoData = rawData.routes[0].geometry
        routeSummary.value = {
          distance: rawData.routes[0].distance,
          duration: rawData.routes[0].duration,
        }
      } else if (rawData.features && rawData.features.length > 0) {
        // 2. Jika data dari ORS
        mapDisplayGeoData = rawData.features[0].geometry
        if (rawData.features[0].properties?.summary) {
          routeSummary.value = rawData.features[0].properties.summary
        }
      } else if (rawData.coordinates) {
        // 3. Jika data murni LineString (tanpa summary)
        mapDisplayGeoData = rawData
      } else {
        // 4. Fallback GeoJSON default
        mapDisplayGeoData = rawData
      }
    } catch (e) {
      console.warn('Gagal memproses props.geoJson:', e)
    }
  }

  if (mapValidateGeoData && !props.geoJson) {
    L.geoJSON(mapValidateGeoData, {
      style: { color: '#3b82f6', weight: 4, fillOpacity: 0.1 },
    }).addTo(map.value)
    loadedGeoJsonData.value = mapValidateGeoData
  }

  if (mapDisplayGeoData) {
    const startIcon = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color:#22c55e; width:24px; height:24px; border-radius:50%; display:flex; justify-content:center; align-items:center; color:white; font-weight:bold; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.5);'>A</div>",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    })

    const endIcon = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color:#ef4444; width:24px; height:24px; border-radius:50%; display:flex; justify-content:center; align-items:center; color:white; font-weight:bold; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.5);'>B</div>",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    })

    const displayLayer = L.geoJSON(mapDisplayGeoData, {
      style: { color: '#00FFFF', weight: 5, opacity: 0.8 },
      onEachFeature: (feature: any, layer: any) => {
        if (feature.geometry && feature.geometry.type === 'LineString') {
          const coords = feature.geometry.coordinates
          if (coords && coords.length > 0) {
            const startPoint = coords[0]
            const endPoint = coords[coords.length - 1]

            L.marker([startPoint[1], startPoint[0]], { icon: startIcon }).addTo(map.value)
            L.marker([endPoint[1], endPoint[0]], { icon: endIcon }).addTo(map.value)
          }
        }
      },
    }).addTo(map.value)

    if (!props.modelValue || !props.modelValue[props.latKey]) {
      map.value.fitBounds(displayLayer.getBounds())
    }
  } else if (mapValidateGeoData && (!props.modelValue || !props.modelValue[props.latKey])) {
    const validateLayer = L.geoJSON(mapValidateGeoData)
    map.value.fitBounds(validateLayer.getBounds())
  } else {
    map.value.setView([startLat, startLng], 15)
  }

  if (!props.geoJson || Object.keys(props.geoJson).length === 0) {
    updateMarker(startLat, startLng)
  }

  setTimeout(() => {
    map.value?.invalidateSize()
  }, 100)

  map.value.on('click', (e: any) => {
    if (locked.value || props.disabled) return
    const { lat, lng } = e.latlng
    setNewLocation(lat, lng)
    emit('coordinates-selected', createPayload(lat, lng))
  })
}

// ========== Search Logic (Business Specific) ========== //
async function search() {
  if (!searchText.value || props.disabled) return
  loader.value?.show('loading', 'Mencari...')

  const locationContext = `${props.searchCity}, ${props.searchCountry}`
  const fullQuery = `${searchText.value}, ${locationContext}`

  let lat: number | null = null
  let lng: number | null = null

  try {
    const api = props.geocodeApi

    if (api?.custom?.handler) {
      const result = await api.custom.handler(fullQuery)
      if (result) {
        lat = result.lat
        lng = result.lng
      }
    } else if (api?.google) {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(fullQuery)}&key=${api.google}`,
      )
      const data = await res.json()
      if (data.results?.[0]) {
        lat = data.results[0].geometry.location.lat
        lng = data.results[0].geometry.location.lng
      }
    } else if (api?.geoapify) {
      const res = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(fullQuery)}&apiKey=${api.geoapify}`,
      )
      const data = await res.json()
      if (data.results?.[0]) {
        lat = data.results[0].lat
        lng = data.results[0].lon
      }
    } else if (api?.geocode) {
      const res = await fetch(
        `https://geocode.xyz/${encodeURIComponent(fullQuery)}?json=1&auth=${api.geocode}`,
      )
      const data = await res.json()
      if (data.latt && data.longt && data.latt !== '0.00000') {
        lat = parseFloat(data.latt)
        lng = parseFloat(data.longt)
      }
    }

    if (lat === null || lng === null) {
      const nomUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(fullQuery)}&format=json&limit=1`
      const nom = await fetch(nomUrl)
      const nomData = await nom.json()
      if (nomData.length > 0) {
        lat = parseFloat(nomData[0].lat)
        lng = parseFloat(nomData[0].lon)
      }
    }

    if (lat !== null && lng !== null) {
      setNewLocation(lat, lng)
      map.value?.setView([lat, lng], 15)
      ShowAlert('success', 'Ditemukan', ['Lokasi yang Anda cari ditemukan di peta.'])
      loader.value?.hide()
    } else {
      ShowAlert('error', 'Pencarian Gagal', [
        'Lokasi yang Anda cari tidak dapat ditemukan di peta.',
      ])
      loader.value?.hide()
    }
  } catch (e) {
    console.error('Search Error:', e)
    ShowAlert('error', 'Pencarian Gagal', [
      'Terjadi kesalahan saat mencari lokasi. Silakan coba lagi.',
    ])
    loader.value?.hide()
  }
}

// ========== Actions ========== //
const applyDarkModeFilter = () => {
  if (typeof document === 'undefined') return
  const mapContainer = document.getElementById(mapId)
  if (!mapContainer) return

  if (darkMode.value) {
    mapContainer.classList.add('dark-mode-active')
  } else {
    mapContainer.classList.remove('dark-mode-active')
  }
}

const toggleDarkMode = async () => {
  darkMode.value = !darkMode.value
  applyDarkModeFilter()
  await nextTick()

  if (map.value && L) {
    map.value.invalidateSize()
    map.value.eachLayer((layer: any) => {
      if (layer instanceof L.TileLayer) {
        layer.redraw()
      }
    })
  }
  updateMarker(parseFloat(latDisplay.value), parseFloat(lngDisplay.value))
}

const resetToDefault = () => {
  const la = parseFloat(String(props.initialLat))
  const lo = parseFloat(String(props.initialLng))

  if (map.value && !isNaN(la) && !isNaN(lo)) {
    map.value.setView([la, lo], 15)
    setNewLocation(la, lo)
    errorMessage.value = []
  } else {
    console.warn('Reset gagal: Peta belum siap atau koordinat initial invalid.')
  }
}

onMounted(async () => {
  try {
    const leafletModule = await import('leaflet')
    L = leafletModule.default || leafletModule

    if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
      darkMode.value = true
      applyDarkModeFilter()
    }

    setTimeout(() => {
      initMap()
    }, 50)
  } catch (err) {
    console.error('Gagal meload Leaflet:', err)
  }
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
    map.value = null
    marker.value = null
  }
})

defineExpose({
  setCoordinates: (lat: number, lng: number) => setNewLocation(lat, lng),
  refresh: () => map.value?.invalidateSize(),
})
</script>
