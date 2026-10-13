<template>
  <div class="space-y-8">
    <header class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">
        MapPicker (GIS Leaflet Map)
      </h1>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Interactive Leaflet GIS map coordinate picker with draggable pin marker, search city filter,
        client-side guards, and tooltip support.
      </p>
    </header>

    <!-- Demo 1: Basic Location Picker -->
    <DemoSection
      title="Interactive Leaflet Map Pin"
      description="Click on the map or drag the marker pin to update geographical coordinates."
    >
      <MapPicker
        v-model="basicCoords"
        id="1"
        label="Delivery Destination Coordinates"
        :initial-lat="-7.245874"
        :initial-lng="112.737821"
        height="420px"
      />
      <div class="text-xs text-slate-500 mt-2">
        Coordinates:
        <code class="font-mono font-bold">{{ JSON.stringify(basicCoords) }}</code>
      </div>

      <template #code>
        <CodeBlock :code="basicCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 2: With Tooltip -->
    <DemoSection
      title="With Schema Tooltip"
      description="Displays geolocation guidelines beside the map label."
    >
      <MapPicker
        id="2"
        v-model="withTooltipCoords"
        label="Warehouse Logistics Hub"
        tooltip="Pinpoint the primary loading dock entrance for freight container trucks"
        tooltip-position="right"
        :initial-lat="-7.245874"
        :initial-lng="112.737821"
        height="380px"
      />

      <template #code>
        <CodeBlock :code="tooltipCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 3: Geolocation-based validation-->
    <DemoSection
      title="With Geolocation Validation"
      description="Restricts the map pin to a specific city boundary and displays an error message if the user attempts to place the pin outside of the allowed area."
    >
      <MapPicker
        id="3"
        v-model="withTooltipCoords"
        label="Warehouse Logistics Hub"
        tooltip="Pinpoint the primary loading dock entrance for freight container trucks"
        tooltip-position="right"
        :validate="{
          geoJson: `${origin}/surabaya.geojson`,
        }"
        :initial-lat="-7.245874"
        :initial-lng="112.737821"
        height="380px"
      />

      <template #code>
        <CodeBlock :code="geoValidationCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 4: View-Only / Read-Only Map -->
    <DemoSection
      title="View-Only Display Map"
      description="Displays a pinned landmark location without editing controls."
    >
      <MapPicker
        id="4"
        v-model="viewOnlyCoords"
        label="Surabaya Landmark (Tugu Pahlawan)"
        :view-only="true"
        :initial-lat="-7.245874"
        :initial-lng="112.737821"
        height="360px"
      />

      <template #code>
        <CodeBlock :code="viewOnlyCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 5: View-Only + Geo Routing View -->
    <DemoSection
      title="View-Only with Geo Routing Overlay"
      description="Displays a pinned landmark location with custom GeoJSON routing/boundary overlay."
    >
      <MapPicker
        id="5"
        label="Surabaya Geo Boundary & Route"
        :geo-json="geoRoutingJson"
        :view-only="true"
        height="360px"
      />

      <template #code>
        <CodeBlock :code="geoRoutingCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 6: Bounding Box Coordinate Validation -->
    <DemoSection
      title="Bounding Box Lat/Lng Validation"
      description="Restricts map pin placement to a rectangular geographic bounding box (minLat, maxLat, minLng, maxLng)."
    >
      <MapPicker
        id="6"
        v-model="bboxCoords"
        label="Delivery Service Area (Surabaya Central Box)"
        :validate="{
          minLat: -7.3,
          maxLat: -7.2,
          minLng: 112.7,
          maxLng: 112.8,
        }"
        :initial-lat="-7.245874"
        :initial-lng="112.737821"
        height="380px"
      />
      <div class="text-xs text-slate-500 mt-2">
        Coordinates:
        <code class="font-mono font-bold">{{ JSON.stringify(bboxCoords) }}</code>
        <span class="ml-2 text-slate-400 dark:text-slate-500"
          >(Allowed: Lat [-7.300000 to -7.200000], Lng [112.700000 to 112.800000])</span
        >
      </div>

      <template #code>
        <CodeBlock :code="bboxCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Demo 7: Custom Payload Keys & Localization -->
    <DemoSection
      title="Custom Payload Keys & Localization"
      description="Customizes the reactive v-model payload keys (latitude/longitude) and sets the map UI language to Indonesian ('id')."
    >
      <MapPicker
        id="7"
        v-model="customKeyCoords"
        lat-key="latitude"
        lng-key="longitude"
        lang="id"
        search-city="Surabaya"
        search-country="Indonesia"
        label="Titik Penjemputan Pelanggan"
        height="360px"
      />
      <div class="text-xs text-slate-500 mt-2">
        Custom Payload:
        <code class="font-mono font-bold">{{ JSON.stringify(customKeyCoords) }}</code>
      </div>

      <template #code>
        <CodeBlock :code="customKeyCode" language="vue" />
      </template>
    </DemoSection>

    <!-- Toolbar Features Guide -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        Built-in Interactive Toolbar Features
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2"
        >
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <span>🌙 / ☀️</span>
            <span>Dark / Light Mode Toggle</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Dynamically applies high-contrast dark tile filters to OpenStreetMap tiles and toggles
            pin marker accent colors (blue for dark, red for light).
          </p>
        </div>

        <div
          class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2"
        >
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <span>🏠</span>
            <span>Reset to Home Center</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Immediately returns the map viewport and marker pin back to configured
            <code class="font-mono text-blue-600 dark:text-blue-400">initialLat</code> and
            <code class="font-mono text-blue-600 dark:text-blue-400">initialLng</code>.
          </p>
        </div>

        <div
          class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2"
        >
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <span>🔒 / 🔓</span>
            <span>Marker Lock / Unlock Guard</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Locks the pin marker dragging and map clicks to prevent accidental movement while
            scrolling through a long web form.
          </p>
        </div>

        <div
          class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2"
        >
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <span class="font-mono text-xs bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded"
              >LAT / LNG</span
            >
            <span>Direct Coordinate Input</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Allows typing exact numeric GPS coordinates with automatic range validation (-90..90,
            -180..180).
          </p>
        </div>

        <div
          class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2"
        >
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <span>🔍</span>
            <span>Multi-Provider Geocoder</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Searches addresses scoped by
            <code class="font-mono text-blue-600 dark:text-blue-400">searchCity</code> and
            <code class="font-mono text-blue-600 dark:text-blue-400">searchCountry</code> using
            Nominatim or custom
            <code class="font-mono text-blue-600 dark:text-blue-400">geocodeApi</code>.
          </p>
        </div>

        <div
          class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2"
        >
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
            <span>🛣️ / ⏱️</span>
            <span>Route HUD Summary Badge</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400">
            Parses OSRM or OpenRouteService (ORS) route data from
            <code class="font-mono text-blue-600 dark:text-blue-400">geoJson</code> and renders live
            distance and travel duration badges with A/B pins.
          </p>
        </div>
      </div>
    </section>

    <!-- Props Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Props</h2>
      <PropsTable :props="propsList" />
    </section>

    <!-- Events Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Events</h2>
      <EventsTable :events="eventsList" />
    </section>

    <!-- Exposed Methods Table -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
        Exposed Methods (Template Ref)
      </h2>
      <div class="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table class="w-full min-w-[540px] text-sm border-collapse">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300">
              <th
                class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800"
              >
                Method
              </th>
              <th
                class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800"
              >
                Signature
              </th>
              <th
                class="px-4 py-2.5 text-left font-semibold border-b border-slate-200 dark:border-slate-800"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
            <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <td
                class="px-4 py-2.5 font-mono text-xs font-semibold text-emerald-600 dark:emerald-400"
              >
                setCoordinates
              </td>
              <td class="px-4 py-2.5 font-mono text-xs text-blue-600 dark:text-blue-400">
                (lat: number, lng: number) =&gt; void
              </td>
              <td class="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">
                Programmatically sets marker pin and centers the map view on new coordinates.
              </td>
            </tr>
            <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <td
                class="px-4 py-2.5 font-mono text-xs font-semibold text-emerald-600 dark:emerald-400"
              >
                refresh
              </td>
              <td class="px-4 py-2.5 font-mono text-xs text-blue-600 dark:text-blue-400">
                () =&gt; void
              </td>
              <td class="px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300">
                Recomputes map container dimensions and invalidates Leaflet cache (essential when
                inside modals, drawers, or tabs).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MapPicker } from '@zyvnox/vue-pack/components'
