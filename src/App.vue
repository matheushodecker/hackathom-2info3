<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'

const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.user !== null)
const user = computed(() => authStore.user) // Obtém os dados do usuário
</script>

<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="link-container">
          <router-link to="/" class="link">Home</router-link>
          <router-link to="alugar" class="link">Loja</router-link>

          <!-- Mostrar o link de cadastro e login se o usuário não estiver logado -->
          <router-link v-if="!isLoggedIn" to="/cadastro" class="link">Cadastro</router-link>
          <router-link v-if="!isLoggedIn" to="/Login" class="link">Login</router-link>

          <!-- Mostrar a foto de perfil como um link para a página de perfil -->
          <router-link v-if="isLoggedIn" to="/Profile" class="profile-link">
            <img
              v-if="user?.profilePicture"
              :src="user.profilePicture"
              alt="Foto de Perfil"
              class="profile-image"
            />
            <span v-else class="profile-text">Perfil</span>
          </router-link>
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style>
.navbar {
  background-color: #676767;
  height: 80px;
  display: flex;
  align-items: center;
}

.link {
  color: #fff;
  padding: 10px;
  text-decoration: none;
  transition: 0.3s;
}

.link:hover {
  color: black;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 0px;
  padding-right: 20px;
}

.link-container {
  display: flex;
  margin-left: auto;
  margin-right: 100px;
}

/* Estilo para a imagem do perfil */
.profile-link {
  display: flex;
  align-items: center;
  padding: 10px;
}

.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-text {
  color: #fff;
  font-size: 14px;
}
</style>
