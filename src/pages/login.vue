<template>
  <div class="login-wrapper">
    <div class="login-box">
      <h1>Login</h1>

      <form @submit.prevent="handleLogin">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="jouw@email.com"
        />

        <label>Wachtwoord</label>
        <input
          v-model="password"
          type="password"
          placeholder="********"
        />

        <button type="submit">Inloggen</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { API_URL } from "../../conf.json";

const email = ref("");
const password = ref("");

async function handleLogin() {
console.log("test");
  const payload = {
    email: email.value,
    password: password.value,
  };

  await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  });
}
</script>

<style scoped>
/* Achtergrond met gradient */
.login-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4f46e5, #9333ea, #ec4899);
  padding: 20px;
  font-family: "Inter", sans-serif;
}

/* Glassmorphism login box */
.login-box {
  width: 100%;
  max-width: 420px;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
}

/* Titel */
.login-box h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
}

/* Labels */
label {
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

/* Inputs */
input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 15px;
  transition: 0.2s;
}

input::placeholder {
  color: #e0e0e0;
}

input:focus {
  background: rgba(255, 255, 255, 0.28);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
}

/* Knop */
button {
  width: 100%;
  padding: 14px;
  background: white;
  color: #4f46e5;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.25s;
}

button:hover {
  background: #f1f1f1;
  transform: translateY(-2px);
}
</style>
