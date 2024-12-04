<template>
  <div>
    <main>
      <div class="titulo">
        <H2 class="txt-inicio">recomendacoes de Casa</H2>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-for="home in homes" :key="home.id">
          <div class="card">
            <a href="/rent">
              <img :src="home.imageUrl" :alt="home.address" class="card-img" />
            </a>
            <div class="info">
              <h3>{{ home.address.split(',')[0] }}</h3>
              <p>{{ home.address.split(',').slice(1).join(',').trim() }}</p>
              <p>Tempos em dias</p>
              <p>Preço por noite</p>
              <p>4,8</p>
              <p>R$ {{ (home.price / 30).toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <RouterView />
  </div>
</template>

<script>
import { useHomesStore } from '@/stores/homes';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const homesStore = useHomesStore();
    const homes = ref([]);

    onMounted(() => {
      homes.value = homesStore.getHomes();
    });

    return {
      homes
    };
  }
}
</script>

<style scoped>
.titulo {
  padding-top: 70px;
}
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

/* Container do grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  row-gap: 85px;
  padding: 20px;
  padding-top: 20px;
}

/* Estilos para os itens do grid */
.grid-item {
  display: flex;
  justify-content: center;
  row-gap: 200px
}

/* Card */

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
  color: #fff;
}
</style>

