<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="link-container">
          <router-link to="/" class="link">Home</router-link>
          <router-link to="alugar" class="link">Loja</router-link>



      
            <router-link to="/cadastro" class="link">Home</router-link>
      <router-link to="/Login" class="link">Sobre</router-link>
      <router-link to="/Profile" class="link">perfil</router-link>


        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
<style>
.navbar {
  background-color: #676767;
  height: 80px;
  display: flex;
  align-items: center;
}

#app {
  text-align: center;
}

.link {
  color: #fff;
  padding: 10px;
  text-decoration: none;
  transition: 0.3s;
}

.link:hover {
  color: black;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 0px;
  padding-right: 20px;
}

.link-container {
  display: flex;
  margin-left: auto;
  margin-right: 100px;
}
</style>
