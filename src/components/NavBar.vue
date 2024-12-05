<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { RouterLink } from 'vue-router';

const authStore = useAuthStore();
const isLoggedIn = computed(() => authStore.user !== null);
const user = computed(() => authStore.user); // Obtém os dados do usuário
</script>

<template>
  <nav class="navbar">
    <div class="link-container">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/alugar" class="link">Loja</router-link>

      <!-- Links visíveis somente quando o usuário NÃO está logado -->
      <template v-if="!isLoggedIn">
        <router-link to="/cadastro" class="link">Cadastro</router-link>
        <router-link to="/login" class="link">Login</router-link>
      </template>

      <!-- Link do perfil visível somente quando o usuário está logado -->
      <template v-if="isLoggedIn">
        <router-link to="/profile" class="profile-link">
          <img
            v-if="user?.profilePicture"
            :src="user.profilePicture"
            alt="Foto de Perfil"
            class="profile-image"
          />
          <span v-else class="profile-text">Perfil</span>
        </router-link>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #000; /* Fundo preto */
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px; /* Aumenta o padding para mais espaço */
  position: fixed;
  top: 0;
  z-index: 20;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); /* Sombra mais forte */
}

.link-container {
  display: flex;
  align-items: center;
  gap: 25px; /* Aumenta o espaçamento entre os links */
}

.link {
  color: #fff;
  font-weight: 600;
  font-size: 18px; /* Aumenta o tamanho da fonte */
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease, letter-spacing 0.2s ease;
}

.link:hover {
  color: #ff9800; /* Cor de destaque ao passar o mouse */
  transform: scale(1.05); /* Animação sutil ao passar o mouse */
  letter-spacing: 1px; /* Leve aumento no espaçamento das letras */
}

.profile-link {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.profile-image {
  width: 45px; /* Aumenta a imagem para tornar mais visível */
  height: 45px;
  border-radius: 50%;
  border: 3px solid #ff9800; /* Borda dourada para dar destaque */
  margin-right: 15px;
  object-fit: cover; /* Garante que a imagem se ajuste corretamente */
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.1); /* Efeito de aumento da imagem ao passar o mouse */
}

.profile-text {
  font-size: 16px;
  color: #fff;
  font-weight: 500;
}

@media (max-width: 768px) {
  .link-container {
    gap: 15px; /* Menor espaçamento em telas menores */
  }

  .navbar {
    padding: 0 15px; /* Menos padding para dispositivos móveis */
  }

  .link {
    font-size: 16px; /* Fonte menor em dispositivos móveis */
  }

  .profile-image {
    width: 40px; /* Tamanho reduzido da imagem no celular */
    height: 40px;
  }
}
</style>
