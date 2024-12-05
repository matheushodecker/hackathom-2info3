<script setup>

import Rodape from './components/Rodape.vue'
import NavBar from './components/NavBar.vue'


</script>

<template>
  <div>
    <header>
     <NavBar />
    </header>

    <RouterView />
    <footer>
      <Rodape />
    </footer>
  </div>
</template>

<style scoped>

</style>
