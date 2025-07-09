<script setup>
import { useAuthStore } from '@/stores';
import { router } from '@/router';

const authStore = useAuthStore();

// Jika sudah login, arahkan langsung ke home
if (authStore.user && router.currentRoute.value.path.startsWith('/account')) {
  router.push('/');
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.q-layout {
  min-height: 100vh;
  background: linear-gradient(to right, #ffc0cb, #ffe4e1);
}
</style>
