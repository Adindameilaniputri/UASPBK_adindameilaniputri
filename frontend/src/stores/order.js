import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './auth.store'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: []
  }),

  actions: {
    async fetchOrders() {
      const auth = useAuthStore()
      if (!auth.user || !auth.user.id) {
        console.warn('User belum login, tidak bisa ambil order')
        this.orders = []
        return
      }

      try {
        const response = await axios.get(`/api/orders/${auth.user.id}`)
        this.orders = response.data
      } catch (error) {
        console.error('Gagal ambil data order:', error)
        this.orders = []
      }
    }
  }
})
