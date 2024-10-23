<template>
  <div class="signup-container">
    <h2>Cadastro</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" type="text" placeholder="Usuário" required />
      <input v-model="password" type="password" placeholder="Senha" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="birthDate" type="date" placeholder="Data de Nascimento" required />
      <input type="file" @change="handleFileUpload" accept="image/*" required />
      <button type="submit">Cadastrar</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

export default {
  setup() {
    const authStore = useAuthStore();
    const username = ref('');
    const password = ref('');
    const email = ref('');
    const birthDate = ref('');
    const profilePicture = ref(null);
    const error = ref('');

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          profilePicture.value = reader.result; // Armazena a imagem como uma URL base64
        };
        reader.readAsDataURL(file);
      }
    };

    const handleRegister = async () => {
  try {
    await authStore.register(username.value, password.value, email.value, birthDate.value, profilePicture.value);
    error.value = '';
    // Redirecionar ou realizar outras ações após o registro
  } catch (err) {
    error.value = err.message;
  }
};


    return { username, password, email, birthDate, profilePicture, handleFileUpload, handleRegister, error };
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="date"],
input[type="file"] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input[type="file"] {
  padding: 5px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 10px;
  color: #ff0000;
  font-size: 14px;
}
</style>

