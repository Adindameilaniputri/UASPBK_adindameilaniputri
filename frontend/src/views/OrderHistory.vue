<template>
  <div class="order-history q-pa-md">
    <h2 class="text-h5 text-pink-6 text-center q-mb-md">Riwayat Pemesanan</h2>

    <div v-if="orders.length === 0" class="text-center text-grey">
      Belum ada riwayat pesanan.
    </div>

    <div v-else>
      <div
        v-for="(order, index) in orders"
        :key="order.id || index"
        class="order-card q-pa-md q-mb-md"
      >
        <h6 class="text-subtitle1">Pesanan #{{ index + 1 }}</h6>
        <div class="text-caption text-grey">
          {{ new Date(order.created_at).toLocaleString('id-ID') }}
        </div>

        <div v-for="item in order.items" :key="item.id" class="row q-mt-sm">
          <img
            :src="item.image || '/images/default.png'"
            :alt="item.name || 'Gambar'"
            class="item-img"
          />
          <div class="col q-ml-md">
            <div class="text-subtitle2">{{ item.name || 'Tanpa Nama' }}</div>
            <div>
              IDR {{ Number(item.price || 0).toLocaleString() }} x {{ item.quantity }}
            </div>
          </div>
        </div>

        <div class="text-right text-weight-bold q-mt-sm">
          Total: IDR {{
            order.items.reduce((sum, i) => {
              const price = Number(i.price) || 0
              const qty = Number(i.quantity) || 0
              return sum + price * qty
            }, 0).toLocaleString()
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'

const orderStore = useOrderStore()
const { orders } = storeToRefs(orderStore)

onMounted(() => {
  orderStore.fetchOrders()
})
</script>

<style scoped>
.order-history {
  max-width: 800px;
  margin: 0 auto;
}

.order-card {
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #fff;
}

.item-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
}
</style>
