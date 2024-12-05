<template>
  <div>
    <main>
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
import { usePreHomesStore } from '@/stores/preHomes';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const preHomesStore = usePreHomesStore();
    const preHomes = ref([]);

    onMounted(() => {
      preHomes.value = preHomesStore.preHomes;
    });

    return {
      preHomes,
    };
  },
};
</script>


<style scoped>
/* Título */
.titulo {
  padding-top: 70px;
  text-align: center;
}

.txt-inicio {
  color: #fff;
  margin: 30px auto;
  padding: 20px;
  font-size: 24pt;
  font-family: 'Libre Bodoni', serif;
  background: linear-gradient(90deg, #355c7d, #6c5b7b, #c06c84);
  border-radius: 25px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  width: fit-content;
}

/* Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px;
  background: linear-gradient(180deg, #f7f9fc, #eef2f3);
  border-radius: 20px;
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
  background: #fff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
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
  padding: 25px 20px;
  background: linear-gradient(180deg, rgba(53, 92, 125, 0.9), rgba(192, 108, 132, 0.9));
  color: #fff;
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
  background: linear-gradient(180deg, rgba(53, 92, 125, 1), rgba(192, 108, 132, 1));
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