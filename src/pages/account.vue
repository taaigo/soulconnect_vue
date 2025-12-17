<!-- 

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
          <nav class="nav">
            <button class="" @click="goSwipe">Swipe!</button>
          </nav>
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
.hero-inner{display:flex;align-items:center;justify-content:space-between;gap:2rem}

.hero-image{flex:1;display:flex;justify-content:center}
.img-placeholder{width:200px;height:200px;border-radius:16px;border:2px dashed #ffc1d7;display:flex;align-items:center;justify-content:center;color:var(--muted)}

.matches, .stories{padding:2rem 0}

.nav button {
  margin-left: 10px;
  padding: 8px 14px;
  background-color: #ec4899;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.nav button:hover {
  background-color: #9333ea;
}


@media(max-width:800px){
  .hero-inner{flex-direction:column;text-align:center}
  .nav{display:none}
}
</style> -->
<template>
  <div class="hero">
    <div class="container hero-inner">
      <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">


        <main class="md:col-span-2 space-y-4">
          <div class="flex items-start justify-between">
            <div>
              <h1 class="text-2xl font-semibold">{{ profile.name }}, <span class="text-gray-500">{{ profile.age }}</span></h1>
              <div class="text-sm text-gray-600">{{ profile.location }} • {{ profile.job }}</div>
            </div>
            <div class="hero-image">
              <div class="img-placeholder">foto</div>
            </div>
            <div class="nav gap-2">
              <button @click="editing = !editing" class="px-3 py-1 rounded border">{{ editing ? 'Klaar' : 'Bewerk profiel' }}</button>
              <button @click="openPreview = true" class="px-3 py-1 rounded bg-green-600 text-white">Bekijk als bezoeker</button>
            </div>
          </div>

          <section class="p-4 border rounded">
            <div class="flex items-start gap-4">
              <div class="flex-1">
                <h2 class="text-sm font-medium text-gray-700">Over mij</h2>
                <div v-if="!editing" class="mt-2 text-gray-700 whitespace-pre-line">{{ profile.bio }}</div>

                <textarea v-else v-model="profile.bio" rows="4" class="w-full mt-2 border rounded p-2"></textarea>
              </div>

              <div class="w-40 text-sm text-gray-600">
                <div><strong>Interesses</strong></div>
                <ul class="mt-2 space-y-1">
                  <li v-for="tag in profile.interests" :key="tag" class="inline-block px-2 py-1 bg-gray-100 rounded">{{ tag }}</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 border rounded">
              <h3 class="text-sm font-medium text-gray-700 mb-2">Match-voorkeuren</h3>
              <div class="space-y-2 text-sm text-gray-700">
                <div>Leeftijd: {{ prefs.ageMin }} - {{ prefs.ageMax }}</div>
                <input v-model.number="prefs.ageMin" type="range" min="18" max="80">
                <input v-model.number="prefs.ageMax" type="range" min="18" max="80">

                <div class="mt-2">Afstand: {{ prefs.distance }} km</div>
                <input v-model.number="prefs.distance" type="range" min="1" max="500">

                <div class="mt-2">Zoekt: </div>
                <select v-model="prefs.lookingFor" class="mt-1 w-full border rounded p-1 text-sm">
                  <option value="relationship">Serieuze relatie</option>
                  <option value="casual">Casual</option>
                  <option value="friendship">Vriendschap</option>
                </select>
              </div>
            </div>

            <div class="p-4 border rounded">
              <h3 class="text-sm font-medium text-gray-700 mb-2">Activiteit</h3>
              <div class="text-sm text-gray-600">
                <div>Laatste login: {{ lastSeen }}</div>
                <div class="mt-2">Matches: <strong>{{ stats.matches }}</strong></div>
                <div>Berichten: <strong>{{ stats.messages }}</strong></div>
                <div>Profiel views: <strong>{{ stats.views }}</strong></div>
              </div>

              <div class="nav">
                <button @click="viewLikes" class="px-3 py-1 border rounded text-sm">Wie mij leuk vond</button>
                <button @click="boostProfile" class="px-3 py-1 rounded bg-yellow-400 text-sm">Boost profiel</button>
              </div>
            </div>
          </section>

          <section class="p-4 border rounded">
            <h3 class="text-sm font-medium text-gray-700 mb-2">Account instellingen</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <label class="block text-xs text-gray-500">E-mail</label>
                <input v-model="account.email" class="w-full border rounded p-2 text-sm" />
              </div>
              <div>
                <label class="block text-xs text-gray-500">Telefoon (optioneel)</label>
                <input v-model="account.phone" class="w-full border rounded p-2 text-sm" />
              </div>
            </div>

            <div class="nav">
              <button @click="saveProfile" class="px-4 py-2 rounded bg-indigo-600 text-white">Opslaan</button>
              <button @click="logout" class="px-4 py-2 rounded border">Uitloggen</button>
              <button @click="deleteAccount" class="px-4 py-2 rounded border text-red-600">Verwijder account</button>
            </div>
          </section>
        </main>
      </div>
    </div>

    <div v-if="openUploader" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h3 class="font-medium mb-3">Upload foto's</h3>
        <input type="file" @change="onFileChange" multiple accept="image/*">
        <div class="mt-4 flex justify-end gap-2">
          <button @click="openUploader = false" class="px-3 py-1 rounded border">Sluiten</button>
          <button @click="savePhotos" class="px-3 py-1 rounded bg-indigo-600 text-white">Opslaan</button>
        </div>
      </div>
    </div>


    <div v-if="openPreview" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-3xl">
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-medium">Voorbeeld (zichtbaar voor publiek)</h3>
          <button @click="openPreview = false" class="text-sm text-gray-500">Sluiten</button>
        </div>
        <div class="mt-4">
          <div class="flex gap-4">
            <img :src="mainPhoto || placeholder" class="w-36 h-36 object-cover rounded">
            <div>
              <h4 class="text-xl font-semibold">{{ profile.name }}, {{ profile.age }}</h4>
              <p class="text-sm text-gray-600">{{ profile.location }} • {{ profile.job }}</p>
              <p class="mt-2 text-gray-700 whitespace-pre-line">{{ profile.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const placeholder = 'https://via.placeholder.com/600x400?text=Geen+foto'

const mainPhoto = ref('')
const photos = ref([
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60',
  'https://images.unsplash.com/photo-1545996124-1b2b9c6f6cdd?w=800&q=60'
])

const openUploader = ref(false)
const openPreview = ref(false)
const editing = ref(false)
const verified = ref(false)

const profile = reactive({
  name: 'Sanne',
  age: 29,
  location: 'Amsterdam',
  job: 'UX Designer',
  bio: 'Ik hou van reizen, goede koffie en lange wandelingen. Op zoek naar iemand die van lachen houdt.',
  interests: ['Reizen','Koken','Koffie']
})

const prefs = reactive({ ageMin: 24, ageMax: 36, distance: 50, lookingFor: 'relationship' })
const stats = reactive({ matches: 12, messages: 34, views: 287 })
const lastSeen = computed(() => 'Gisteren')

const account = reactive({ email: 'sanne@example.com', phone: '' })
const subscription = ref('Gratis')

function addPlaceholderPhoto(){
  photos.value.push(placeholder)
}

function toggleVerify(){
  verified.value = !verified.value
}

function upgrade(){
  subscription.value = 'Premium'
}

function manageSubscription(){
  alert('Open subscription management (placeholder)')
}

function viewLikes(){
  alert('Toon likes (placeholder)')
}

function boostProfile(){
  alert('Profiel boosted! (placeholder)')
}

function saveProfile(){
  editing.value = false
  alert('Profiel opgeslagen (placeholder)')
}

function logout(){
  alert('Uitgelogd (placeholder)')
}

function deleteAccount(){
  if(confirm('Weet je zeker dat je je account wilt verwijderen? Dit is onomkeerbaar.')){
    alert('Account verwijderd (placeholder)')
  }
}

let uploadQueue = []
function onFileChange(e){
  const files = Array.from(e.target.files)
  uploadQueue = files.map(f => URL.createObjectURL(f))
}

function savePhotos(){
  if(uploadQueue.length) photos.value.push(...uploadQueue)
  uploadQueue = []
  openUploader.value = false
}
</script>

<style scoped>
.dashed{ border-style: dashed; }
.container{max-width:1100px;margin:0 auto;padding:10% 20px}

.hero{background: linear-gradient(135deg, #4f46e5, #9333ea, #ec4899);padding:3rem 0}
.hero-inner{display:flex;align-items:center;justify-content:space-between;gap:2rem}
.hero-image{flex:1;display:flex;justify-content:center}


.nav button {
  margin-left: 10px;
  padding: 8px 14px;
  background-color: #ec4899;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.nav button:hover {
  background-color: #9333ea;
}

@media(max-width:800px){
  .hero-inner{flex-direction:column;text-align:center}
  .nav{display:none}
  }
</style>
