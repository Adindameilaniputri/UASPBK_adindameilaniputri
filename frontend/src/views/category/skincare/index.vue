<template>
  <div class="all-skincare q-pa-md">
    <!-- Banner -->
    <img src="@/assets/bannersunscreen.png" alt="All Skincare Banner" class="banner-img" />

    <!-- Judul Halaman -->
    <div class="text-h5 text-center text-pink-6 q-mt-md q-mb-xl">Semua Produk Skincare</div>

    <!-- Produk per Kategori -->
    <div v-for="category in categories" :key="category" class="q-mb-xl">
      <div class="text-h6 text-pink-5 text-weight-bold q-mb-md">{{ category }} Products</div>
      <div class="q-gutter-md row justify-around">
        <q-col
          v-for="(product, index) in filteredProducts(category)"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4 col-lg-4"
          style="max-width: 320px"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <q-card class="my-card">
            <q-img :src="product.image" :alt="product.name" class="product-img" ratio="1" />
            <q-card-section>
              <div class="text-subtitle1 text-bold">{{ product.name }}</div>
              <div class="text-caption">{{ product.type }}</div>
              <div class="text-subtitle2 text-pink-6">
                IDR {{ product.price.toLocaleString() }}
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn
                color="pink-5"
                icon="shopping_cart"
                label="Add To Cart"
                @click="addToCart(product)"
              />
            </q-card-actions>
          </q-card>
        </q-col>
      </div>
    </div>

    <!-- Footer Newsletter & Sosial Media -->
    <div class="footer-newsletter-social q-mt-xl q-pa-md text-center">
      <div class="newsletter-section q-mb-md">
        <div class="text-h6 text-weight-bold text-pink-6">Subscribe to our Newsletter</div>
        <p class="text-body2">
          Be the first to find out about new products, upcoming stories, and our community.
        </p>
      </div>

      <div class="text-subtitle1 text-pink-6 text-weight-bold q-mb-sm">Follow Us</div>
      <div class="social-icons row justify-center q-gutter-md">
        <a href="https://web.facebook.com/eminacosmetics" target="_blank" class="social-link">
          <i class="fab fa-facebook-f fa-lg"></i>
        </a>
        <a href="https://x.com/eminacosmetics/" target="_blank" class="social-link">
          <i class="fab fa-x-twitter fa-lg"></i>
        </a>
        <a href="https://www.youtube.com/eminacosmetics" target="_blank" class="social-link">
          <i class="fab fa-youtube fa-lg"></i>
        </a>
        <a href="https://www.instagram.com/eminacosmetics/" target="_blank" class="social-link">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </div>

    <!-- Footer Copyright -->
    <div class="text-center q-mt-md q-pa-sm">
      <p class="text-caption text-grey">© 2025 Adinda Meilani Putri. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { useSkincareStore } from '@/stores/skincare'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { Notify } from 'quasar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skincareStore = useSkincareStore()
const cartStore = useCartStore()
const router = useRouter()

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

// Semua kategori sesuai isi dari stores/skincare.js
const categories = ['Cleanser', 'Moisturizer', 'Serum', 'Toner', 'SPF 50', 'SPF 35', 'Sheet Mask', 'Face Mask']

const filteredProducts = (category) => {
  return skincareStore.products.filter(product => product.type === category)
}

const addToCart = (product) => {
cartStore.addToCart({
    name: product.name,
    price: product.price,
    image: product.image
  })

  Notify.create({
    message: 'Produk berhasil ditambahkan ke keranjang!',
    color: 'pink',
    icon: 'shopping_cart',
    timeout: 1500
  })
}
</script>

<style scoped>
@import 'aos/dist/aos.css';

.banner-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
}

.my-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.product-img {
  height: 240px;
  object-fit: contain;
}

.footer-newsletter-social {
  background-color: #fff;
  border-top: 1px solid #eee;
  padding: 20px 0;
}

.newsletter-section p {
  margin: 8px 0 0;
  color: #666;
}

.social-icons a {
  text-decoration: none;
  color: #e91e63;
  transition: transform 0.2s ease;
}

.social-icons a:hover {
  transform: scale(1.2);
  color: #c2185b;
}
</style>
