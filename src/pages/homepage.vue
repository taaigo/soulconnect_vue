<template>
  <div class="homepage">

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-inner">

        <!-- TEXT LEFT -->
        <div class="hero-text">
          <h1>
            <span class="line1">Vind liefde</span><br />
            <span class="line2">op een nieuwe manier</span>
          </h1>

          <p class="subtext">
            SoulConnect helpt je verbinden met mensen die écht bij je passen.
            Swipe, match en chat — veilig, snel en super simpel.
          </p>

          <div class="cta-row">
            <button class="btn primary" @click="goLogin">Inloggen</button>
            <button class="btn ghost" @click="goRegister">Account aanmaken</button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goLogin = () => router.push("/login");
const goRegister = () => router.push("/register");
</script>

<style scoped>
/* ---- GRADIENT BACKGROUND ---- */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 40px;
  background: linear-gradient(
    115deg,
    #ff3ea5,
    #e359f9,
    #8b63f6,
    #4b7dfd
  );
  background-size: 200% 200%;
  animation: gradientMove 10s ease infinite;
}

/* Sexy moving gradient */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ---- LAYOUT ---- */
.hero-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

/* ---- LEFT SIDE TEXT ---- */
.hero-text {
  max-width: 600px;
  color: white;
}

.hero-text h1 {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 800;
}

.hero-text .line1 {
  color: white;
}
.hero-text .line2 {
  color: #ffe3ff;
}

.subtext {
  font-size: 1.25rem;
  margin: 1.5rem 0;
  max-width: 500px;
  opacity: 0.9;
}

/* ---- CTA BUTTONS ---- */
.cta-row {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 14px 26px;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}

.btn.primary {
  background: white;
  color: #e359f9;
}

.btn.primary:hover {
  background: #f7f7f7;
  transform: translateY(-3px);
}

.btn.ghost {
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  color: white;
}

.btn.ghost:hover {
  background: rgba(255,255,255,0.35);
  transform: translateY(-3px);
}
</style>