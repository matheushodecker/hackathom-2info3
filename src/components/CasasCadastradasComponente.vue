<template>
    <div class="homes-container">
      <div class="user-homes">
        <h3>Casas Cadastradas</h3>
        <div class="home-list" v-if="homes.length">
          <div class="home-item" v-for="home in homes" :key="home.id">
            <div class="home-images">
              <img 
                v-if="home.foto1" 
                :src="home.foto1" 
                alt="Foto 1" 
                class="home-image" 
              />
              <img 
                v-if="home.foto2" 
                :src="home.foto2" 
                alt="Foto 2" 
                class="home-image" 
              />
              <img 
                v-if="home.foto3" 
                :src="home.foto3" 
                alt="Foto 3" 
                class="home-image" 
              />
              <img 
                v-if="home.foto4" 
                :src="home.foto4" 
                alt="Foto 4" 
                class="home-image" 
              />
              <img 
                v-if="home.foto5" 
                :src="home.foto5" 
                alt="Foto 5" 
                class="home-image" 
              />
            </div>
            <div class="home-info">
              <p><strong>Endereço:</strong> {{ home.address }}</p>
              <p><strong>Preço:</strong> R$ {{ home.price.toFixed(2) }}</p>
              <p><strong>Descrição:</strong> {{ home.description }}</p>
            </div>
          </div>
        </div>
        <p v-else>Você ainda não cadastrou nenhuma casa.</p>
  
        <div class="add-home-form" v-if="isAddingNewHome">
          <h3>Cadastrar Nova Casa</h3>
          <form @submit.prevent="handleAddHome">
            <p><strong>Endereço:</strong><input v-model="newHome.address" required /></p>
            <p><strong>Preço:</strong><input v-model.number="newHome.price" type="number" required /></p>
            <p><strong>Descrição:</strong><textarea v-model="newHome.description" required></textarea></p>
            <p><strong>Imagens:</strong></p>
            <input v-model="newHome.foto1" placeholder="URL da Foto 1" />
            <input v-model="newHome.foto2" placeholder="URL da Foto 2 (opcional)" />
            <input v-model="newHome.foto3" placeholder="URL da Foto 3 (opcional)" />
            <input v-model="newHome.foto4" placeholder="URL da Foto 4 (opcional)" />
            <input v-model="newHome.foto5" placeholder="URL da Foto 5 (opcional)" />
            <br />
            <button type="submit">Cadastrar Casa</button>
          </form>
        </div>
  
        <div class="add-home-button">
          <button @click="toggleAddHomeForm">{{ isAddingNewHome ? 'Cancelar' : 'Adicionar Nova Casa' }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useHomesStore } from '@/stores/homes';
  
  export default {
    setup() {
      const homesStore = useHomesStore();
      const homes = homesStore.homes;
      const isAddingNewHome = ref(false);
      const newHome = ref({
        address: '',
        price: 0,
        description: '',
        foto1: '',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      });
  
      const handleAddHome = () => {
        homesStore.addHome(
          newHome.value.address,
          newHome.value.price,
          newHome.value.description,
          newHome.value.foto1,
          newHome.value.foto2,
          newHome.value.foto3,
          newHome.value.foto4,
          newHome.value.foto5
        );
        newHome.value = {
          address: '',
          price: 0,
          description: '',
          foto1: '',
          foto2: '',
          foto3: '',
          foto4: '',
          foto5: ''
        };
        isAddingNewHome.value = false;
      };
  
      const toggleAddHomeForm = () => {
        isAddingNewHome.value = !isAddingNewHome.value;
      };
  
      return {
        homes,
        isAddingNewHome,
        newHome,
        handleAddHome,
        toggleAddHomeForm
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos atualizados */
  .home-images {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .home-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  </style>
  
  