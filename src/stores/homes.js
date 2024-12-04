import { defineStore } from 'pinia';
export const useHomesStore = defineStore("homes", {
  state: () => ({
    homes: JSON.parse(localStorage.getItem("homes")) || [
      { id: 1, address: 'Rua das Flores, 123, Joinville, SC', price: 250000, description: 'Casa aconchegante com 3 quartos, 2 banheiros, sala de estar ampla e quintal com jardim.', imageUrl: '/src/assets/img/casa1/5a5c51d1-86df-4df5-a85b-abb67d01cf7c.avif', },
      { id: 2, address: 'Avenida Brasil, 456, Joinville, SC', price: 350000, description: 'Imóvel moderno com 4 quartos, suíte master, cozinha planejada e área gourmet.', imageUrl: 'src/assets/img/casa2/2ad59c3b-3b36-4071-98e7-110ea1a98c27.avif', },
      // (demais casas já cadastradas...)
    ],
  }),
  actions: {
    addHome(home) {
      this.homes.push(home);
      localStorage.setItem("homes", JSON.stringify(this.homes)); // Salva no localStorage
    },
    getUserHomes(userId) {
      return this.homes.filter((home) => home.userId === userId); // Retorna as casas do usuário
    },
    syncHomesWithLocalStorage() {
      localStorage.setItem("homes", JSON.stringify(this.homes)); // Atualiza persistência
    },
  },
});
