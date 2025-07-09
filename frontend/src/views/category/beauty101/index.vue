<template>
  <div class="beauty101-page q-pa-md">
    <!-- Banner Besar -->
    <img src="@/assets/beauty101.jpg" alt="Banner" class="banner-img" data-aos="fade-down" data-aos-duration="1000" />

    <!-- Judul Halaman -->
    <div class="text-h5 text-pink-6 q-mt-md q-mb-lg" data-aos="fade-right" data-aos-duration="800">
      All Beauty 101 Tips
    </div>

    <!-- Feed Artikel -->
    <div class="row q-col-gutter-md q-row-gutter-lg">
      <div
        v-for="(item, index) in allFeeds"
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
    <div class="text-center q-mt-md q-pa-sm" data-aos="fade-up">
      <p class="text-caption text-grey">© 2025 Adinda Meilani Putri. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { QImg, QCard, QCardSection } from 'quasar'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import gambar artikel makeup101
import makeup1 from '@/assets/FE11.png'
import makeup2 from '@/assets/FE12.png'
import makeup3 from '@/assets/FE13.png'
import makeup4 from '@/assets/FE14.png'
import makeup5 from '@/assets/FE15.png'
import makeup6 from '@/assets/FE16.png'

// Import gambar artikel skin101
import skin1 from '@/assets/FE17.jpg'
import skin2 from '@/assets/FE18.jpg'
import skin3 from '@/assets/FE19.jpg'
import skin4 from '@/assets/FE20.jpg'
import skin5 from '@/assets/FE21.jpg'
import skin6 from '@/assets/FE22.png'

// Gabungan semua feed
const allFeeds = [
  // Makeup Tips
  {
    title: 'Emina Bright Stuff Series - Glowing dengan Formula Baru!',
    link: 'https://www.eminacosmetics.com/emina-bright-stuff-series-makin-bikin-glowing-dengan-formula-baruu',
    image: makeup1
  },
  {
    title: 'Skincare Remaja Glowing - Kata Ahli!',
    link: 'https://www.eminacosmetics.com/skincare-remaja-glowing-emina-bright-stuff-sudah-upgrade-ini-kata-ahlii',
    image: makeup2
  },
  {
    title: 'Cegah Kulit Kusam untuk Remaja',
    link: 'https://www.eminacosmetics.com/anti-insecure-begini-cara-cegah-kulit-kusam-untuk-remajaa',
    image: makeup3
  },
  {
    title: 'Rekomendasi Skincare Kulit Kusam Lengkap!',
    link: 'https://www.eminacosmetics.com/rekomendasi-skincare-untuk-kulit-kusam-yang-lengkap-dari-emina-bright-stuff-baru',
    image: makeup4
  },
  {
    title: 'Kenalan Sama Ingredients Baru Bright Stuff',
    link: 'https://www.eminacosmetics.com/kenalan-sama-ingredients-dari-formula-baru-emina-bright-stuff-series-yuk',
    image: makeup5
  },
  {
    title: 'Kemasan Ramah Lingkungan dari Bright Stuff Baru',
    link: 'https://www.eminacosmetics.com/emina-bright-stuff-baru-sekarang-punya-kemasan-ramah-lingkungan-lho',
    image: makeup6
  },

  // Skin Tips
  {
    title: 'Emina Mini Toner - Teman Praktis Traveling Bestie!',
    link: 'https://www.eminacosmetics.com/emina-mini-toner-teman-praktis-traveling-bestie',
    image: skin1
  },
  {
    title: 'Kenalan dengan 5 Toner Emina Skin Rescuer',
    link: 'https://www.eminacosmetics.com/kenalan-dengan-5-toner-emina-yang-bakal-jadi-your-skin-rescuer',
    image: skin2
  },
  {
    title: '3 Hampers Emina untuk Dikirim ke Bestie Kesayangan',
    link: 'https://www.eminacosmetics.com/3hampers-emina-untuk-dikirim-ke-bestie-kesayangan',
    image: skin3
  },
  {
    title: '5 Bahaya Sinar UV Berlebihan terhadap Kulit Wajah',
    link: 'https://www.eminacosmetics.com/5-bahaya-sinar-uv-berlebihan-terhadap-kulit-wajah',
    image: skin4
  },
  {
    title: 'Tips Urutan Skincare Remaja untuk Pemula!',
    link: 'https://www.eminacosmetics.com/tips-urutan-skincare-remaja-untuk-pemula-yang-tidak-bikin-kulit-iritasi',
    image: skin5
  },
  {
    title: '4 Olahraga Seru dan Aman Selama Pandemi',
    link: 'https://www.eminacosmetics.com/4-olahraga-selama-pandemi-yang-seru-dan-aman-dilakukan',
    image: skin6
  }
]

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})
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
