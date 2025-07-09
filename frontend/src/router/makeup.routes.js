// src/router/makeup.routes.js

import AllMakeup from '@/views/category/makeup/index.vue'
import Face from '@/views/category/makeup/face.vue'
import Lips from '@/views/category/makeup/lips.vue'
import Eyes from '@/views/category/makeup/eyes.vue'

export default [
  {
    path: '/category/makeup',
    name: 'AllMakeupPage',
    component: AllMakeup
  },
  {
    path: '/category/makeup/face',
    name: 'FacePage',
    component: Face
  },
  {
    path: '/category/makeup/lips',
    name: 'LipsPage',
    component: Lips
  },
  {
    path: '/category/makeup/eyes',
    name: 'EyesPage',
    component: Eyes
  }
]
