import { createRouter, createWebHistory } from 'vue-router'

import GeneralPage from '@/views/GeneralPage/GeneralPage'

const routes = [
  {
    path: '/',
    name: 'general',
    component: GeneralPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