import DemoSection from '@/components/DemoSection.vue'
import CodeBlock from '@/components/CodeBlock.vue'
import PropsTable, { type PropDef } from '@/components/PropsTable.vue'
import EventsTable, { type EventDef } from '@/components/EventsTable.vue'

const origin = window.location.origin
const geoRoutingJson = ref<JSON>()
const basicCoords = ref<any>({ lat: -7.245874, lng: 112.737821 })
const withTooltipCoords = ref<any>({ lat: -7.245874, lng: 112.737821 })
const viewOnlyCoords = ref<any>({ lat: -7.245874, lng: 112.737821 })
const bboxCoords = ref<any>({ lat: -7.245874, lng: 112.737821 })
const customKeyCoords = ref<any>({ latitude: '-7.245874', longitude: '112.737821' })

const basicCode = `<template>
  <MapPicker
    v-model="coords"
    label="Delivery Destination"
    :initial-lat="-7.245874"
    :initial-lng="112.737821"
    height="320px"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPicker as MapPicker } from '@zyvnox/vue-pack/components'

const coords = ref({ lat: -7.245874, lng: 112.737821 })
<\/script>`

async function getGeoJsonUrl() {
  const response = await fetch(`${origin}/geolocation.json`)
  const geoJson = await response.json()
  geoRoutingJson.value = geoJson
}

