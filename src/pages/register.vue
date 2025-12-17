<template>
  <div class="register-wrapper">
    <div class="register-box">
      <h1>Account aanmaken</h1>

      <form @submit.prevent="handleRegister">
        <label>Naam</label>
        <input v-model="name" type="text" placeholder="Jouw naam" />

        <label>Email</label>
        <input v-model="email" type="email" placeholder="jij@example.com" />

        <label>Wachtwoord</label>
        <input v-model="password" type="password" placeholder="********" />

        <label>Bevestig wachtwoord</label>
        <input type="password" placeholder="********" />

        <button type="submit">Account aanmaken</button>
      </form>

      <p class="login-link">
        Heb je al een account?
        <router-link to="/login">Log hier in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { API_URL } from "../../conf.json";
import { ref } from "vue";

const name = ref('');
const password = ref('');
const email = ref('');
const confirm_password = ref('');

async function handleRegister() {
  const payload = {
    name: name.value,
    email: email.value,
    password: password.value,
    gender: 0,
    target_gender: 1,
  };

  await fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  });
}
</script>

<style scoped>
.register-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ec4899, #a855f7, #6366f1);
  padding: 20px;
  font-family: "Inter", sans-serif;
}

.register-box {
  width: 100%;
  max-width: 450px;
  padding: 40px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
}

.register-box h1 {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 18px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 15px;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  transition: 0.25s;
}

textarea {
  height: 90px;
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: #e2e2e2;
}

input:focus,
textarea:focus {
  background: rgba(255, 255, 255, 0.28);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
}

button {
  width: 100%;
  padding: 14px;
  background: white;
  color: #ec4899;
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

.login-link {
  text-align: center;
  margin-top: 18px;
  font-size: 14px;
}

.login-link a {
  color: #ffd6f5;
  font-weight: 600;
  text-decoration: none;
  transition: 0.25s;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
