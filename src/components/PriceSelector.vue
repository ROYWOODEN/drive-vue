<template>
  <div :class="className">
    <SelectableButton
      @select="toggle(index)"
      v-for="(value, index) in items"
      :key="index"
      :value="value"
      :isActive="active === index"
    />
  </div>
</template>

<script setup lang="ts">
import SelectableButton from '@/UI/SelectableButton.vue'

interface Props {
  items: object
  active: number | boolean
  toggle: (index: number) => void
  className: string
}
const props = defineProps<Props>()

</script>

<style scoped></style>
