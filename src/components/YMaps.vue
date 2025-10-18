<template>
  <yandex-map
    v-model="map"
    :settings="{
      location,
      showScaleInCopyrights: true,
    }"
    width="100%"
    height="80vh"
  >
    <yandex-map-default-scheme-layer :settings="{ customization }" />
    <yandex-map-default-features-layer />

    <!-- <yandex-map-default-marker
      v-model="defaultMarker"
      :settings="{
        coordinates: AmarkerCoords,
        title: `Долгота: ${defaultMarker?.coordinates[0].toFixed(6)}<br>Широта: ${defaultMarker?.coordinates[1].toFixed(6)}`,
        draggable: true,
        onDragMove,
      }"
    /> -->

    <yandex-map-ui-marker
      :settings="{
        coordinates: markerA,
        color: { day: '#00CC00', night: '#00CC00' },
        onDragMove,
        draggable: true,
      }"
    />
    <yandex-map-ui-marker
      :settings="{
        coordinates: markerB,
        color: { day: '#00CC00', night: '#00CC00' },
        onDragMove,
        draggable: true,
      }"
    />

    <yandex-map-feature
      :settings="{
        geometry: {
          type: 'LineString',
          coordinates: lineCoordinates,
        },
        style: {
          stroke: [{ color: '#4B882E', width: 4 }],
        },
      }"
    />

    <yandex-map-listener
      :settings="{ onClick: (_, e) => (lineCoordinates = [...lineCoordinates, e.coordinates]) }"
    />
  </yandex-map>
</template>

<script setup lang="ts">
import { shallowRef, triggerRef } from 'vue'
import type { LngLat, VectorCustomization, YMap, YMapLocationRequest } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapFeature,
  YandexMapListener,
  YandexMapDefaultMarker,
  YandexMapUiMarker,
} from 'vue-yandex-maps'
import { ref } from 'vue'
import type { YMapDefaultMarker } from '@yandex/ymaps3-types/packages/markers'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)
const AmarkerCoords = ref<[number, number]>([44.002, 56.3287])

const markerA = ref<[number, number]>([44.002, 56.3287])
const markerB = ref<[number, number]>([44.0, 56.3])

const location = ref<YMapLocationRequest>({
  center: [44.002, 56.3287], // starting position [lng, lat]
  zoom: 11, // starting zoom
})

const customization = shallowRef<VectorCustomization>([
  {
    tags: {
      any: ['water'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#99A0A6',
      },
    ],
  },
  {
    tags: {
      any: ['landscape', 'admin', 'land', 'transit'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#DDDFE0',
      },
    ],
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#FDFDFD',
      },
    ],
  },
  {
    tags: {
      any: ['building'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#C9CBCE',
      },
    ],
  },
])

const defaultMarker = shallowRef<YMapDefaultMarker | null>(null)

const lineCoordinates = ref<LngLat[]>([
  [44.002, 56.3287],
  [44.03, 56.30],
  [44.0, 56.3],
])

const onDragMove = () => {
  triggerRef(defaultMarker)
}
</script>
