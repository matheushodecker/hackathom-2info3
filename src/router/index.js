import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreNosPage from '../router/SobreNosPage.vue'
import TermosPage from '../router/TermosPage.vue'
import RentPageView from '@/views/RentPageView.vue'
import RentHousePageView from '@/views/RentHousePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LogInView.vue')
    },
    {
      path: '/rent', // Página principal de casas
      name: 'Rent',
      component: RentPageView
    },
    {
      path: '/rent/:id', // Página de detalhes de uma casa
      name: 'RentHouse',
      component: RentHousePageView,
      props: true
    },
    {
      path: '/Profile',
      name: 'Perfil',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/Sobre',
      name: 'Sobre Nós',
      component: SobreNosPage
    },
    {
      path: '/Termos',
      name: 'Termos de Uso',
      component: TermosPage
    }
  ]
})

export default router
