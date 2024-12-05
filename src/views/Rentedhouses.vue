<template>
  <div class="rented-houses">
    <h1 class="page-title">Casas Alugadas</h1>
    <div v-if="rentedHouses.length === 0" class="no-houses">
      <p>Você ainda não alugou nenhuma casa.</p>
    </div>
    <div v-else class="houses-grid">
      <div v-for="house in rentedHouses" :key="house.id" class="house-card">
        <img :src="house.foto1" :alt="house.address" class="house-image" />
        <div class="house-info">
          <h2>{{ house.address }}</h2>
          <p class="price">R$ {{ house.price.toFixed(2) }}</p>
          <p class="description">{{ house.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomesStore } from '@/stores/homes'
import { computed } from 'vue'

const homesStore = useHomesStore()

const rentedHouses = computed(() => homesStore.homes.filter((house) => house.rented))
</script>

<style scoped>
.rented-houses {
  padding: 2rem;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.no-houses {
  text-align: center;
  font-size: 1.25rem;
  color: #718096;
}

.houses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.house-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.house-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.house-info {
  padding: 1rem;
}

.house-info h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.875rem;
  color: #718096;
}
</style>
