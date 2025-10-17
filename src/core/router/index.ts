import DriverPage from '@/pages/DriverPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DriverPage,
    },
  ],
})

export default router
