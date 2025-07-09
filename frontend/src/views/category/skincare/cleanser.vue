<template>
  <div class="face-makeup">
    <!-- Banner Kategori Cleanser -->
    <img src="@/assets/bannercleanser.png" alt="Banner Cleanser" class="banner-img" />

    <!-- Judul -->
    <div class="q-pa-md">
      <div class="text-h6 text-pink-6 text-center q-mb-md">Produk Skincare Cleanser</div>

      <!-- Daftar Produk -->
      <div class="q-gutter-md row justify-around">
        <q-col
          v-for="(product, index) in cleanserProducts"
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
  AOS.init({ duration: 800, once: true })
})

// Data Cleanser sesuai path di /public/images/cleanser/
const cleanserProducts = ref([
  { id: 34, name: 'Emina Bright Stuff Prebiotic 100ML', type: 'Cleanser', price: 34000, image: '/images/fw/fw1.png' },
  { id: 35, name: 'Emina Bright Stuff Prebiotic 50ML', type: 'Cleanser', price: 21500, image: '/images/fw/fw2.png' },
  { id: 36, name: 'Emina Niacinamide Oxy Ceramide 100ML', type: 'Cleanser', price: 30000, image: '/images/fw/fw3.png' },
  { id: 37, name: 'Emina Niacinamide Oxy Ceramide 50ML', type: 'Cleanser', price: 19500, image: '/images/fw/fw4.png' },
  { id: 38, name: 'Emina Glow Rad+ Amino Fusion', type: 'Cleanser', price: 60000, image: '/images/fw/fw5.png' },
  { id: 39, name: 'Ms. Pimple Acne Solution', type: 'Cleanser', price: 22000, image: '/images/fw/fw6.png' },
  { id: 40, name: 'Bright Stuff for Acne 100ml', type: 'Cleanser', price: 33000, image: '/images/fw/fw7.png' },
  { id: 41, name: 'Bright Stuff Face Scrub', type: 'Cleanser', price: 24000, image: '/images/fw/fw8.png' },
  { id: 42, name: 'Made-Calm Micellar Water 300ml', type: 'Makeup Remover', price: 53000, image: '/images/fw/mr1.png' },
  { id: 43, name: 'HyaluBright Micellar Water 300ml', type: 'Makeup Remover', price: 18000, image: '/images/fw/mr2.png' },
  { id: 44, name: 'Bright Stuff Micellar Water', type: 'Makeup Remover', price: 39000, image: '/images/fw/mr3.png' },
  { id: 45, name: 'Creamy Milk Cleansing Lotion', type: 'Makeup Remover', price: 25000, image: '/images/fw/mr4.png' },
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
