import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { BodyPrice, Price } from '../types/price'
import { fetchPrice } from '../api/price'

export const useCounterStore = defineStore('counter', () => {
  const price = ref<Price[]>([])

  const activePrice = ref<number>(0)

  const getPrice = async (body: BodyPrice) => {
    try {
      price.value = await fetchPrice(body)
    } catch (error) {
      console.warn('Нет подключения к интернету попробуйте позже', error)
    }
  }

  return { getPrice, price, activePrice }
})
