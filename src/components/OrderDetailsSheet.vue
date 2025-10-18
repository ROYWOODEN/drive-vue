<template>
  <!-- <div class="bg-[#F9F9F9] absolute w-full min-h-10 bottom-82 pb-6 pt-4 px-3">
    <div class="flex flex-row items-center py-2 gap-2">
      <arrow class="" />
      <div class="">
        <span class="flex">ул. Ленина 35</span>
        <span class="bt opacity-45">ул. Ильинская 7</span>
      </div>
    </div>

    <route-item
      :title="'Срочный заказ'"
      :price="300"
      :from="'ул. Горького 67'"
      :to="'ул. Бекетова 2'"
      :status="'Сбалансированный'"
    />
  </div> -->
  <div
    class="bg-white absolute bottom-0 w-full border-t-2 border-[#00000023] p-3 rounded-se-4xl min-h-[20vh]"
  >
    <cross
      class="absolute right-8 top-7 cursor-pointer"
      :class="isUrgently || isExpectation || isNoTrading ? 'top-16' : ''"
    />

    <h1 v-if="isUrgently" class="text-3xl font-bold opacity-50">Срочный заказ</h1>
    <h1 v-if="isExpectation" class="text-3xl font-bold opacity-50">Готов ждать</h1>
    <h1 v-if="isNoTrading" class="text-3xl font-bold opacity-50">Не готов торговаться</h1>

    <div class="flex flex-row items-center py-4 gap-2 border-b-2 border-[#D9D9D9]">
      <arrow class="" />
      <div class="leading-none">
        <span class="flex">ул. Рождественская 8Б</span>
        <span class="bt opacity-45">ул. Почаинская 17</span>
      </div>
    </div>

    <div class="w-full flex flex-row py-2 mb-2">
      <div class="text-center border-e-2 px-10 my-1 border-[#D9D9D9]">
        <span class="opacity-50">Владимир</span><br />
        <div class="flex justify-center items-center">
          <span class="opacity-50">4,9 </span><star />
        </div>
        <span class="bg-[#53b52540] rounded-xl px-4 py-1 text-sm">Лояльный</span>
      </div>

      <div class="w-1/2">
        <div class="flex flex-col justify-center items-center mt-3">
          <span class="text-4xl opacity-80 text-center font-bold pt-1 relative">
            300₽
            <img
              v-if="isUrgently"
              class="absolute top-[-10%] right-[-40%] w-13"
              src="/stok.png"
              alt=""
            />
          </span>

          <span class="opacity-50 text-[12px]"> 10 мин, 3км </span>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-row items-center">
      <hr class="w-auto min-w-20 border-[#B9B9B9] border-1" />
      <span class="text-center text-[11px] px-2 text-[#636366]"> Предложите оптимальную цену </span>
      <hr class="w-auto min-w- border-[#B9B9B9] border-1" />
    </div>

    <div class="flex flex-row w-full py-5">
      <price-selector
        :items="counter.price"
        :toggle="toggle"
        :active="activePrice"
        :class-name="'flex flex-row gap-1'"
      />

      <selectable-button class="flex items-center ms-1"><pencil /></selectable-button>
    </div>

    <div class="flex justify-center w-full">
      <button
        class="flex flex-row border-1 text-base rounded-3xl px-22 py-2"
        :class="isExpectation || isNoTrading ? 'green-gradient text-white' : 'text-[#53B525]'"
      >
        Принять за {{ counter.activePrice }}₽
        <fire v-if="isExpectation || isNoTrading" class="ms-1" :width="15" :heigth="18" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cross from './icons/Cross.vue'
import Arrow from './icons/Arrow.vue'
import Star from './icons/Star.vue'
import PriceSelector from './PriceSelector.vue'
import { onMounted, ref } from 'vue'
import SelectableButton from '@/UI/SelectableButton.vue'
import Pencil from './icons/Pencil.vue'
import Fire from './icons/Fire.vue'
import RouteItem from './RouteItem.vue'
import { useCounterStore } from '@/core/stores/counter'

const counter = useCounterStore()

const activePrice = ref<number>(2)
const items = ref<number[]>([330, 360, 395])

const isUrgently = ref<boolean>(false)
const isExpectation = ref<boolean>(false)
const isNoTrading = ref<boolean>(false)

const toggle = (index: number) => {
  activePrice.value = index
}

onMounted(async () => {
  await counter.getPrice({
    price_start_local: 200,
    distance_in_meters: 2000,
    duration_in_seconds: 900,
    pickup_in_meters: 800,
    pickup_in_seconds: 120,
    driver_rating: 4.4,
  })

  console.log(counter.price)
})
</script>

<style scoped></style>
