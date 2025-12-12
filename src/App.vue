<template>
  <div id="app">
    <AppHeader />

    <router-view />

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 SoulConnect — Vind liefde op jouw manier</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/header.vue"; 
</script>

<style scoped>
/* footer styling */
.footer {
  border-top: 1px solid #eee;
  padding: 1rem 0;
  text-align: center;
}
</style>
