<template>
  <div class="homepage">
    <section class="hero">
      <div class="container hero-inner">
        <div class="text">
          <h2>Vind jouw perfecte match</h2>
          <p>Maak een profiel aan, ontdek nieuwe mensen en vind echte connecties.</p>
          <div class="cta-row">
            <button class="btn primary" @click="goLogin">Account aanmaken</button>
            <button class="btn ghost" @click="goSwipe">Bekijk singles</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="img-placeholder">foto</div>
        </div>
      </div>
    </section>

    <section id="matches" class="matches container">
      <h3>Populaire Matches</h3>
      <div class="cards">
        <div class="card"> <strong>Sara, 22</strong> <p>Houdt van reizen & muziek</p> </div>
        <div class="card"> <strong>Mike, 24</strong> <p>Sportief & spontaan</p> </div>
        <div class="card"> <strong>Lina, 21</strong> <p>Kunst & fotografie</p> </div>
      </div>
    </section>

    <section id="stories" class="stories container">
      <h3>Succesverhalen</h3>
      <p class="muted">Lees hoe anderen hun liefde hebben gevonden via SoulConnect.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function goLogin() {
  router.push("/login");
}

function goSwipe() {
  router.push("/swipe");
}
</script>

<style scoped>
:root{
  --accent: #e6397f;
  --muted: #6b7280;
}
.hero{background:linear-gradient(180deg,#fff0f7,white);padding:3rem 0}
.hero-inner{display:flex;gap:2rem;align-items:center}
.text h2{margin:0 0 .5rem;font-size:2rem}
.text p{margin:0 0 1rem;color:var(--muted)}
.cta-row{display:flex;gap:.75rem}
.btn{padding:.65rem 1.1rem;border-radius:8px;border:1px solid transparent;cursor:pointer}
.btn.primary{background:var(--accent);color:white}
.btn.ghost{background:white;border-color:#ddd;color:var(--muted)}
.hero-image{flex:1;display:flex;justify-content:center}
.img-placeholder{width:200px;height:200px;border-radius:16px;border:2px dashed #ffc1d7;display:flex;align-items:center;justify-content:center;color:var(--muted)}
.matches, .stories{padding:2rem 0}
.cards{display:flex;gap:1rem;flex-wrap:wrap}
.card{flex:1 1 200px;padding:1rem;border:1px solid var(--accent);background:white;border-radius:10px}
.muted{color:var(--muted)}
@media(max-width:800px){
  .hero-inner{flex-direction:column;text-align:center}
}
</style>
