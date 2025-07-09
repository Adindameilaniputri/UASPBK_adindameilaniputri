<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'
import logoEmina from '@/assets/1.webp'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()
const orderStore = useOrderStore()

const { totalItems } = storeToRefs(cartStore)
const { orders } = storeToRefs(orderStore)

const isMakeupOpen = ref(false)
const isSkincareOpen = ref(false)
const isBeautyOpen = ref(false)

const toggleDropdown = (type) => {
  isMakeupOpen.value = type === 'makeup' ? !isMakeupOpen.value : false
  isSkincareOpen.value = type === 'skincare' ? !isSkincareOpen.value : false
  isBeautyOpen.value = type === 'beauty' ? !isBeautyOpen.value : false
}

const userName = computed(() => authStore.user?.firstName || 'Guest')

const lastOrderProduct = computed(() => {
  if (orders.value.length === 0) return null
  const lastOrder = orders.value[orders.value.length - 1]
  return lastOrder.items?.[0] || null
})

const logout = async () => {
  await authStore.logout()
  router.push('/login')
}

onMounted(() => {
  cartStore.fetchCart()
  orderStore.fetchOrders()
})
</script>

<template>
  <nav v-show="authStore.user" class="navbar-container">
    <!-- Kiri -->
    <div class="navbar-left">
      <img :src="logoEmina" alt="Logo Emina" class="logo-emina" />
      <span class="user-name">Halo, {{ userName }} 💖</span>
    </div>

    <!-- Tengah -->
    <div class="navbar-center">
      <!-- Makeup -->
      <div class="nav-item" @mouseleave="isMakeupOpen = false">
        <button class="nav-btn" @click="toggleDropdown('makeup')">Makeup ▾</button>
        <div v-if="isMakeupOpen" class="dropdown">
          <router-link to="/category/makeup" class="dropdown-link">All Makeup</router-link>
          <router-link to="/category/makeup/face" class="dropdown-link">Face</router-link>
          <router-link to="/category/makeup/lips" class="dropdown-link">Lips</router-link>
          <router-link to="/category/makeup/eyes" class="dropdown-link">Eyes</router-link>
        </div>
      </div>

      <!-- Skincare -->
      <div class="nav-item" @mouseleave="isSkincareOpen = false">
        <button class="nav-btn" @click="toggleDropdown('skincare')">Skincare ▾</button>
        <div v-if="isSkincareOpen" class="dropdown">
          <router-link to="/category/skincare" class="dropdown-link">All Skincare</router-link>
          <router-link to="/category/skincare/cleanser" class="dropdown-link">Cleanser</router-link>
          <router-link to="/category/skincare/moisturizer" class="dropdown-link">Moisturizer</router-link>
          <router-link to="/category/skincare/toner" class="dropdown-link">Toner</router-link>
          <router-link to="/category/skincare/serum" class="dropdown-link">Serum</router-link>
          <router-link to="/category/skincare/mask" class="dropdown-link">Mask</router-link>
          <router-link to="/category/skincare/sunscreen" class="dropdown-link">Sunscreen</router-link>
        </div>
      </div>

      <!-- Beauty 101 -->
      <div class="nav-item" @mouseleave="isBeautyOpen = false">
        <button class="nav-btn" @click="toggleDropdown('beauty')">Beauty 101 ▾</button>
        <div v-if="isBeautyOpen" class="dropdown">
          <router-link to="/category/beauty101" class="dropdown-link">All Beauty 101</router-link>
          <router-link to="/category/beauty101/makeup" class="dropdown-link">Makeup 101</router-link>
          <router-link to="/category/beauty101/skin" class="dropdown-link">Skin 101</router-link>
        </div>
      </div>

      <!-- Promo -->
      <router-link to="/promo" class="nav-btn">Promo</router-link>
    </div>

    <!-- Kanan -->
    <div class="navbar-right">
      <!-- Cart -->
      <router-link to="/cart" class="cart-btn">
        🛒 Cart
        <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
      </router-link>

      <!-- Riwayat -->
      <router-link to="/riwayat" class="order-btn">
        📦 Riwayat
        <span v-if="orders.length > 0" class="order-badge">{{ orders.length }}</span>
      </router-link>

      <!-- Logout -->
      <button @click="logout" class="logout-btn">Logout</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 20px;
  background: transparent;
  flex-wrap: wrap;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo-emina {
  height: 24px;
  width: auto;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
  color: #ff69b4;
  font-size: 18px;
}

.navbar-center {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.nav-item {
  position: relative;
}

.nav-btn {
  background-color: transparent;
  border: none;
  color: #ff69b4;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
}

.dropdown {
  position: absolute;
  top: 35px;
  left: 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  min-width: 160px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.dropdown-link {
  text-decoration: none;
  color: #444;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.2s ease;
}

.dropdown-link:hover {
  background-color: #ffe4ec;
  color: #ff69b4;
}

.logout-btn {
  background-color: #ff69b4;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background-color: #ff1493;
}

.cart-btn {
  position: relative;
  background-color: transparent;
  border: none;
  color: #ff69b4;
  font-weight: bold;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

.order-btn {
  position: relative;
  background-color: transparent;
  border: none;
  color: #ff69b4;
  font-weight: bold;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
}

.order-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: green;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}
</style>
