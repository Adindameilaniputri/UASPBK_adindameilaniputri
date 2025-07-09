export default {
  path: '/category/skincare',
  component: () => import('@/views/category/skincare/layout.vue'), // layout umum
  children: [
    {
      path: '',
      name: 'AllSkincare',
      component: () => import('@/views/category/skincare/index.vue'), // All Skincare
    },
    {
      path: 'moisturizer',
      name: 'SkincareMoisturizer',
      component: () => import('@/views/category/skincare/moisturizer.vue'),
    },
    {
      path: 'toner',
      name: 'SkincareToner',
      component: () => import('@/views/category/skincare/toner.vue'),
    },
    {
      path: 'serum',
      name: 'SkincareSerum',
      component: () => import('@/views/category/skincare/serum.vue'),
    },
    {
      path: 'sunscreen',
      name: 'SkincareSunscreen',
      component: () => import('@/views/category/skincare/sunscreen.vue'),
    },
    {
      path: 'cleanser',
      name: 'SkincareCleanser',
      component: () => import('@/views/category/skincare/cleanser.vue'),
    },
    {
      path: 'mask',
      name: 'SkincareMask',
      component: () => import('@/views/category/skincare/mask.vue'),
    },
  ],
}
