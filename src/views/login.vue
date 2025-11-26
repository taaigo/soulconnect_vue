<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Inloggen</h2>
      <form class="auth-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Wachtwoord" />
        <button class="btn primary">Login</button>
      </form>
      <p>Nog geen account? <router-link to="/register">Registreer</router-link></p>
    </div>
  </div>
</template>
