

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function goSwipe() {
  router.push("/swipe")
}
</script>

<template>
  <div>
    <section class="hero">
      
      <div class="container hero-inner">
        <div class="text">
          <h2>Vind jouw perfecte match</h2>
          <p>Maak een profiel aan, ontdek nieuwe mensen en vind echte connecties.</p>
          <div class="cta-row">
            <button class="" @click="goSwipe">Swipe!</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="img-placeholder">foto</div>
        </div>
          <section id="stories" class="stories container">
            <h3>Succesverhalen</h3>
            <p class="muted">Lees hoe anderen hun liefde hebben gevonden via SoulConnect.</p>
          </section>
        </div>
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
:root{
  --accent: #e6397f;
  --muted: #6b7280;
}
body{margin:0;font-family:Inter, sans-serif}
.container{max-width:1100px;margin:0 auto;padding:10% 20px}

.hero{background: linear-gradient(135deg, #4f46e5, #9333ea, #ec4899);padding:3rem 0}

.hero-image{flex:1;display:flex;justify-content:center}
.img-placeholder{width:200px;height:200px;border-radius:16px;border:2px dashed #ffc1d7;display:flex;align-items:center;justify-content:center;color:var(--muted)}

.matches, .stories{padding:2rem 0}

@media(max-width:800px){
  .hero-inner{flex-direction:column;text-align:center}
  .nav{display:none}
}
</style>
