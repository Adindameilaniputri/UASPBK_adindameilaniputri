<template>
  <div class="makeup-page q-pa-md">
    <!-- Banner Besar -->
    <img src="@/assets/beauty101.jpg" alt="Banner" class="banner-img" data-aos="fade-down" data-aos-duration="1000" />

    <!-- Judul Kiri -->
    <div
      class="text-h5 text-pink-6 q-mt-md q-mb-lg"
      style="text-align: left;"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      Beauty Feed ID
    </div>

    <!-- Feed Artikel -->
    <div class="row q-col-gutter-md q-row-gutter-lg">
      <div
        v-for="(item, index) in beautyFeeds"
        :key="index"
        class="col-xs-12 col-sm-6 col-md-4"
      >
        <q-card
          class="feed-card"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <a :href="item.link" target="_blank">
            <q-img :src="item.image" class="feed-img" />
            <q-card-section>
              <div class="text-subtitle1 text-pink-6 text-bold">
                {{ item.title }}
              </div>
            </q-card-section>
          </a>
        </q-card>
      </div>
    </div>

    <!-- Footer Newsletter & Sosial Media -->
    <div class="footer-newsletter-social q-mt-xl q-pa-md text-center" data-aos="fade-up">
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
    <div class="footer-copyright text-center q-mt-md q-pa-sm" data-aos="fade-up">
      <p class="text-caption text-grey">© 2025 Adinda Meilani Putri. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { QImg, QCard, QCardSection } from 'quasar'

// Import gambar feed
import feed1 from '@/assets/FE11.png'
import feed2 from '@/assets/FE12.png'
import feed3 from '@/assets/FE13.png'
import feed4 from '@/assets/FE14.png'
import feed5 from '@/assets/FE15.png'
import feed6 from '@/assets/FE16.png'

// Feed data artikel promosi
const beautyFeeds = [
  {
    title: 'Emina Bright Stuff Series - Glowing dengan Formula Baru!',
    link: 'https://www.eminacosmetics.com/emina-bright-stuff-series-makin-bikin-glowing-dengan-formula-baruu',
    image: feed1
  },
  {
    title: 'Skincare Remaja Glowing - Kata Ahli!',
    link: 'https://www.eminacosmetics.com/skincare-remaja-glowing-emina-bright-stuff-sudah-upgrade-ini-kata-ahlii',
    image: feed2
  },
  {
    title: 'Cegah Kulit Kusam untuk Remaja',
    link: 'https://www.eminacosmetics.com/anti-insecure-begini-cara-cegah-kulit-kusam-untuk-remajaa',
    image: feed3
  },
  {
    title: 'Rekomendasi Skincare Kulit Kusam Lengkap!',
    link: 'https://www.eminacosmetics.com/rekomendasi-skincare-untuk-kulit-kusam-yang-lengkap-dari-emina-bright-stuff-baru',
    image: feed4
  },
  {
    title: 'Kenalan Sama Ingredients Baru Bright Stuff',
    link: 'https://www.eminacosmetics.com/kenalan-sama-ingredients-dari-formula-baru-emina-bright-stuff-series-yuk',
    image: feed5
  },
  {
    title: 'Kemasan Ramah Lingkungan dari Bright Stuff Baru',
    link: 'https://www.eminacosmetics.com/emina-bright-stuff-baru-sekarang-punya-kemasan-ramah-lingkungan-lho',
    image: feed6
  }
]
</script>

<style scoped>
.banner-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
}

.feed-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(233, 30, 99, 0.1);
}

.feed-card:hover {
  transform: translateY(-5px);
}

.feed-img {
  width: 100%;
  height: auto;
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

.footer-copyright {
  background-color: #fff;
  padding-bottom: 20px;
  font-size: 13px;
}
</style>