const tooltipCode = `<MapPicker
  v-model="hubCoords"
  label="Warehouse Logistics Hub"
  tooltip="Pinpoint primary loading dock entrance"
  tooltip-position="right"
/>`

const geoValidationCode = `<MapPicker
  v-model="hubCoords"
  label="Warehouse Logistics Hub"
  :validate="{
    geoJson: '<your-city-boundary-geojson-url>'
  }"
/>`

const viewOnlyCode = `<MapPicker
  v-model="surabayaCoords"
  label="Surabaya Landmark (Tugu Pahlawan)"
  :view-only="true"
  :initial-lat="-7.245874"
  :initial-lng="112.737821"
/>`

const geoRoutingCode = `<MapPicker
  label="Surabaya Geo Boundary & Route"
  :geo-json="geoRoutingJson"
  :view-only="true"
/>`

const bboxCode = `<MapPicker
  v-model="coords"
  label="Delivery Service Area"
  :validate="{
    minLat: -7.300000,
    maxLat: -7.200000,
    minLng: 112.700000,
    maxLng: 112.800000,
  }"
  :initial-lat="-7.245874"
  :initial-lng="112.737821"
/>`

const customKeyCode = `<MapPicker
  v-model="payload"
  lat-key="latitude"
  lng-key="longitude"
  lang="id"
  search-city="Surabaya"
  search-country="Indonesia"
  label="Customer Pickup Point"
/>`

