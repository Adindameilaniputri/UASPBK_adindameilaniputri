<template>
  <div class="cart-page q-pa-md">
    <h2 class="text-h5 text-pink-6 text-center q-mb-md">Keranjang Belanja</h2>

    <div v-if="cartItems.length === 0" class="text-center text-grey">
      Keranjang masih kosong.
    </div>

    <div v-else>
      <div class="cart-list q-mb-md">
        <div
          class="cart-item row items-center q-mb-sm"
          v-for="item in cartItems"
          :key="item.id"
        >
          <img :src="item.image" :alt="item.name" class="item-img" />
          <div class="col q-ml-md">
            <div class="text-subtitle1">{{ item.name }}</div>
            <div class="text-pink-6">
              IDR {{ (item.price * item.quantity).toLocaleString() }}
            </div>

            <div class="q-mt-sm row items-center">
              <button @click="decreaseQty(item)" class="qty-btn">−</button>
              <span class="q-mx-sm">{{ item.quantity }}</span>
              <button @click="increaseQty(item)" class="qty-btn">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="text-right q-mt-md">
        <div class="text-subtitle1 q-mb-sm">
          Total: <strong>IDR {{ totalPrice.toLocaleString() }}</strong>
        </div>
        <button class="btn-checkout" @click="checkoutCart">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { Notify } from 'quasar'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const cartItems = cartStore.items

const totalPrice = computed(() =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
)

onMounted(() => {
  cartStore.fetchCart()
})

function increaseQty(item) {
  cartStore.updateQuantity(item.id, item.quantity + 1)
}

function decreaseQty(item) {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.id, item.quantity - 1)
  } else {
    cartStore.removeItem(item.id)
  }
}

async function checkoutCart() {
  if (cartItems.length === 0) {
    Notify.create({
      message: 'Keranjang masih kosong!',
      color: 'red',
      icon: 'warning',
    })
    return
  }

  await cartStore.checkout()

  Notify.create({
    message: 'Checkout berhasil! Pesanan disimpan ke riwayat.',
    color: 'green',
    icon: 'check_circle',
    timeout: 2000,
    position: 'top',
  })

  setTimeout(() => {
    router.push('/history')
  }, 2000)
}
</script>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: 0 auto;
}

.cart-item {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;
}

.item-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
}

.btn-checkout {
  background-color: #ec407a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.btn-checkout:hover {
  background-color: #d81b60;
}

.qty-btn {
  background: #f06292;
  color: white;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
}

.qty-btn:hover {
  background: #ec407a;
}
</style>
