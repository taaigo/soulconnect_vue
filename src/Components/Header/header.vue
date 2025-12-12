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
    <div class="logo">SoulsConnect</div>

    <nav class="nav">
      <button @click="goHome">Home</button>
      <button @click="goAccount">Account</button>
      <button @click="goLogin">Login</button>
      <button @click="goSwipe">Swipe!</button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: rgb(254, 127, 163);
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.logo {
  font-size: 1.4rem;
  font-weight: bold;
}

.nav button {
  margin-left: 10px;
  padding: 8px 14px;
  background-color: #3a3a4f;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.nav button:hover {
  background-color: rgb(243, 155, 180);
}

</style>



  <!-- <header class="header">
      <div class="container header-inner">
        <h1 class="logo">SoulConnect</h1>
        <nav class="nav">
          <a href="/matches">Matches</a>
          <a href="/login">Login</a>
        </nav>
      </div>
    </header> -->
