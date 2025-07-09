<template>
  <div class="face-makeup">
    <!-- Banner Kategori Lip -->
    <img src="@/assets/11.png" alt="Banner Face Makeup" class="banner-img" />

    <!-- Judul -->
    <div class="q-pa-md">
      <div class="text-h6 text-pink-6 text-center q-mb-md">Produk Makeup Bibir</div>

      <!-- Daftar Produk -->
      <div class="q-gutter-md row justify-around">
        <q-col
          v-for="(product, index) in lipProducts"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4 col-lg-4"
          style="max-width: 320px"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <q-card class="my-card">
            <q-img
              :src="product.image"
              :alt="product.name"
              ratio="1"
              class="product-img"
            />
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { Notify } from 'quasar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = useRouter()
const cartStore = useCartStore()

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  })
})


const lipProducts = ref([
  { id: 13, name: 'Squeeze Me Up Lip Glass', type: 'Lip Gloss', price: 58000, image: '/images/lip/lipglos1.png' },
  { id: 14, name: 'Liquid Lip Shine', type: 'Lip Gloss', price: 44000, image: '/images/lip/lipglos2.png' },
  { id: 15, name: 'Soulmatte', type: 'Lipstick', price: 63000, image: '/images/lip/lipstick1.png' },
  { id: 16, name: 'Sugar Rush', type: 'Lipstick', price: 39500, image: '/images/lip/lipstick2.png' },
  { id: 17, name: 'Creamatte', type: 'Liquid Lipstick', price: 52000, image: '/images/lip/llipstick1.png' },
  { id: 18, name: 'Lip Cushion', type: 'Liquid Lipstick', price: 60000, image: '/images/lip/llipstick2.png' },
  { id: 19, name: 'Emina Bouncy Tint 06 Bouncy Blush 7.4 g', type: 'Liptint', price: 69000, image: '/images/lip/liptint1.png' },
  { id: 20, name: 'Emina Airy Surprise Tint 11 So Fetch', type: 'Liptint', price: 39000, image: '/images/lip/liptint2.png' },
  { id: 21, name: 'Poppin Matte The 90 Edition', type: 'Lip Matte', price: 54500, image: '/images/lip/lipmate1.jpg' },
  { id: 22, name: 'Poppin Matte', type: 'Lip Matte', price: 43000, image: '/images/lip/lipmate2.png' },
  { id: 23, name: 'Oh So Kissable Tinted', type: 'Lip Balm', price: 39000, image: '/images/lip/lipbalm.png' },
  { id: 24, name: 'Emina Lip Mask Watermelon Sorbet', type: 'Lip Mask', price: 44000, image: '/images/lip/lipmask.png' }
])


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
