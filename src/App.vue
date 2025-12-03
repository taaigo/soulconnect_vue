<template>
  <div id="app">
    <header class="header">
      <div class="container header-inner">
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

    <!-- Route content wordt hier getoond -->
    <router-view />

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 SoulConnect — Vind liefde op jouw manier</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Je bestaande App.vue styling voor header/footer/nav blijft hetzelfde */
.header{padding:1rem 0;border-bottom:1px solid #eee;background:white}
.header-inner{display:flex;justify-content:space-between;align-items:center}
.nav-link{margin-left:1rem;text-decoration:none;color:#6b7280}
.nav-link:hover{color:#e6397f}
.logo{font-size:1.4rem;font-weight:700;color:#e6397f}
.footer{border-top:1px solid #eee;padding:1rem 0;margin-top:2rem;text-align:center}
</style>
