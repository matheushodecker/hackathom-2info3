<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue' // Importa os componentes do Swiper
import 'swiper/swiper-bundle.css' // Importa os estilos do Swiper
</script>

<template>
  <section id="img"></section>
  <H2 class="txt-inicio">Adicionadas recentemente</H2>
  <Swiper
    :slides-per-view="5"
    :space-between="70"
    :loop="false"
    longSwipes
    grabCursor
    pagination
    style="
      border-right: 10px solid transparent;
      border-left: 15px solid transparent;
      border-top: 10px solid transparent;
      border-bottom: 20px solid transparent;
      white-space: nowrap;
    "
  >
    <!-- Slides -->
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img src="\src\assets\img\meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  <H2 class="txt-inicio">Adicionadas recentemente</H2>
  <Swiper
    :slides-per-view="5"
    :space-between="70"
    :loop="false"
    longSwipes
    grabCursor
    pagination
    style="
      border-right: 10px solid transparent;
      border-left: 15px solid transparent;
      border-top: 10px solid transparent;
      border-bottom: 0 solid transparent;
      white-space: nowrap;
    "
  >
    <!-- Slides -->
    <SwiperSlide class="swiper-slide">
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="card">
        <a href="/rent">
          <img
            src="\src\assets\img\casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
        /></a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.txt-inicio {
  color: black;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 60px;
  padding: 5px;
  font-size: 20pt;
  font-family: 'Libre Bodoni', serif;
  background-color: silver;
  border-radius: 18px;
  font-weight: bold;
  width: 24%;
  text-align: center;
}

/* Adicione um pouco de estilo aos slides */
.column-img {
  height: 300px;
  width: 300px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.swiper-button-next,
.swiper-button-prev {
  display: none;
}

#img {
  background-image: url(/src/assets/img/casa-de-luxo-7-1.jpg);
  background-size: cover;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  height: 90vh;
}

.column {
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 20px;
}

.column-img {
  height: 300px;
  width: 300px;
  margin-bottom: 50px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.swiper-slide {
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform-origin: center;
  padding-top: 50px;
}

.swiper-slide:hover {
  transform: scale(1.1);
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6.9%;
}

.card {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: #fff;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  filter: blur(2px);
}

.info {
  /* Esconde fora da tela */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  text-align: center;
  border-radius: 15px;
  width: 87%;
}

.card:hover .info {
  transform: translateY(0);
  /* Exibe ao passar o mouse */
  filter: blur(0px);
}

.info:hover {
  filter: blur(0px);
}

.info h3 {
  margin: 0;
  font-size: 20px;
}

.info p {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.4;
}
.swiper-slide {
  overflow: visible;
  padding: 15px;
}
</style>
