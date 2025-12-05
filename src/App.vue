<script setup lang="ts">
const bg = "/love.png";
import Header from "./components/Header/header.vue";


</script>

<template>
  <div class="background" :style="{ backgroundImage: `url(${bg})` }">
      <Header />
      <router-view />
  </div>

   
</template>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>
