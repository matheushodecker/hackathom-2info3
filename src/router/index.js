import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/alugar',
      name: 'alugar',
      component: () => import('../views/RentPageView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/SingInView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/Rent',
      name: 'RentHousePage',
      component: () => import('../views/RentHousePageView.vue')
    }
  ]
})

export default router
