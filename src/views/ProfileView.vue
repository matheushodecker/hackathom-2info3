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
          <button class="logout" @click="handleLogout">Logout</button>
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

      <!-- Lista de casas cadastradas -->
      <div class="user-homes" v-if="userHomes.length">
        <h3>Casas Cadastradas</h3>
        <div class="home-list">
          <div class="home-item" v-for="home in userHomes" :key="home.id">
            <img :src="home.imageUrl || 'placeholder.jpg'" alt="Imagem da Casa" class="home-image" />
            <div class="home-info">
              <p><strong>Endereço:</strong> {{ home.address }}</p>
              <p><strong>Preço:</strong> R$ {{ home.price.toFixed(2) }}</p>
              <p><strong>Descrição:</strong> {{ home.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <p v-else>Você ainda não cadastrou nenhuma casa.</p>

      <!-- Formulário de cadastro de casa -->
      <div v-if="isAddingNewHome" class="add-home-form">
        <h3>Cadastrar Nova Casa</h3>
        <form @submit.prevent="handleAddHome">
          <p>
            <strong>Endereço:</strong>
            <input v-model="newHome.address" placeholder="Digite o endereço" required />
          </p>
          <p>
            <strong>Preço:</strong>
            <input v-model.number="newHome.price" type="number" placeholder="Digite o preço" required />
          </p>
          <p>
            <strong>Descrição:</strong>
            <textarea v-model="newHome.description" placeholder="Digite a descrição" required></textarea>
          </p>
          <p>
            <strong>Imagem:</strong>
            <input v-model="newHome.imageUrl" placeholder="URL da imagem" />
          </p>
          <button type="submit">Cadastrar Casa</button>
        </form>
      </div>

      <!-- Botão para mostrar/ocultar formulário -->
      <div class="add-home-button">
        <button @click="toggleAddHomeForm" :disabled="isAddingNewHome">
          {{ isAddingNewHome ? 'Cancelar' : 'Adicionar Nova Casa' }}
        </button>
      </div>

  
    </div>
  </template>

  <script>
  import { computed, ref, onMounted } from "vue";
  import { useAuthStore } from "@/stores/auth";
  import { useHomesStore } from "@/stores/homes";
  import { useRouter } from "vue-router";

  export default {
    setup() {
      const authStore = useAuthStore();
      const homesStore = useHomesStore();
      const user = computed(() => authStore.user);
      const router = useRouter();

      const isEditing = ref(false);
      const username = ref(user.value?.username || "");
      const email = ref(user.value?.email || "");
      const birthDate = ref(user.value?.birthDate || "");
      const error = ref("");

      const userHomes = ref([]);
      const newHome = ref({
        address: "",
        price: null,
        description: "",
        imageUrl: "",
      });

      const isAddingNewHome = ref(false); // Estado para controle do formulário

      const fetchUserHomes = async () => {
  try {
    userHomes.value = homesStore.getHomes().filter(home => home.userId === user.value.id); // Filtra as casas do usuário
  } catch (err) {
    console.error("Erro ao carregar as casas do usuário:", err.message);
  }
};


      const handleUpdate = async () => {
        try {
          await authStore.updateProfile(username.value, email.value, birthDate.value, user.value.profilePicture);
          error.value = "";
          isEditing.value = false;
        } catch (err) {
          error.value = err.message;
        }
      };

      const handleAddHome = async () => {
  try {
    const home = { ...newHome.value, userId: user.value.id };
    await homesStore.addHome(home.address, home.price, home.description, home.imageUrl); // Atualiza o estado da store
    userHomes.value = homesStore.getHomes(); // Recarrega as casas do estado da store
    newHome.value = { address: "", price: null, description: "", imageUrl: "" }; // Limpa o formulário
    isAddingNewHome.value = false; // Fecha o formulário após o envio
  } catch (err) {
    console.error("Erro ao cadastrar casa:", err.message);
  }
};


      const toggleAddHomeForm = () => {
        isAddingNewHome.value = !isAddingNewHome.value; // Alterna a visibilidade do formulário
      };

      const handleLogout = () => {
        authStore.logout();
        router.push("/login");
      };

      onMounted(() => {
        fetchUserHomes();
      });

      return {
        user,
        isEditing,
        username,
        email,
        birthDate,
        error,
        userHomes,
        newHome,
        isAddingNewHome,
        handleUpdate,
        handleAddHome,
        toggleAddHomeForm,
        handleLogout,
      };
    },
  };
  </script>

  <style scoped>
  /* Estilo original */
  .profile {
    padding: 20px;
    text-align: center;
  }

  .profile-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
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

  .user-homes {
    margin-top: 30px;
  }

  .home-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .home-item {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
  }

  .home-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .add-home-form {
    margin-top: 30px;
    text-align: left;
  }

  .add-home-button {
    margin-top: 20px;
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

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  button.logout {
    background-color: #dc3545;
  }

  button.logout:hover {
    background-color: #c82333;
  }
  </style>