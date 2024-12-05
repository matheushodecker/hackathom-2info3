<template>
  <div class="profile-page">
    <ProfileComponente
      :user="user"
      :isEditing="isEditing"
      :username="username"
      :email="email"
      :birthDate="birthDate"
      :error="error"
      @updateProfile="handleUpdate"
      @logout="handleLogout"
      @update:username="username = $event"
      @update:email="email = $event"
      @update:birthDate="birthDate = $event"
      @cancelEdit="isEditing = false" 
    />
    <CasasCadastradasComponente
      :userHomes="userHomes"
      :isAddingNewHome="isAddingNewHome"
      :newHome="newHome"
      @addHome="handleAddHome"
      @toggleAddHomeForm="toggleAddHomeForm"
    />
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useHomesStore } from '@/stores/homes';
import { useRouter } from 'vue-router';
import ProfileComponente from '@/components/ProfileComponente.vue';
import CasasCadastradasComponente from '@/components/CasasCadastradasComponente.vue';

export default {
  components: {
    ProfileComponente,
    CasasCadastradasComponente,
  },
  setup() {
    const authStore = useAuthStore();
    const homesStore = useHomesStore();
    const user = computed(() => authStore.user);
    const router = useRouter();

    const isEditing = ref(false);
    const username = ref(user.value?.username || '');
    const email = ref(user.value?.email || '');
    const birthDate = ref(user.value?.birthDate || '');
    const error = ref('');

    const userHomes = ref([]);
    const newHome = ref({
      address: '',
      price: null,
      description: '',
      imageUrl: '',
    });

    const isAddingNewHome = ref(false);

    const fetchUserHomes = async () => {
      try {
        userHomes.value = homesStore
          .getHomes()
          .filter((home) => home.userId === user.value.id);
      } catch (err) {
        console.error('Erro ao carregar as casas do usuário:', err.message);
      }
    };

    const handleUpdate = async (username, email, birthDate) => {
      try {
        await authStore.updateProfile(username, email, birthDate, user.value.profilePicture);
        error.value = '';
        isEditing.value = false;
      } catch (err) {
        error.value = err.message;
      }
    };

    const handleAddHome = async (home) => {
      try {
        await homesStore.addHome(home.address, home.price, home.description, home.imageUrl);
        userHomes.value = homesStore.getHomes().filter(
          (home) => home.userId === user.value.id
        );
        newHome.value = { address: '', price: null, description: '', imageUrl: '' };
        isAddingNewHome.value = false;
      } catch (err) {
        console.error('Erro ao cadastrar casa:', err.message);
      }
    };

    const toggleAddHomeForm = () => {
      isAddingNewHome.value = !isAddingNewHome.value;
    };

    const handleLogout = () => {
      authStore.logout();
      router.push('/login');
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
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
