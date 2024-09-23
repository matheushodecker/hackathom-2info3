<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="link-container">
          <a href="/" class="link">Home</a>
      <a href="Loja" class="link">Loja</a>
      <a href="/cadastro" class="link">Cadastro</a>
      <a href="/vendas" class="link">Vendas</a>
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
}

.link-container {
  display: flex;
  margin-left: auto;
  margin-right: 100px;
}
</style>