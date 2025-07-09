import axios from 'axios'

// Ambil base URL dari env atau fallback ke localhost
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'

// Buat instance axios
const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor: tambahkan token jika ada
instance.interceptors.request.use((config) => {
  try {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
    const token = storedUser?.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } catch (err) {
    console.error('Gagal parsing user dari localStorage:', err)
  }

  return config
})

// Response handler
const handleResponse = (response) => {
  return response.data
}

// Error handler
const handleError = (error) => {
  const errMsg =
    error.response?.data?.message ||
    error.response?.data?.error ||
    error.message ||
    'Terjadi kesalahan pada koneksi ke server.'
  return Promise.reject(errMsg)
}

// Export api object
export const api = {
  get: (url, config = {}) => instance.get(url, config).then(handleResponse).catch(handleError),
  post: (url, data, config = {}) => instance.post(url, data, config).then(handleResponse).catch(handleError),
  put: (url, data, config = {}) => instance.put(url, data, config).then(handleResponse).catch(handleError),
  delete: (url, config = {}) => instance.delete(url, config).then(handleResponse).catch(handleError),
}
