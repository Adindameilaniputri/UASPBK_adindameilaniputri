// src/stores/beauty101.stores.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBeauty101Store = defineStore('beauty101', () => {
  // State: daftar tips 101
  const tips = ref([
    { id: 1, title: 'Cara Makeup Natural', category: 'makeup' },
    { id: 2, title: 'Basic Skincare untuk Pemula', category: 'skin' },
    { id: 3, title: 'Urutan Pemakaian Skincare', category: 'skin' }
  ])

  // State: tips yang difavoritkan
  const favorites = ref([])

  // Action: tambah ke favorit
  function addToFavorites(tip) {
    if (!favorites.value.find(t => t.id === tip.id)) {
      favorites.value.push(tip)
    }
  }

  // Action: hapus dari favorit
  function removeFromFavorites(tipId) {
    favorites.value = favorites.value.filter(t => t.id !== tipId)
  }

  return {
    tips,
    favorites,
    addToFavorites,
    removeFromFavorites
  }
})
