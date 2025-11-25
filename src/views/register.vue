<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Account aanmaken</h2>
      <form class="auth-form">
        <input type="text" placeholder="Naam" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Wachtwoord" />
        <button class="btn primary">Registreren</button>
      </form>
      <p>Heb je al een account? <router-link to="/login">Log in</router-link></p>
    </div>
  </div>
</template>
