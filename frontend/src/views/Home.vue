<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import slide1 from '@/assets/2.png'
import slide2 from '@/assets/3.png'
import slide3 from '@/assets/4.png'
import slide4 from '@/assets/5.png'
import slide5 from '@/assets/6.png'
import slide6 from '@/assets/7.png'

import produk1 from '@/assets/produk1.png'
import produk2 from '@/assets/produk2.png'
import produk3 from '@/assets/produk3.png'
import produk4 from '@/assets/produk4.png'

import bannerImage from '@/assets/8.png'
import image9 from '@/assets/9.png'

const router = useRouter()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const images = [slide1, slide2, slide3, slide4, slide5, slide6]

const products = ref([
  {
    id: 1,
    name: 'Creamatte',
    type: 'Liquid Lipstick',
    price: 52000,
    image: produk1
  },
  {
    id: 2,
    name: 'Emina Water Bright Glow Gel',
    type: 'Moisturizer',
    price: 42000,
    image: produk2,
    soldOut: true
  },
  {
    id: 3,
    name: 'Emina Glossy Stain 01 Autumn Bell',
    type: 'Lip Gloss',
    price: 56000,
    image: produk3
  },
  {
    id: 4,
    name: 'Emina Airy Surprise Tint 01 Y2K 3g',
    type: 'Liptint',
    price: 69500,
    image: produk4
  }
])

const instagramLinks = [
  'https://www.instagram.com/p/DGSKeBoSa9W',
  'https://www.instagram.com/reel/DDPGA69yYJl',
  'https://www.instagram.com/reel/C9HqR-XphPh',
  'https://www.instagram.com/reel/C3sGgafpHKp',
  'https://www.instagram.com/p/C29b-xSJhB1',
  'https://www.instagram.com/p/C2zCPSUpT5U',
  'https://www.instagram.com/p/C5sb4DjJEYg',
  'https://www.instagram.com/p/C55HFWYpKbr',
  'https://www.instagram.com/reel/C3Kb7qopHDe'
]
</script>

