<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div>
    <main>
      
      <div class="container">
        <div class="titulo"><h1>temporada</h1></div>
        <div class="item1">
          <img src="../assets/img/image copy.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item2">
          <img src="../assets/img/image copy.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item3">
          <img src="../assets/img/image copy.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item4">
          <img src="../assets/img/image copy 3.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item5">
          <img src="../assets/img/image copy 3.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item6">
          <img src="../assets/img/image copy 3.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item7">
          <img src=" ../assets/img/image copy 2.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item8">
          <img src=" ../assets/img/image copy 2.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item9">
          <img src=" ../assets/img/image copy 2.png" />
          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>
      </div>
    </main>
  </div>
  <RouterView />
</template>

<style>
p{
   line-height: 10px;
   grid-row: 3;
}

h1 {
  color: #000000;
  grid-column: 1/3;
  grid-row: 1;
  text-align: left;
}
.black {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 0.25fr);
  background-color: rgb(24, 24, 24);
  border: 100px solid rgb(24, 24, 24);
  opacity: 0.7;
  grid-row: 2;
  grid-column: 2;
}
.inicio {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 0.1fr 5fr 3fr;
  background-image: url(../assets/img/image.png);
  background-size: cover;
  position: relative;
  width: 100%;
  height: 600px;
}
.titulo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
 

 padding-left: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 100px;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 100px;

  padding-left: 100px;
  padding-top: 0px;
  padding-bottom: 100px;

  max-height: 10000px;
}

.navbar {
  background-color: #676767;
  height: 80px;
  display: flex;
  align-items: center;
}

.item1,
.item2,
.item3 {
  background-color: #f0f0f0;
  padding: 20px;

  grid-row: 2;
  min-height: 100px;
}

.item4,
.item5,
.item6 {
  background-color: #f0f0f0;
  padding: 20px;
  grid-row: 3;
  min-height: 100px;
}
.item7,
.item8,
.item9 {
  background-color: #f0f0f0;
  padding: 20px;

  grid-row: 4;
  min-height: 100px;
}

.item1,
.item2,
.item3,
.item4,
.item5,
.item6,
.item7,
.item8,
.item9 {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-radius: 30px;
  text-align: left;
  background-color: transparent;
}
img {
  width: 90%;
  height: 102%;
  align-items: center;
}
</style>
