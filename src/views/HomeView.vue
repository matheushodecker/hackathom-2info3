<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'; // Importa os componentes do Swiper
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper
</script>

<template>
  <section id="img"></section>
  <h2 class="txt-inicio">Adicionadas recentemente</h2>
  <Swiper
    :slides-per-view="5"
    :space-between="50"
    :loop="false"
    longSwipes
    grabCursor
    pagination
    class="custom-swiper"
  >
    <!-- Slides -->
    <SwiperSlide v-for="n in 9" :key="n">
      <div class="card">
        <a href="/rent">
          <img src="/src/assets/img/meufuturoapt1.png" alt="Imagem do Card" class="card-img" />
        </a>
        <div class="info">
          <h3>Apartamento de Luxo</h3>
          <p>Preço: $1.200.000</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <h2 class="txt-inicio">Casas em destaque</h2>
  <Swiper
    :slides-per-view="5"
    :space-between="50"
    :loop="false"
    longSwipes
    grabCursor
    pagination
    class="custom-swiper"
  >
    <!-- Slides -->
    <SwiperSlide v-for="n in 9" :key="n">
      <div class="card">
        <a href="/rent">
          <img
            src="/src/assets/img/casa-luxo-Casa-Americana-sp-1-Olaa-Arquitetos-1024x683.jpg"
            alt="Imagem do Card"
            class="card-img"
          />
        </a>
        <div class="info">
          <h3>Casa de luxo</h3>
          <p>Preço: $120.000</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
/* Texto de introdução estilizado */
.txt-inicio {
  color: #fff;
  margin: 30px 0;
  padding: 15px;
  font-size: 22pt;
  font-family: 'Libre Bodoni', serif;
  background: linear-gradient(90deg, #3a6186, #89253e);
  border-radius: 30px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Fundo da seção de imagem */
#img {
  background-image: url(/src/assets/img/casa-de-luxo-7-1.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 30px 60px inset;
  height: 90vh;
  position: relative;
}

/* Estilizando os cartões */
.card {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card-img:hover {
  transform: scale(1.1);
}

.info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 15px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.card:hover .info {
  transform: translateY(0);
}

.info h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.info p {
  margin: 10px 0 0;
  font-size: 16px;
  line-height: 1.4;
}

/* Estilo do Swiper */
.custom-swiper {
  padding: 20px 0;
}

.swiper-slide {
  overflow: visible;
  padding: 15px;
  transition: transform 0.4s ease;
}

.swiper-slide:hover {
  transform: scale(1.05);
}

.swiper-pagination-bullet {
  background: #89253e;
}

.swiper-pagination-bullet-active {
  background: #3a6186;
}
</style>
