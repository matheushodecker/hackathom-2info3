<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue' // Importa os componentes do Swiper
import 'swiper/swiper-bundle.css' // Importa os estilos do Swiper

import { computed } from 'vue'
import { useHomesStore } from '@/stores/homes' // Importa a store de casas

const homesStore = useHomesStore()

// Computa as casas adicionadas recentemente
const recentHomes = computed(() => homesStore.homes.slice(-9)) // Exibe no máximo 9 casas recentes
</script>

<template>
  <div class="background">
    <section id="img"></section>
    <div>
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
        <SwiperSlide v-for="home in recentHomes" :key="home.id">
          <div class="card card-recent">
            <router-link :to="{ path: `/rent/${home.id}` }">
              <img :src="home.foto1" :alt="home.address" class="card-img" />
            </router-link>
            <div class="info">
              <h3>{{ home.address.split(',')[0] }}</h3>
              <p>Preço: R$ {{ home.price.toLocaleString() }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

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
      <SwiperSlide v-for="n in 9" :key="n">
        <div class="card card-featured">
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
  </div>
</template>

<style scoped>
.background {
  background-color: #000;
}
.txt-inicio {
  color: #000; /* Dourado */
  margin: 30px auto;
  padding: 20px;
  font-size: 24pt;
  font-family: 'Libre Bodoni', serif;
  background: #f2c14e; /* Fundo preto */
  border-radius: 25px;
  font-weight: bold;
  text-align: center;
  width: fit-content;
}

#img {
  background-image: url(/src/assets/img/casa-de-luxo-7-1.jpg);
  background-size: cover;
  background-position: center;
  height: 95vh;
  position: relative;
}

.card-recent,
.card-featured {
  position: relative;
  width: 320px;
  height: 380px;
  overflow: hidden;
  border-radius: 15px;
  background: #000;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  border: 3px solid #f2c14e;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-recent:hover,
.card-featured:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 4px solid #f2c14e;
}

.card-img:hover {
  transform: scale(1.05);
}

.info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #f2c14e;
  padding: 20px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  }

.card-recent:hover .info,
.card-featured:hover .info {
  transform: translateY(0);
}

.info h3 {
  font-size: 22px;
  font-weight: bold;
  color: #f2c14e;
}

.info p {
  font-size: 18px;
  line-height: 1.5;
}
.info p,h3{
  margin-right: 40px;
}

.custom-swiper {
  padding: 40px 0;
  background: #000;
  border-radius: 0;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.6);
}

.swiper-slide {
  overflow: visible;
  padding: 20px;
  transition: transform 0.3s ease;
}

.swiper-slide:hover {
  transform: scale(1.05);
}

.swiper-pagination-bullet {
  background: #9b1b30;
}

.swiper-pagination-bullet-active {
  background: #f2c14e;
}
</style>
