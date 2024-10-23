<template>
    <div class="profile">
      <h2>Perfil do Usuário</h2>
      <div class="profile-info" v-if="user">
        <img :src="user.profilePicture" alt="Foto de Perfil" class="profile-picture" />
        <div class="info" v-if="!isEditing">
          <p><strong>Usuário:</strong> {{ user.username }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Data de Nascimento:</strong> {{ user.birthDate }}</p>
          <button @click="isEditing = true">Editar</button>
        </div>
        <div class="info" v-else>
          <p>
            <strong>Usuário:</strong>
            <input v-model="username" />
          </p>
          <p>
            <strong>Email:</strong>
            <input v-model="email" />
          </p>
          <p>
            <strong>Data de Nascimento:</strong>
            <input v-model="birthDate" type="date" />
          </p>
          <button @click="handleUpdate">Salvar</button>
          <button @click="isEditing = false">Cancelar</button>
        </div>
      </div>
      <p v-else>Carregando informações do usuário...</p>
      <p v-if="error">{{ error }}</p>
      <button class="logout" @click="handleLogout">Logout</button>

    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const authStore = useAuthStore();
      const user = computed(() => authStore.user);
      const router = useRouter(); // Importa o router para redirecionar
  
      const isEditing = ref(false);
      const username = ref(user.value.username);
      const email = ref(user.value.email);
      const birthDate = ref(user.value.birthDate);
      const error = ref('');
  
      const handleUpdate = async () => {
        try {
          await authStore.updateProfile(username.value, email.value, birthDate.value, user.value.profilePicture);
          error.value = ''; // Limpa mensagem de erro
          isEditing.value = false; // Sai do modo de edição
        } catch (err) {
          error.value = err.message; // Atualiza mensagem de erro
        }
      };
  
      const handleLogout = () => {
        authStore.logout(); // Chama o método de logout da store
        router.push('/login'); // Redireciona para a página de login
      };
  
      return { user, isEditing, username, email, birthDate, handleUpdate, handleLogout, error };
    },
  };
  </script>
  
  
  <style scoped>
  .profile {
    padding: 20px;
    text-align: center;
  }
  
  .profile-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column; /* Para alinhar o formulário verticalmente */
  }
  
  .profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  
  .info {
    text-align: left;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  input {
    margin-top: 5px;
    padding: 5px;
    width: 200px;
  }

button.logout {
  background-color: #dc3545; /* Cor vermelha para logout */

}

button.logout:hover {
  background-color: #c82333; /* Cor mais escura ao passar o mouse */
}

  </style>
  