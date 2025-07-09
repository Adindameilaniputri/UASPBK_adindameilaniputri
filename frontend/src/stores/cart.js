import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'
import { useAuthStore } from './auth.store'

export const useCartStore = defineStore('cart', () => {
  const items = reactive([]) // reactive array, bukan ref([])

  const auth = useAuthStore()

  const fetchCart = async () => {
    if (!auth.user || !auth.user.id) {
      console.warn('User belum login, tidak bisa ambil cart')
      return
    }

    try {
      const response = await axios.get(`/api/cart/${auth.user.id}`)
      items.splice(0, items.length, ...response.data) // reactive update
    } catch (err) {
      console.error('Gagal ambil data cart:', err)
    }
  }

  const addToCart = async (product) => {
    if (!auth.user || !auth.user.id) {
      console.warn('User belum login, tidak bisa tambah ke cart')
      return
    }

    const payload = {
      user_id: auth.user.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    }

    try {
      await axios.post('/api/cart', payload)
      await fetchCart()
    } catch (err) {
      console.error('Gagal tambah ke cart:', err)
    }
  }

  const removeItem = async (id) => {
    const index = items.findIndex(i => i.id === id)
    if (index !== -1) {
      items.splice(index, 1) // update reactive array dulu
    }
    try {
      await axios.delete(`/api/cart/${id}`)
      await fetchCart()
    } catch (err) {
      console.error('Gagal hapus item:', err)
    }
  }

  const updateQuantity = async (id, quantity) => {
    const item = items.find(i => i.id === id)
    if (item) {
      item.quantity = quantity // update langsung, reactive
    }

    try {
      await axios.put(`/api/cart/${id}`, { quantity })
      await fetchCart()
    } catch (err) {
      console.error('Gagal update quantity:', err)
    }
  }

  const checkout = async () => {
    if (!auth.user || !auth.user.id) {
      console.warn('User belum login, tidak bisa checkout')
      return
    }

    try {
      await axios.post(`/api/cart/checkout/${auth.user.id}`)
      await fetchCart()
    } catch (err) {
      console.error('Checkout gagal:', err)
    }
  }

  return {
    items,
    fetchCart,
    addToCart,
    removeItem,
    updateQuantity,
    checkout,
  }
})
