import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import NewPost from '../views/Posts/New/NewPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/novo',
      name: 'NewPost',
      component: NewPost
    }
  ]
})

export default router
