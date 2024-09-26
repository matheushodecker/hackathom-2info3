<template>
    <div class="voltar">
      <a href="/alugar"> <img src="../assets/img/icons8-voltar-24.png" alt="voltar" /></a>
    </div>
  
    <div class="gridall">
      <div class="grid">
        <div class="big-square">foto</div>
        <div class="small-square">foto</div>
        <div class="small-square">foto</div>
        <div class="small-square">foto</div>
        <div class="small-square">foto</div>
      </div>
    </div>
  
    <RouterView />
    
    <div class="prevent">
      <div class="position">
        <div class="details">
          <h2>{{ listing.name }}, {{ listing.city }}, {{ listing.country }}</h2>
          <div class="host">
            <img src="" alt="Foto do anfitrião" />
            <span>Anfitriã(ão): {{ listing.hostName }}</span>
          </div>
          <div class="booking">
            <h3>Preço por noite</h3>
            <div class="dates">
              <div class="check-in">
                <label for="check-in">CHECK-IN</label>
                <input type="date" id="check-in" v-model="checkInDate" />
              </div>
              <div class="check-out">
                <label for="check-out">CHECK-OUT</label>
                <input type="date" id="check-out" v-model="checkOutDate" />
              </div>
            </div>
            <div class="guests">
              <label for="guests">HÓSPEDES</label>
              <select id="guests" v-model.number="numGuests">
                <option value="1">1 hóspede</option>
                <option value="2">2 hóspedes</option>
                <option value="3">3 hóspedes</option>
                <option value="4">4 hóspedes</option>
              </select>
            </div>
            <button @click="bookListing">Reservar</button>
            <div v-if="message" class="message">{{ message }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        listing: {
          name: 'Nome da casa',
          city: 'Cidade',
          country: 'País',
          hostName: 'Nome anfitrião',
        },
        checkInDate: '',
        checkOutDate: '',
        numGuests: 1,
        message: '' // Adicionando a mensagem aqui
      }
    },
    methods: {
      bookListing() {
        // Lógica para reservar a acomodação
        console.log('Reservando acomodação...');
        this.message = 'Sua reserva foi realizada com sucesso!'; // Atualiza a mensagem
      }
    }
  }
  </script>
  
  <script setup>
  import { RouterView } from 'vue-router'
  </script>
<style scoped>
.voltar {
  max-width: 24px;
  max-height: 24px;
  justify-content: left;
  padding-top: 30px;
  padding-left: 40px;
}
.gridall {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  grid-template-rows: repeat(2, 200px);
  gap: 5px;
    
}
.grid {
  grid-column: 2/4;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, 200px);
  gap: 5px;
  justify-content: center;
  padding-top: 100px;
}

.big-square {
  grid-column: 1 / 3; /* Colunas 1 e 2 */
  grid-row: 1 / 3; /* Linhas 1 e 2 */
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.small-square {
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.prevent {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0px;
  border: 0px;
  margin: 0px;
}
.position {
  grid-column: 7;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  border: 50px solid white;
  margin-right: 100px;
  margin-top: -100px;
  box-shadow: 0px 0px 10px 1px black;
}
.listing {
  display: flex;
  gap: 20px;
  font-family: sans-serif;
}

.images {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.main-image {
  width: 100%;
  padding-bottom: 66.66%; /* Mantém a proporção 3:2 */
  position: relative;
  overflow: hidden;
}

.main-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 10px;
}

.thumbnails img {
  width: calc(25% - 7.5px); /* 4 imagens por linha com espaçamento */
  padding-bottom: calc(25% - 7.5px);
  object-fit: cover;
}

.details {
  flex: 1;
}

.host {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.host img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.booking {
  display: grid;
  margin-top: 20px;
}

.dates {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.guests {
  margin-bottom: 10px;
}

button {
  background-color: #e53935;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
