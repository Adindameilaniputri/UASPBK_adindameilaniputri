// src/router/beauty101.routes.js
export default {
  path: '/category/beauty101',
  component: () => import('@/views/category/beauty101/Layout.vue'), // Tambah ini!
  children: [
    {
      path: '',
      name: 'AllBeauty101',
      component: () => import('@/views/category/beauty101/index.vue')
    },
    {
      path: 'makeup',
      name: 'Makeup101',
      component: () => import('@/views/category/beauty101/makeup101.vue')
    },
    {
      path: 'skin',
      name: 'Skin101',
      component: () => import('@/views/category/beauty101/skin101.vue')
    }
  ]
}
