<template>
  <div class="face-makeup">
    <!-- Banner Kategori Face -->
    <img src="@/assets/promo.jpg" alt="Banner Face Makeup" class="banner-img" />

    <!-- Judul -->
    <div class="q-pa-md">
      

      <!-- Daftar Produk -->
      <div class="row q-gutter-md justify-start">
        <div
          v-for="product in faceProducts"
          :key="product.id"
          class="col-xs-6 col-sm-4 col-md-3"
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
    <div class="footer-copyright text-center q-mt-md q-pa-sm">
      <p class="text-caption text-grey">© 2025 Adinda Meilani Putri. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


// Router dan store
const router = useRouter()

</script>

<style scoped>
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
  max-width: 100%;
  margin: 0 auto;
}

.product-img {
  height: 200px;
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
