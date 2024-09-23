<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div>
    <main>
      <div class="container">

        <div class="item1">
          <img src="https://via.placeholder.com/600x400" />
          <div>
            <h3>Cidade, Pais</h3>
            <p>tempos em dias</p>
            <p>preço por noite</p>
          </div>
        </div>

        <div class="item2">
          <img src="https://via.placeholder.com/600x400" />
          <div>
            <h3>Cidade, Pais</h3>
            <p>tempos em dias</p>
            <p>preço por noite</p>
          </div>
        </div>

        <div class="item3">
          <img src="https://via.placeholder.com/600x400" />
          <div>
            <h3>Cidade, Pais</h3>
            <p>tempos em dias</p>
            <p>preço por noite</p>
          </div>
        </div>

        <div class="item4">
          <img src="https://via.placeholder.com/600x400" />
          <div>
            <h3>Cidade, Pais</h3>
            <p>tempos em dias</p>
            <p>preço por noite</p>
          </div>
        </div>
      </div>
    </main>
  </div>
  <RouterView />
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 100px;

  padding-left: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 100px;
}

.navbar {
  background-color: #676767;
  height: 80px;
  display: flex;
  align-items: center;
}


.item1,
.item2 {
  background-color: #f0f0f0;
  padding: 20px;

  grid-row: 1;
  min-height: 100px;
}

.item3,
.item4 {
  background-color: #f0f0f0;
  padding: 20px;
  grid-row: 2;
  min-height: 100px;
}

.item1,
.item2,
.item3,
.item4 {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
border-radius: 30px;
}

</style>