const propsList: PropDef[] = [
  {
    name: 'modelValue',
    type: 'Record<string, string> | { [latKey]: number | string, [lngKey]: number | string }',
    required: false,
    description:
      'Two-way reactive coordinate binding object containing latitude and longitude. Property keys default to "lat" and "lng", or custom keys set via latKey and lngKey.',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Input title label displayed above the map control toolbar.',
  },
  {
    name: 'id',
    type: 'string',
    default: 'setUID()',
    description: 'Unique element ID for the Leaflet DOM container and map instance.',
  },
  {
    name: 'initialLat',
    type: 'string | number',
    default: "'-7.245905'",
    description:
      'Default center latitude when no modelValue is present (defaults to Surabaya: -7.245905).',
  },
  {
    name: 'initialLng',
    type: 'string | number',
    default: "'112.737821'",
    description:
      'Default center longitude when no modelValue is present (defaults to Surabaya: 112.737821).',
  },
  {
    name: 'latKey',
    type: 'string',
    default: "'lat'",
    description:
      'Object key name representing latitude in the emitted modelValue payload (e.g. "latitude").',
  },
  {
    name: 'lngKey',
    type: 'string',
    default: "'lng'",
    description:
      'Object key name representing longitude in the emitted modelValue payload (e.g. "longitude").',
  },
  {
    name: 'height',
    type: 'string',
    default: "'400px'",
    description: 'CSS height of the rendered Leaflet map canvas container.',
  },
  {
    name: 'viewOnly',
    type: 'boolean',
    default: 'false',
    description:
      'Renders map in read-only pinned mode. Hides search, locks pin dragging, and disables manual inputs.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description:
      'Disables all user interactions, pin dragging, address search, and manual coordinates inputs.',
  },
  {
    name: 'required',
    type: 'boolean',
    default: 'false',
    description:
      'Enforces coordinate selection; triggers internal validation error if coordinates are empty.',
  },
  {
    name: 'validate',
    type: 'XOR<{ minLat: number, maxLat: number, minLng: number, maxLng: number }, { geoJson: string | object }>',
    description:
      'Client-side spatial boundary guard. Accepts either numeric bounding box coordinates or a GeoJSON polygon boundary URL/object with point-in-polygon ray-casting validation.',
  },
  {
    name: 'geoJson',
    type: 'JSON | Record<string, any> | string',
    description:
      'Display-layer GeoJSON overlay for route or boundary visualization. Automatically renders route path (cyan), start/destination markers (A/B), and HUD showing distance and duration.',
  },
  {
    name: 'searchCity',
    type: 'string',
    default: "'Surabaya'",
    description: 'Context city appended to address search queries to bias local place results.',
  },
  {
    name: 'searchCountry',
    type: 'string',
    default: "'Indonesia'",
    description: 'Context country appended to address search queries to scope geocoding accuracy.',
  },
  {
    name: 'geocodeApi',
    type: 'XORMany<[{ geoapify: string }, { google: string }, { mapbox: string }, { geocode: string }, { custom: ... }]>',
    description:
      'External Geocoding provider credentials (Google Maps, Geoapify, Mapbox, Geocode.xyz) or a custom async query resolver handler.',
  },
  {
    name: 'tooltip',
    type: 'string',
    description: 'Informational tooltip guidance text displayed on hover beside the label.',
  },
  {
    name: 'tooltipPosition',
    type: "'top' | 'bottom' | 'left' | 'right'",
    default: "'top'",
    description: 'Tooltip popover placement position relative to the icon.',
  },
  {
    name: 'tooltipIcon',
    type: 'string',
    default: "'❓'",
    description:
      'Custom icon character or emoji displayed next to the label for the tooltip trigger.',
  },
  {
    name: 'error',
    type: 'string | string[]',
    description:
      'External validation error message(s) from parent form/schema. Renders red outline ring and error alerts.',
  },
  {
    name: 'lang',
    type: "'en' | 'id'",
    default: "'en'",
    description:
      'Language code for internal map tooltips, search placeholders, guides, and error notices.',
  },
]

const eventsList: EventDef[] = [
  {
    name: 'update:modelValue',
    type: '(value: Record<string, string>, id: string) => void',
    description:
      'Emitted whenever map coordinates change (pin drag, map click, place search, or manual input).',
  },
  {
    name: 'update:lat',
    type: '(value: string, id: string) => void',
    description: 'Emitted with the updated latitude string formatted to 6 decimal places.',
  },
  {
    name: 'update:lng',
    type: '(value: string, id: string) => void',
    description: 'Emitted with the updated longitude string formatted to 6 decimal places.',
  },
  {
    name: 'coordinates-selected',
    type: '(value: Record<string, string>) => void',
    description:
      'Emitted when the user explicitly clicks anywhere on the Leaflet map to place a pin marker.',
  },
  {
    name: 'locked-coordinates',
    type: '(value: Record<string, string>) => void',
    description:
      'Emitted when the user locks the map via the toolbar Lock button to prevent accidental movement.',
  },
  {
    name: 'unlock-coordinates',
    type: '(value: Record<string, string>) => void',
    description:
      'Emitted when the user unlocks the map via the toolbar Unlock button to enable editing.',
  },
  {
    name: 'push:error',
    type: '(messages: string[], id: string) => void',
    description:
      'Emitted when internal spatial validation fails (e.g. pin is placed outside GeoJSON polygon or bounding box).',
  },
  {
    name: 'remove:error',
    type: '(id: string) => void',
    description: 'Emitted when coordinates pass all validation rules and all errors are cleared.',
  },
]

onMounted(() => {
  getGeoJsonUrl()
})
</script>
