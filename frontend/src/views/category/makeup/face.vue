<template>
  <div class="face-makeup">
    <!-- Banner Kategori Face -->
    <img src="@/assets/11.png" alt="Banner Face Makeup" class="banner-img" />

    <!-- Judul -->
    <div class="q-pa-md">
      <div class="text-h6 text-pink-6 text-center q-mb-md">Produk Makeup Wajah</div>

      <!-- Daftar Produk: Grid 3 Kolom -->
      <div class="product-grid">
        <div
          v-for="(product, index) in faceProducts"
          :key="product.id"
          class="product-card"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <div class="card-img">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="card-content">
            <div class="text-subtitle1 text-bold">{{ product.name }}</div>
            <div class="text-caption">{{ product.type }}</div>
            <div class="text-subtitle2 text-pink-6">
              IDR {{ product.price.toLocaleString() }}
            </div>
            <button class="btn-add" @click="addToCart(product)">
              <i class="material-icons">shopping_cart</i> Add to Cart
            </button>
          </div>
        </div>
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
  AOS.init({ duration: 800, once: true })
})

// ✅ Data produk pakai path dari /public/images/face
const faceProducts = ref([
  { id: 1, name: 'Loose Powder Cake', type: 'Loose Powder', price: 40000, image: '/images/face/bedaktabur.png' },
  { id: 2, name: 'Bare With Me Mineral', type: 'Loose Powder', price: 63500, image: '/images/face/barewithmemineral.png' },
  { id: 3, name: 'Bright Stuff', type: 'Loose Powder', price: 28000, image: '/images/face/brightstuff.png' },
  { id: 4, name: 'Daily Matte Compact Powder', type: 'Powder Complexion', price: 42000, image: '/images/face/dailymattecompactpowder.jpg' },
  { id: 5, name: 'City Chicc CC Cake', type: 'Powder Complextion', price: 53500, image: '/images/face/citychicc.png' },
  { id: 6, name: 'Daily Matte BB Cream', type: 'Liquid Complextion', price: 55000, image: '/images/face/DailyMatteBBCream.png' },
  { id: 7, name: 'Pore Range', type: 'Liquid Complextion', price: 47000, image: '/images/face/PoreRange.png' },
  { id: 8, name: 'Cheeklit Cream Blush', type: 'Blush', price: 39000, image: '/images/face/CheeklitCreamBlush.png' },
  { id: 9, name: 'Cheeklit Pressed Blush', type: 'Blush', price: 48000, image: '/images/face/CheeklitPressedBlush.png' },
  { id: 10, name: 'Highlighter Stick', type: 'Highlighter', price: 43000, image: '/images/face/Highlighterstick.png' },
  { id: 11, name: 'Highlighter Powder', type: 'Highlighter', price: 39000, image: '/images/face/HighlighterPowder.png' },
  { id: 12, name: 'Squeeze Me Up Liquid Concealer Caramel', type: 'Concealer', price: 42000, image: '/images/face/Concelar.jpg' },
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

/* ✅ Grid 3 Kolom Tetap */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}

.product-card {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  width: 100%;
  max-width: 280px;
}

.card-img img {
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 10px;
}

.card-content {
  margin-top: 10px;
}

.btn-add {
  margin-top: 10px;
  background-color: #ec407a;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.btn-add:hover {
  background-color: #d81b60;
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
