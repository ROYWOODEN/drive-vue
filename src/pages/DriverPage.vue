<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 16,
      },
    }"
    width="100%"
    height="100vh"
  >
    <yandex-map-default-scheme-layer :settings="{ customization }" />
    <yandex-map-default-features-layer />
  </yandex-map>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import type { VectorCustomization, YMap } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
} from 'vue-yandex-maps'

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)

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
]);
</script>
