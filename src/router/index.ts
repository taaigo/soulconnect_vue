import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/homepage.vue"
import Login from "../pages/login.vue"
import Swipe from "../pages/swipe.vue"
import Account from "../pages/account.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/swipe", component: Swipe },
  { path: "/account", component: Account },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
