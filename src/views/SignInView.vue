<template>
  <div class="signup-container">
    <form @submit.prevent="handleRegister">
      <h2>Cadastrar</h2>
      <input v-model="username" type="text" placeholder="Usuário" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Senha" required />
      <input v-model="birthDate" type="date" placeholder="Data de Nascimento" required />

      <input class="terms" type="checkbox" id="terms" v-model="termsAccepted" required />
      <label for="terms"
        >Aceito os <a href="#" @click.prevent="showModal = true">termos de serviço</a></label
      >

      <button class="CadastrarBotton" type="submit">Cadastrar</button>
      <div>
        <h3>ja possui conta?<a style="margin: 5px" href="/Login">Login </a></h3>
      </div>
    </form>
    <TermsModal :isVisible="showModal" @close="showModal = false" @accept="handleTermsAccepted" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import TermsModal from '@/components/TermsModal.vue' // Verifique o caminho

export default {
  components: { TermsModal },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const username = ref('')
    const password = ref('')
    const email = ref('')
    const birthDate = ref('')
    const profilePicture = ref(null)
    const error = ref('')
    const showModal = ref(false)
    const termsAccepted = ref(false)

    const handleFileUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          profilePicture.value = reader.result // Armazena a imagem como uma URL base64
        }
        reader.readAsDataURL(file)
      }
    }

    const handleRegister = async () => {
      if (!termsAccepted.value) {
        showModal.value = true // Mostra o modal se os termos não foram aceitos
        return
      }
      try {
        await authStore.register(
          username.value,
          password.value,
          email.value,
          birthDate.value,
          profilePicture.value
        )
        router.push('/login') // Redireciona após cadastro
      } catch (err) {
        error.value = err.message // Mostra erro, se houver
      }
    }

    const handleTermsAccepted = () => {
      termsAccepted.value = true // Define que os termos foram aceitos
      showModal.value = false // Fecha o modal
      handleRegister() // Tenta registrar novamente
    }

    return {
      username,
      password,
      email,
      birthDate,
      profilePicture,
      handleFileUpload,
      handleRegister,
      error,
      showModal,
      handleTermsAccepted,
      termsAccepted
    }
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 83.8vh;
  background-color: #f4f4f4;
  padding: 20px;
  background-image: url(../assets/img/61003b076a9aa616781477.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
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
  margin-left: 60%;
  border-radius: 14px;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='date'],
input[type='file'] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
}
label,
.terms {
  margin-bottom: 40px;
  margin-left: 5px;
  border-radius: 50px;
}
.terms {
  margin-left: 90px;
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
.CadastrarBotton {
  border-radius: 30px;
  font-weight: bold;
}

p {
  margin-top: 10px;
  color: #ff0000;
  font-size: 14px;
}
h3 {
  margin-top: 30px;
}
</style>
