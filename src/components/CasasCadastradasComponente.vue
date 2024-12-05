<template>
  <div class="homes-container">
    <div class="user-homes">
      <h3>Casas Cadastradas</h3>
      <div class="home-list" v-if="homes && homes.length > 0">
        <div class="home-item" v-for="home in homes" :key="home.id">
          <div class="home-images">
            <img v-if="home.foto1" :src="home.foto1" alt="Foto 1" class="home-image" />
            <img v-if="home.foto2" :src="home.foto2" alt="Foto 2" class="home-image" />
            <img v-if="home.foto3" :src="home.foto3" alt="Foto 3" class="home-image" />
            <img v-if="home.foto4" :src="home.foto4" alt="Foto 4" class="home-image" />
            <img v-if="home.foto5" :src="home.foto5" alt="Foto 5" class="home-image" />
          </div>
          <div class="home-info">
            <p><strong>Endereço:</strong> {{ home.address }}</p>
            <p><strong>Preço:</strong> R$ {{ home.price.toFixed(2) }}</p>
            <p><strong>Descrição:</strong> {{ home.description }}</p>
            <!-- Botão para excluir a casa -->
          </div>
        </div>
      </div>
      <p v-else>Você ainda não cadastrou nenhuma casa.</p>

      <!-- Formulário de adição de casa -->
      <div class="add-home-form" v-if="isAddingNewHome">
        <h3>Cadastrar Nova Casa</h3>
        <form @submit.prevent="handleAddHome">
          <p><strong>Endereço:</strong><input v-model="newHome.address" required /></p>
          <p>
            <strong>Preço:</strong><input v-model.number="newHome.price" type="number" required />
          </p>
          <p>
            <strong>Descrição:</strong><textarea v-model="newHome.description" required></textarea>
          </p>
          <p><strong>Imagens:</strong></p>
          <input v-model="newHome.foto1" placeholder="URL da Foto 1" />
          <input v-model="newHome.foto2" placeholder="URL da Foto 2 (opcional)" />
          <input v-model="newHome.foto3" placeholder="URL da Foto 3 (opcional)" />
          <input v-model="newHome.foto4" placeholder="URL da Foto 4 (opcional)" />
          <input v-model="newHome.foto5" placeholder="URL da Foto 5 (opcional)" />
          <br />
          <button type="submit" class="btn-submit">Cadastrar Casa</button>
        </form>
      </div>

      <div class="add-home-button">
        <button @click="toggleAddHomeForm" class="btn-toggle">
          {{ isAddingNewHome ? 'Cancelar' : 'Adicionar Nova Casa' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useHomesStore } from '@/stores/homes'

export default {
  setup() {
    const homesStore = useHomesStore()
    const homes = ref(homesStore.homes) // Garantir que a lista esteja sendo reativa
    const isAddingNewHome = ref(false)
    const newHome = ref({
      address: '',
      price: 0,
      description: '',
      foto1: '',
      foto2: '',
      foto3: '',
      foto4: '',
      foto5: ''
    })

    // Log para verificar se as casas estão sendo carregadas corretamente
    console.log('Casas carregadas:', homes.value)

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
      )
      newHome.value = {
        address: '',
        price: 0,
        description: '',
        foto1: '',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      }
      isAddingNewHome.value = false
    }

    const handleDeleteHome = (homeId) => {
      const confirmDelete = confirm('Tem certeza que deseja excluir esta casa?')
      if (confirmDelete) {
        homesStore.deleteHome(homeId)
      }
    }

    const toggleAddHomeForm = () => {
      isAddingNewHome.value = !isAddingNewHome.value
    }

    return {
      homes,
      isAddingNewHome,
      newHome,
      handleAddHome,
      handleDeleteHome,
      toggleAddHomeForm
    }
  }
}
</script>

<style scoped>
/* Estilos de contêiner e lista de casas */
.home-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.home-item {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.home-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.home-images {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-bottom: 2px solid #f0f0f0;
}

.home-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-info {
  padding: 15px;
  color: #333;
}

.home-info p {
  font-size: 1rem;
  margin: 8px 0;
  line-height: 1.6;
}

.home-info p strong {
  color: #007bff;
}

.btn-submit,
.btn-toggle {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
}

.btn-submit:hover,
.btn-toggle:hover {
  background-color: #0056b3;
}

.add-home-button {
  text-align: center;
  margin-top: 20px;
}

.add-home-form input,
.add-home-form textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.add-home-form input:focus,
.add-home-form textarea:focus {
  border-color: #007bff;
  outline: none;
}

.add-home-form textarea {
  height: 120px;
  resize: vertical;
}

.add-home-form button {
  width: 100%;
  padding: 14px;
  border: none;
  background-color: #28a745;
  color: white;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
}

.add-home-form button:hover {
  background-color: #218838;
}

p {
  font-size: 1rem;
  color: #666;
  text-align: center;
}

@media (max-width: 768px) {
  .home-item {
    max-width: 100%;
  }

  .add-home-form input,
  .add-home-form textarea {
    font-size: 0.95rem;
  }

  .add-home-form button {
    font-size: 1rem;
  }
}
</style>
