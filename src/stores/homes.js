import { defineStore } from 'pinia';

export const useHomesStore = defineStore('homes', {
  state: () => ({
    homes: [], // Lista de casas cadastradas
  }),
  actions: {
    addHome(address, price, description, imageUrl) {
      const newHome = {
        id: this.homes.length + 1,
        address,
        price,
        description,
        imageUrl,
      };
      this.homes.push(newHome);
    },
    getHomes() {
      return this.homes;
    },
  },
});
