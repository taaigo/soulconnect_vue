<script setup>
import "./header.css"
import { useRouter } from "vue-router"

const router = useRouter()

function goHome() {
  router.push("/")
}

function goAccount() {
  router.push("/account")
}

function goLogin() {
  router.push("/login")
}

function goSwipe() {
  router.push("/swipe")
}
</script>

<template>
  <header class="header">
    <div class="logo">MyWebsite</div>

    <nav class="nav">
      <button @click="goHome">Home</button>
      <button @click="goAccount">Account</button>
      <button @click="goLogin">Login</button>
      <button @click="goSwipe">Swipe!</button>
    </nav>
  </header>
</template>
