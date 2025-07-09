import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'

// ✅ Quasar
import { Quasar, Notify } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons'
import quasarLang from 'quasar/lang/id'
import 'quasar/dist/quasar.css'
import 'quasar/src/css/index.sass'

// ✅ AOS Animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// ✅ Axios
import axios from 'axios'

// ✅ Buat App Instance
const app = createApp(App)

// ✅ Global Property untuk Axios
app.config.globalProperties.$axios = axios

// ✅ Plugin: Pinia
const pinia = createPinia()
app.use(pinia)

// ✅ Inisialisasi auth sebelum mount
import { useAuthStore } from './stores/auth.store'
const auth = useAuthStore()
auth.initialize()

// ✅ Plugin: Router
app.use(router)

// ✅ Plugin: Quasar
app.use(Quasar, {
  plugins: { Notify },
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    brand: {
      primary: '#ec407a',   // 🌸 pink girly
      secondary: '#f8bbd0', // 💕 pink muda
      accent: '#fce4ec'     // 🩷 pink soft
    }
  }
})

// ✅ Mount App
app.mount('#app')

// ✅ Inisialisasi AOS (harus setelah mount)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false // true = hanya animasi pertama kali
})
