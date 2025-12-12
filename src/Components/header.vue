<template>
  <header class="header" :class="{ sticky: isSticky }">
    <div class="header-inner">
      <h1 class="logo">SoulConnect</h1>
      <nav class="nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/login">Login</router-link>
        <router-link class="nav-link" to="/register">Register</router-link>
        <router-link class="nav-link" to="/swipe">Swipe</router-link>
        <router-link class="nav-link" to="/account">Account</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 10;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.header {
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  transition: 0.3s ease;
  position: relative; /* Niet sticky in het begin */
}

.header.sticky {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-left: 32px;
}

.nav {
  margin-right: 32px;
}

.nav-link {
  margin-left: 1rem;
  padding: 0.45rem 1rem;
  text-decoration: none;
  color: #fceaff;
  font-weight: 500;

  border-radius: 12px;
  transition: 0.25s ease;
  background: rgba(255, 255, 255, 0.05);
}

.nav-link:hover {
  background: rgba(255, 200, 255, 0.25);
  color: white;
  box-shadow: 0 0 12px rgba(255, 180, 255, 0.45);
  transform: translateY(-2px);
}

/* Active route (bijv. je zit op /login) */
.nav-link.router-link-active {
  background: rgba(255, 200, 255, 0.35);
  color: white;
  box-shadow: 0 0 18px rgba(255, 160, 255, 0.55);
}
</style>
