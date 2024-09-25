<script setup>
import { RouterView } from 'vue-router'
</script>
<template>

  <div>
    <header>
      <nav class="navbar">
        <div class="link-container">
          <a href="/" class="link">Home</a>
      <a href="alugar" class="link">Loja</a>
      <a href="/cadastro" class="link">Cadastro</a>
      <a href="/Login" class="link">Login</a>
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