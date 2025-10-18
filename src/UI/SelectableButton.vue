<template>
  <div
    @click="emit('select')"
    class="px-6 py-2 rounded-3xl text-[#636366] cursor-pointer font-bold border border-[#636366]"
    :class="isActive ? 'bg-[#53B525] text-white border-0' : 'bg-none'"
  >
    {{ value }} <slot>₽</slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value?: string
  isActive?: boolean
}
const { value, isActive } = defineProps<Props>()
const emit = defineEmits(['select'])
</script>

<style scoped></style>
