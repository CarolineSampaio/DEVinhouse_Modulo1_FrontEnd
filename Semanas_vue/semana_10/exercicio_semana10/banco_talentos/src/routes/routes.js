import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import NewTalent from '../views/Talent/newTalent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/sobre', name: 'About', component: About },
    { path: '/talento/novo', name: 'NewTalent', component: NewTalent }
  ]
})

export default router
