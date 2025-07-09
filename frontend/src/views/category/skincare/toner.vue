<template>
  <div class="face-makeup">
    <!-- Banner Kategori Toner -->
    <img src="@/assets/bannercleanser.png" alt="Banner Toner" class="banner-img" />

    <!-- Judul -->
    <div class="q-pa-md">
      <div class="text-h6 text-pink-6 text-center q-mb-md">Produk Skincare Toner</div>

      <!-- Daftar Produk -->
      <div class="q-gutter-md row justify-around">
        <q-col
          v-for="(product, index) in faceProducts"
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
import AOS from 'aos'
import { Notify } from 'quasar'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const router = useRouter()
const cartStore = useCartStore()

// Produk toner
const faceProducts = ref([
  { id: 65, name: 'Bright Stuff Exfoliating Toner', type: 'Toner', price: 41500, image: '/images/tn/tn1.png' },
      { id: 66, name: 'Ms. Pimple Acne Solution Exfoliating Toner 100 mL', type: 'Toner', price: 43000, image: '/images/tn/tn2.png' },
      { id: 67, name: 'Emina Natura Pal Toner Essence 100ml', type: 'Toner', price: 51000, image: '/images/tn/tn3.png' },
      { id: 68, name: 'Bright Stuff Face Toner', type: 'Toner', price: 31000, image: '/images/tn/tn4.png' },
      { id: 69, name: 'Emina Ms. Pimple Acne Solution Face Toner 50 ml', type: 'Toner', price: 21000, image: '/images/tn/tn5.png' },
      { id: 70, name: 'Double The Moist Face Toner', type: 'Toner', price: 55000, image: '/images/tn/tn6.png' },

  
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
