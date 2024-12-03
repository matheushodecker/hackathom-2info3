<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <h2>Login</h2>
      <input v-model="username" type="text" placeholder="Usuário" required />
      <input class="senha" v-model="password" type="password" placeholder="Senha" required />
      <button class="EntrarBotton" type="submit">Entrar</button>
      <div>
        <h3>Não possui conta?<a style="margin: 5px" href="/cadastro">Criar Conta</a></h3>
      </div>
    </form>
    <p v-if="error">{{ error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const success = ref('')

    const handleLogin = async () => {
      console.log('Tentando logar com:', username.value, password.value)
      try {
        await authStore.login(username.value, password.value)
        success.value = 'Login realizado com sucesso!'
        error.value = ''
        router.push('/') // Redireciona para a página home
      } catch (err) {
        error.value = err.message
        success.value = '' // Limpa a mensagem de sucesso em caso de erro
      }
    }

    return { username, password, handleLogin, error, success }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95.6vh;
  padding: 20px;
  background-image: url(../assets/img/Login.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  
}

h2 {
  color: #343a40;
  margin-bottom: 20px;
}

form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  margin-left: 60%;
  border-radius: 14px;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  margin-top: 14px;
  margin-bottom: 25px;
}

input[type='text']:focus,
input[type='password']:focus {
  border-color: #007bff;
  outline: none;
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
.EntrarBotton {
  border-radius: 30px;
  font-weight: bold;
}

p {
  margin-top: 10px;
  color: #dc3545; /* Red for errors */
  font-size: 14px;
}

.success {
  color: #28a745; /* Green for success messages */
}
h3 {
  margin-top: 30px;
}
</style>
