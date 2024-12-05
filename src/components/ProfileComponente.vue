<template>
  <div class="profile-info">
    
    <div v-if="user">
      <img :src="user.profilePicture" alt="Foto de Perfil" class="profile-picture" />
      <div class="info" v-if="!isEditing">
        <p><strong>Usuário:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Data de Nascimento:</strong> {{ user.birthDate }}</p>
        <button @click="isEditing = true">Editar</button>
        <button class="logout" @click="handleLogout">Logout</button>
      </div>
      <div class="info" v-else>
        <p><strong>Usuário:</strong><input v-model="username" /></p>
        <p><strong>Email:</strong><input v-model="email" /></p>
        <p><strong>Data de Nascimento:</strong><input v-model="birthDate" type="date" /></p>
        <button @click="handleUpdate">Salvar</button>
        <button @click="cancelEdit">Cancelar</button>
      </div>
    </div>
    <p v-else>Carregando informações do usuário...</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    error: String
  },
  data() {
    return {
      isEditing: false,
      username: this.user ? this.user.username : '',
      email: this.user ? this.user.email : '',
      birthDate: this.user ? this.user.birthDate : ''
    }
  },
  methods: {
    updateUsername(event) {
      this.username = event.target.value
    },
    updateEmail(event) {
      this.email = event.target.value
    },
    updateBirthDate(event) {
      this.birthDate = event.target.value
    },
    handleUpdate() {
      this.$emit('updateProfile', this.username, this.email, this.birthDate)
      this.isEditing = false
    },
    cancelEdit() {
      this.username = this.user.username
      this.email = this.user.email
      this.birthDate = this.user.birthDate
      this.isEditing = false
    },
    handleLogout() {
      this.$emit('logout')
    }
  }
}
</script>

<style scoped>
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.profile-picture {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.info {
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 30px;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button.logout {
  background-color: #dc3545;
  margin: 10px;
}

button.logout:hover {
  background-color: #c82333;
}

p {
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 20px;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
