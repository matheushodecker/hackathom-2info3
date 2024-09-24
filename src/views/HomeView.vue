<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div>
    <main>
      <div class="inicio">
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
        <div class="black"><h1>next home</h1><p class="p_black">Casas de de alto padrão com interiores de luxo</p></div>
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
        <div class="nada">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi quas porro esse commodi voluptas nihil sapiente accusantium atque, sequi cumque. Ut, tempore quos repellendus iste atque corporis reprehenderit eveniet.</div>
      </div>
      <div class="container">
        <div class="item1">
          <img src="../assets/img/image copy.png" />
          <div>
            <h3>Cidade, Pais</h3>
            <p>tempos em dias</p>
            <p>preço por noite</p>
          </div>
        </div>

        <div class="item2">
          <img src="../assets/img/image copy 2.png" />
          <div>
            <h3>Cidade, Pais</h3>
            <p>tempos em dias</p>
            <p>preço por noite</p>
          </div>
        </div>

        <div class="item3">
          <img src="../assets/img/image copy 3.png" />
          <div>
            <h3>Cidade, Pais</h3>
            <p>tempos em dias</p>
            <p>preço por noite</p>
          </div>
        </div>

        <div class="item4">
          <img src="../assets/img/image copy 3.png" />
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
.p_black{
  color: #f0f0f0;
  grid-column: 1/3;
  grid-row: 2;
  text-align: left;
}
.nada{
  color: transparent;
  text-align: left;
}
h1{
  color: #f0f0f0;
  grid-column: 1/3;
  grid-row: 1;
  text-align: left;
}
.black {
  display: grid;
  grid-template-columns:repeat(3, 1fr) ;
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
  text-align: left;
}
img {
  width: 100%;
  height: 92%;
  align-items: center;
}
</style>
