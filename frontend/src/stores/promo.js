import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePromoStore = defineStore('promo', () => {
  const promos = ref([
    { id: 1, title: 'Diskon 50% Lip Tint' },
    { id: 2, title: 'Buy 1 Get 1 Serum' }
  ])

  return { promos }
})
