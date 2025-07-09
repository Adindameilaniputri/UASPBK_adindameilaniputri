// stores/auth.store.js

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/helpers/axios-wrapper';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  // Login
  const login = async (credentials) => {
    try {
      const responseData = await api.post('/users/authenticate', credentials);
      // responseData adalah user object langsung

      if (!responseData) {
        throw new Error('Data user tidak ditemukan di response');
      }

      user.value = responseData;
      isAuthenticated.value = true;

      localStorage.setItem('user', JSON.stringify(user.value));
      localStorage.setItem('isAuthenticated', 'true');

      return { success: true };
    } catch (err) {
      console.error('Gagal login:', err);
      return Promise.reject(err);
    }
  };

  // Logout
  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  };

  // Initialize dari localStorage saat reload
  const initialize = () => {
    const storedUser = localStorage.getItem('user');
    const storedAuth = localStorage.getItem('isAuthenticated');

    if (
      storedUser &&
      storedUser !== 'undefined' &&
      storedAuth === 'true'
    ) {
      try {
        user.value = JSON.parse(storedUser);
        isAuthenticated.value = true;
      } catch (err) {
        console.error('Gagal parse user dari localStorage:', err);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
      }
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    initialize,
  };
});
