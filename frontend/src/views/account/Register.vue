<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';

const schema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});

async function onSubmit(values) {
  const usersStore = useUsersStore();
  const alertStore = useAlertStore();
  try {
    await usersStore.register(values);
    await router.push('/account/login');
    alertStore.success('Registrasi berhasil, silakan login ya 🌸');
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<template>
  <div class="register-container">
    <div class="register-card" data-aos="fade-up">
      <h2 class="text-center"> Silahkan Daftar Akun Baru </h2>
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
          <label>First Name</label>
          <Field name="firstName" type="text" class="form-control" :class="{ 'is-invalid': errors.firstName }" />
          <div class="invalid-feedback">{{ errors.firstName }}</div>
        </div>

        <div class="form-group">
          <label>Last Name</label>
          <Field name="lastName" type="text" class="form-control" :class="{ 'is-invalid': errors.lastName }" />
          <div class="invalid-feedback">{{ errors.lastName }}</div>
        </div>

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
          <button class="btn-register" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Daftar
          </button>
          <router-link to="/account/login" class="btn-cancel">Batal</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffe4e1, #ffb6c1, #ffc0cb);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.register-card {
  background-color: #fff0f5;
  padding: 2.5rem;
  border-radius: 25px;
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
  width: 100%;
  max-width: 480px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.register-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255, 105, 180, 0.4);
}

h2 {
  color: #d81b60;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  color: #c2185b;
  margin-bottom: 0.4rem;
}

.form-control {
  border: 1px solid #f8bbd0;
  border-radius: 10px;
  padding: 0.6rem;
  transition: border-color 0.2s ease;
}

.form-control:focus {
  outline: none;
  border-color: #ec407a;
  box-shadow: 0 0 0 3px rgba(236, 64, 122, 0.2);
}

.is-invalid {
  border-color: #e91e63;
}

.invalid-feedback {
  color: #e91e63;
  font-size: 0.85rem;
  margin-top: 0.3rem;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.btn-register {
  background-color: #ec407a;
  color: white;
  padding: 0.6rem 1.8rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-register:hover {
  background-color: #d81b60;
}

.btn-register:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-cancel {
  color: #c2185b;
  font-weight: 600;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.btn-cancel:hover {
  color: #ad1457;
}
</style>
