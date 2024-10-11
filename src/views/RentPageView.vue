<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div>
    <main>
      <div class="titulo">
        <h1>TEMPORADA</h1>
      </div>
      <div class="container">
        <div class="item1">
          <a href="/rent"> <img src="../assets/img/image copy.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item2">
          <a href="/rent"><img src="../assets/img/image copy.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item3">
          <a href="/rent"><img src="../assets/img/image copy.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item4">
          <a href="/rent"><img src="../assets/img/image copy 3.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item5">
          <a href="/rent"><img src="../assets/img/image copy 3.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item6">
          <a href="/rent"><img src="../assets/img/image copy 3.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item7">
          <a href="/rent"><img src=" ../assets/img/image copy 2.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item8">
          <a href="/rent"> <img src=" ../assets/img/image copy 2.png" /></a>

          <div>
            <p>Cidade, Pais</p>
            <p>tempos em dias</p>
            <p>preço por noite</p>
            <p>4,8</p>
            <p>R$ 1,200</p>
          </div>
        </div>

        <div class="item9">
          <a href="/rent"><img src=" ../assets/img/image copy 2.png" /></a>

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
  <footer>
    <div>
      <div class="grid">
        <div class="item">
          <h3>Clientes</h3>
          <p class="espaco">
            Registre-se e receba todas as novidades, promoções e informações sobre os nossos
            serviços.
          </p>
          <ul class="social-media">
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </li>
          </ul>
          <p class="espaco">
            Copyright © 2023 Padaria Grão de Ouro. Todos os direitos reservados.
          </p>
        </div>
        <div class="item">
          <h3>Recursos</h3>
          <ul>
            <li><a href="#">Novidades</a></li>
            <li><a href="#">Promoções</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div class="item">
          <h3>Fale conosco</h3>
          <p>Digite o seu endereço de email</p>
          <input class="email" type="email" placeholder="exemplo@email.com" />
          <button class="btn">Enviar</button>
        </div>
      </div>
    </div>
  </footer>
  <RouterView />
</template>

<style>
.main {
  display: inline;
}
p {
  line-height: 10px;
  grid-row: 3;
  margin-right: 20px;
}

h1 {
  color: #000000;
  grid-column: 1/3;
  grid-row: 1;
  text-align: left;
}

.inicio {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 0.1fr 5fr 3fr;
  line-height: 10px;
  width: 100%;
  height: 600px;
}
.titulo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding-left: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 100px;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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

  grid-row: 1;
  min-height: 100px;
}

.item4,
.item5,
.item6 {
  background-color: #f0f0f0;
  padding: 20px;
  grid-row: 2;
  min-height: 100px;
}
.item7,
.item8,
.item9 {
  background-color: #f0f0f0;
  padding: 20px;

  grid-row: 3;
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
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform-origin: center;
}
img:hover {
  transform: scale(1.1);
}
footer {
  background-color: #676767;
  color: #fff;
  padding: 40px 0;
}

footer .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

footer h3 {
  margin-top: 0;
  margin-bottom: 20px;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer li {
  margin-bottom: 10px;
}

footer a {
  text-decoration: none;
  color: #fff;
}

.social-media li {
  display: inline-block;
  margin-right: 10px;
}

.social-media a {
  font-size: 1.5em;
  color: #fff;
}

.social-media a:hover {
  line-height: 10px;
  color: #ffc107;
}

input[type='email'] {
  width: 100%;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  border-color: #000000;
  margin-bottom: 10px;
}

.item {
  text-align: center;
  padding: 20px;
}
.espaco {
  line-height: 20px;
}
</style>
