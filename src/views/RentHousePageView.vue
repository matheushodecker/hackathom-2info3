<template>
  <div>
    <div class="voltar">
      <!-- Botão para retornar à lista de casas -->
      <router-link to="/rent">
        <img src="../assets/img/icons8-voltar-24.png" alt="voltar" />
      </router-link>
    </div>

    <div v-if="house">
      <div class="gridall">
        <div class="grid">
          <!-- Imagem principal da casa -->
          <div class="big-square">
            <img :src="house.foto1" alt="Imagem principal" />
          </div>
          <!-- Imagens adicionais -->
          <div
            class="small-square"
            v-for="(foto, index) in [house.foto2, house.foto3, house.foto4, house.foto5]"
            :key="index"
            v-if="foto"
          >
            <img :src="foto" alt="Imagem adicional" />
          </div>
        </div>
      </div>

      <div class="prevent">
        <div class="position">
          <div class="details">
            <h2>{{ house.address }}</h2>
            <div class="host">
              <img src="" alt="Foto do anfitrião" />
              <span>Anfitriã(ão): {{ house.hostName || 'Desconhecido' }}</span>
            </div>
            <div class="booking">
              <h3>Preço: R$ {{ house.price }}</h3>
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
                  <option v-for="n in 10" :key="n" :value="n">
                    {{ n }} hóspede{{ n > 1 ? 's' : '' }}
                  </option>
                </select>
              </div>
              <button @click="bookHouse">Reservar</button>
              <div v-if="message" class="message">{{ message }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- Mensagem caso a casa não seja encontrada -->
      <p>Casa não encontrada.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { usePreHomesStore } from '@/stores/preHomes'

// Obtemos o parâmetro da rota
const route = useRoute()
const preHomesStore = usePreHomesStore()

// Computa a casa baseada no ID fornecido pela rota
const house = computed(() => {
  const id = parseInt(route.params.id)
  return preHomesStore.preHomes.find((home) => home.id === id)
})

// Estado para gerenciamento de reservas
const checkInDate = ref('')
const checkOutDate = ref('')
const numGuests = ref(1)
const message = ref('')

// Função para reservar a casa
const bookHouse = () => {
  if (!checkInDate.value || !checkOutDate.value) {
    message.value = 'Por favor, selecione as datas de check-in e check-out.'
    return
  }
  message.value = 'Sua reserva foi realizada com sucesso!'
}
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
  grid-column: 1 / 3;
  grid-row: 1 / 3;
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
