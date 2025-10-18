<template>
  <div class="bg-white absolute bottom-9 w-full p-3 rounded-se-3xl min-h-[20vh]">
    <cross class="absolute right-8 top-7 cursor-pointer" />

    <div class="flex flex-row items-center py-2 gap-2 border-b-2 border-[#D9D9D9]">
      <arrow class="" />
      <div class="">
        <span class="flex">ул. Рождественская 8Б</span>
        <span class="bt opacity-45">ул. Почаинская 17</span>
      </div>
    </div>

    <div class="w-full flex flex-row py-2">
      <div class="text-center border-e-2 px-10 my-1 border-[#D9D9D9]">
        <span class="opacity-50">Владимир</span><br />
        <div class="flex justify-center items-center">
          <span class="opacity-50">4,9 </span><star />
        </div>
        <span class="bg-[#53b52555] rounded-xl px-3">Лояльный</span>
      </div>

      <div class="w-full">
        <div class="flex flex-col justify-center items-center">
          <span class="text-4xl text-center font-bold pt-1"> 300₽ </span>
          <span class="opacity-50"> 10 мин, 3км </span>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-row items-center">
      <hr class="w-20 border-[#B9B9B9] border-1" />
      <span class="text-[12px] px-2 text-[#636366]"> Предложите оптимальную цену </span>
      <hr class="w-20 border-[#B9B9B9] border-1" />
    </div>

    <div class="flex flex-row gap-1 w-full py-5">
      <price-selector
        :items="items"
        :toggle="toggle"
        :active="activePrice"
        :class-name="'flex flex-row gap-1'"
      />

      <selectable-button class="flex items-center"><pencil /></selectable-button>
    </div>

    <div class="flex justify-center">
      <button class="border-1 rounded-3xl px-29 text-[#53B525] py-2">Принять за 300₽</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cross from './icons/Cross.vue'
import Arrow from './icons/Arrow.vue'
import Star from './icons/Star.vue'
import PriceSelector from './PriceSelector.vue'
import { ref } from 'vue'
import SelectableButton from '@/UI/SelectableButton.vue'
import Pencil from './icons/Pencil.vue'

const activePrice = ref<number>(0)
const items = ref<number[]>([330, 360, 395])

const toggle = (index: number) => {
  activePrice.value = index
}
</script>

<style scoped></style>
