<template>
  <header class="header">
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
</script>

<style scoped>
.header {
  padding: 1rem 0;
  background: transparent;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
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
}

.nav-link {
  margin-left: 1rem;
  text-decoration: none;
  color: #fceaff;
  transition: 0.25s;
}

.nav-link:hover {
  color: #ffd6f5;
  transform: translateY(-1px);
}
</style>

