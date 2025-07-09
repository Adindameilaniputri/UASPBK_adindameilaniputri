<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useAuthStore, useAlertStore } from '@/stores';
import { useRouter } from 'vue-router';

const router = useRouter();
const schema = Yup.object().shape({
  username: Yup.string().required('Username wajib diisi'),
  password: Yup.string().required('Password wajib diisi')
});

async function onSubmit(values) {
  const authStore = useAuthStore();
  const alertStore = useAlertStore();
  try {
    const result = await authStore.login(values); // ✅ fix: kirim objek values
    if (result.success) {
      alertStore.success('Login berhasil, selamat datang kembali 🌸');
      await router.push('/');
    } else {
      alertStore.error(result.message || 'Login gagal');
    }
  } catch (error) {
    alertStore.error(error || 'Terjadi kesalahan saat login');
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h4 class="login-title">Selamat Datang di Emina Cosmetics</h4>
      <p class="login-subtitle">Masukkan username dan password ya!</p>

      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
          <label>Username</label>
          <Field name="username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
          <div class="invalid-feedback">{{ errors.username }}</div>
        </div>

        <div class="form-group">
          <label>Password</label>
          <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>

        <div class="form-actions">
          <button class="btn-submit" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Login
          </button>
          <router-link to="/account/register" class="btn-cancel">Belum punya akun? Daftar dulu 💖</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ffc0cb, #ffe4e1);
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(255, 192, 203, 0.3);
  max-width: 500px;
  width: 100%;
}

.login-title {
  text-align: center;
  color: #d63384;
  font-weight: bold;
  font-size: 1.5rem;
}

.login-subtitle {
  text-align: center;
  color: #888;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  width: 100%;
  padding: 0.6rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #fff0f5;
}

.is-invalid {
  border-color: #ff6b81;
}

.invalid-feedback {
  color: #ff6b81;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.form-actions {
  text-align: center;
  margin-top: 1.5rem;
}

.btn-submit {
  background-color: #ff69b4;
  color: white;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-submit:hover {
  background-color: #ff1493;
}

.btn-cancel {
  display: block;
  margin-top: 1rem;
  color: #d63384;
  text-decoration: underline;
}
</style>
