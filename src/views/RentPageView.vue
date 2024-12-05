<template>
  <div>
    <main>
      <div class="titulo">
        <h2 class="txt-inicio">Recomendações de Casas Pré-Selecionadas</h2>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-for="home in preHomes" :key="home.id">
          <div v-if="home.foto1 && home.address" class="card">
            <router-link :to="{ path: '/rent' }">
              <img :src="home.foto1" :alt="home.address" class="card-img" />
              <div class="info">
                <h3>{{ home.address.split(',')[0] }}</h3>
                <p>{{ home.address.split(',').slice(1).join(',').trim() }}</p>
                <p>👤 4 hóspedes</p>
                <p>⭐ 4,8</p>
                <p>Preço por noite</p>
                <p>R$ {{ (home.price / 30).toFixed(2) }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <RouterView />
  </div>
</template>

<script>
import { usePreHomesStore } from '@/stores/preHomes'; // Importa a nova store
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const preHomesStore = usePreHomesStore(); // Acessa a nova store do Pinia
    const preHomes = ref([]); // Estado local para as casas pré-selecionadas

    onMounted(() => {
      preHomes.value = preHomesStore.preHomes; // Obtém as casas pré-selecionadas da store
    });

    return {
      preHomes,
    };
  },
};
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
  row-gap: 200px;
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
