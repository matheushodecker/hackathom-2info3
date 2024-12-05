<template>
  <div>
    <main class="background">
      <div class="titulo">
        <h2 class="txt-inicio">Recomendações de Casas Pré-Selecionadas</h2>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-for="home in preHomes" :key="home.id">
          <div v-if="home.foto1 && home.address" class="card">
            <!-- Atualizado o link para redirecionar para a rota dinâmica -->
            <router-link :to="{ path: `/rent/${home.id}` }" class="router-link">
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
import { usePreHomesStore } from '@/stores/preHomes'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const preHomesStore = usePreHomesStore()
    const preHomes = ref([])

    onMounted(() => {
      preHomes.value = preHomesStore.preHomes
    })

    return {
      preHomes
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #000;
}
/* Título */
.titulo {
  padding-top: 70px;
  text-align: center;
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

/* Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px;
  background: #000; /* Fundo preto */
  border-radius: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.grid-item {
  display: flex;
  justify-content: center;
}

/* Card */
.card {
  position: relative;
  width: 340px;
  height: 580px;
  overflow: hidden;
  border-radius: 20px;
  background: #000; /* Fundo preto */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
  border: 3px solid #f2c14e; /* Dourado */
}

.card:hover {
  transform: scale(1.08);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.card-img {
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.4s ease;
}

.card-img:hover {
  transform: scale(1.12);
}

.info {
  background: rgba(0, 0, 0, 0.8); /* Fundo semitransparente */
  color: #f2c14e; /* Dourado */
  text-align: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.4s ease;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.card:hover .info {
  background: rgba(0, 0, 0, 1); /* Fundo preto ao passar o mouse */
}

.info h3 {
  margin: 0;
  font-size: 22px;
  font-weight: bold;
}

.info p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
}

.router-link {
  text-decoration: none;
}
</style>