<template>
  <div style="overflow-x: hidden;">
    <!-- Swiper Gambar Besar -->
    <div class="carousel-container">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        navigation
        pagination
        loop
        :autoplay="{ delay: 3000 }"
        class="swiper-full"
      >
        <SwiperSlide v-for="(img, index) in images" :key="index">
          <img :src="img" class="carousel-img" />
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Konten -->
    <div class="content-section q-pa-lg text-center">
      <!-- Produk -->
      <div class="text-h5 text-left text-weight-bold text-pink-6 q-mt-md q-mb-sm">Pilihan Terbaik</div>
      <div class="row q-col-gutter-md q-mb-md">
        <div class="col-6 col-sm-3" v-for="product in products" :key="product.id">
          <div class="q-pa-sm bg-white rounded-borders shadow-2">
            <div class="relative-position">
              <img :src="product.image" alt="produk" class="full-width" />
              <div v-if="product.soldOut" class="absolute-top-right bg-grey-5 text-white q-pa-xs text-caption">
                Stock Habis
              </div>
            </div>
            <div class="text-subtitle1 text-bold q-mt-sm">{{ product.name }}</div>
            <div class="text-caption text-grey">{{ product.type }}</div>
            <div class="text-subtitle2 text-weight-bold q-mb-sm">Rp {{ product.price.toLocaleString() }}</div>
          </div>
        </div>
      </div>

      <!-- Banner -->
      <div class="banner-container">
        <img :src="bannerImage" alt="Banner Besar" class="banner-img" />
      </div>

      <!-- Gambar 9 + Skin Type -->
      <div class="skin-type-section row items-center justify-center q-mt-xl">
        <div class="col-12 col-md-4 q-pa-md text-right">
          <div class="text-h6 text-pink-6 text-weight-bold q-mb-sm">
            Pick Your Skin Type
          </div>
          <ul class="skin-list text-body2">
            <li><span class="bullet"></span>Kering</li>
            <li><span class="bullet"></span>Berminyak</li>
            <li><span class="bullet"></span>Normal</li>
            <li><span class="bullet"></span>Kombinasi</li>
          </ul>
        </div>
        <div class="col-12 col-md-4 q-pa-md flex justify-center">
          <img :src="image9" alt="Bright Stuff Image" class="image-center" />
        </div>
        <div class="col-12 col-md-4 q-pa-md text-left">
          <div class="text-h6 text-pink-6 text-weight-bold q-mb-sm">
            Bright Stuff for Acne Prone Skin 100 ml
          </div>
          <div class="text-body2">
            Siap untuk terlihat cerah? <br /><br />
            Emina Bright Stuff for Acne Prone Skin Face Wash dengan ekstrak summer plum dan double brightening power di dalamnya akan membantumu!<br /><br />
            Dikombinasikan dengan ekstrak cinnamon bark untuk kulit acne prone, kotoran dan minyak berlebih terangkat tanpa membuat kulitmu kering.<br /><br />
            Kini kulitmu lebih bersih, cerah, dan glowing. <br />
            <strong>Non-comedogenic. Non-acnegenic.</strong>
          </div>
        </div>
      </div>

      <!-- INSTAGRAM CAROUSEL -->
      <div class="q-mt-xl text-center instagram-carousel">
        <div class="text-h5 text-pink-6 text-weight-bold q-mb-md">IKUTI INSTAGRAM KAMI</div>
        <Swiper
          :modules="[Navigation, Autoplay]"
          navigation
          loop
          slides-per-view="auto"
          space-between="16"
          :autoplay="{ delay: 4000 }"
          class="q-px-md"
        >
          <SwiperSlide
            v-for="(post, index) in instagramLinks"
            :key="index"
            class="ig-slide"
          >
            <iframe
              :src="post + '/embed'"
              width="280"
              height="400"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
        </Swiper>
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
        <a href="https://web.facebook.com/eminacosmetics?_rdc=1&_rdr#" target="_blank" rel="noopener" class="social-link">
          <i class="fab fa-facebook-f fa-lg"></i>
        </a>
        <a href="https://x.com/eminacosmetics/" target="_blank" rel="noopener" class="social-link">
          <i class="fab fa-x-twitter fa-lg"></i>
        </a>
        <a href="https://www.youtube.com/eminacosmetics" target="_blank" rel="noopener" class="social-link">
          <i class="fab fa-youtube fa-lg"></i>
        </a>
        <a href="https://www.instagram.com/eminacosmetics/" target="_blank" rel="noopener" class="social-link">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </div>

    <div class="footer-copyright text-center q-mt-md q-pa-sm">
      <p class="text-caption text-grey">© 2025 Adinda Meilani Putri. All Rights Reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-full {
  width: 100%;
  height: 100%;
}

.content-section {
  background: #ffe4ec;
  min-height: 100vh;
}

.relative-position {
  position: relative;
}

.absolute-top-right {
  position: absolute;
  top: 8px;
  right: -30px;
  transform: rotate(45deg);
  padding: 4px 10px;
  font-size: 10px;
  background: #888;
  color: white;
}

.banner-container {
  width: 100%;
  margin-top: 40px;
}

.banner-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}

.skin-type-section {
  margin-top: 40px;
}

.rounded-borders {
  border-radius: 12px;
}

.image-center {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

.skin-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  display: inline-block;
}

.skin-list li {
  margin-bottom: 8px;
  font-size: 14px;
  position: relative;
  padding-left: 20px;
}

.skin-list .bullet {
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
  height: 8px;
  background-color: #e91e63;
  border-radius: 50%;
}

.instagram-carousel {
  background-color: #fff;
  padding: 40px 0;
}

.ig-slide {
  width: 280px;
  max-width: 100%;
  border-radius: 12px;
  overflow: hidden;
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

.footer-copyright {
  background-color: #fff;
  padding-bottom: 20px;
  font-size: 13px;
}
</style>
