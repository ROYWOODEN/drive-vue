<template>
  <form>
    <input type="text" v-model="formData.price_start_local" />
    <input type="text" v-model="formData.distance_in_meters" />
    <input type="text" v-model="formData.duration_in_seconds" />
    <input type="text" v-model="formData.pickup_in_meters" />
    <input type="text" v-model="formData.pickup_in_seconds" />
    <input type="text" v-model="formData.driver_rating" />
  </form>
</template>

<script setup lang="ts">
import type { BodyPrice } from '@/core/types/price'
import { ref } from 'vue'

const formData = ref<BodyPrice>({
  price_start_local: 0,
  distance_in_meters: 0,
  duration_in_seconds: 0,
  pickup_in_meters: 0,
  pickup_in_seconds: 0,
  driver_rating: 0,
})
</script>

<style scoped></style>
