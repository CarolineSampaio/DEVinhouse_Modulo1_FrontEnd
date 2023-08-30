import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home/Home.vue";
import SignUp from "../views/SignUp/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/cadastro", name: "SignUp", component: SignUp },
  ],
});

export default router;
