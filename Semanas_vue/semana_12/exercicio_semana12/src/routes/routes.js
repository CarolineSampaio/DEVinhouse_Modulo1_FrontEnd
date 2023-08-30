import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/HomePag.vue'
import Cart from '../views/Cart/CartPag.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/carrinho',
      name: 'Cart',
      component: Cart
    }
  ]
})

export default router
