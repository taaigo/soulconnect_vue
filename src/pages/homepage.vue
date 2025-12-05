<script setup lang="ts">
const bg = "/love.png";
</script>

<template>
    <div class="side-card">
      <h2>Titel</h2>
      <p>Ben jij klaar om iemand te ontmoeten die écht bij je past? Bij SoulConnect draait daten niet om willekeurige swipes, maar om échte verbinding. Geen oppervlakkige chaos, geen eindeloos zoeken—maar matches die écht aansluiten bij jouw persoonlijkheid, interesses en levensstijl.

Met slimme matching, veilige profielen en een warme community creëren we een plek waar je jezelf kunt zijn.
Of je nu op zoek bent naar vriendschap, een serieuze relatie of die ene speciale klik—jouw soulmate is misschien maar één connectie verwijderd.
</p>
    <button>Knopje</button>
</div>
</template>

<style scoped>
.side-card {
  position: fixed;    
  left: 20px;            /* 20px vanaf de linkerkant */
  top: 20%;            /* 20px vanaf de bovenkant */
  width: 25%;          /* Breedte van het kaartje */
  
  background-color: rgb(254, 127, 163) ;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
   z-index: 999;
}

</style>
