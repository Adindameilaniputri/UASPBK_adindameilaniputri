import { createRouter, createWebHistory } from 'vue-router'

// Import store Pinia
import { useAuthStore, useAlertStore } from '@/stores'

// Import halaman utama
import { Home } from '@/views'

// Import halaman biasa (non-nested)
import Promo from '@/views/Promo.vue'
import Cart from '@/views/Cart.vue'
import OrderHistory from '@/views/OrderHistory.vue' // ✅ Tambahan route Riwayat

// Import rute modular
import makeupRoutes from './makeup.routes'        // ← ini array
import skincareRoutes from './skincare.routes'    // ← object tunggal
import beauty101Routes from './beauty101.routes'  // ← object tunggal
import accountRoutes from './account.routes'
import usersRoutes from './users.routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    // Halaman utama
    { path: '/', component: Home },

    // Halaman statis
    { path: '/promo', component: Promo },
    { path: '/cart', component: Cart },
    { path: '/riwayat', component: OrderHistory }, // ✅ Ini yang ditambahkan

    // Rute modular (pakai spread kalau makeupRoutes berupa array)
    ...makeupRoutes,

    skincareRoutes,
    beauty101Routes,
    accountRoutes,
    usersRoutes,

    // Catch-all jika route tidak ditemukan
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

// Middleware untuk auth & alert
router.beforeEach(async (to) => {
  const alertStore = useAlertStore()
  alertStore.clear()

  const publicPages = ['/account/login', '/account/register']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath
    return '/account/login'
  }
})

export default router
