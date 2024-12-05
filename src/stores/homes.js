  // src/stores/homes.js
  import { defineStore } from 'pinia';

  export const useHomesStore = defineStore('homes', {
    state: () => ({
      homes: [
      
      ],
    }),
    actions: {
      addHome(address, price, description, foto1, foto2, foto3, foto4, foto5) {
        const newId = this.homes.length + 1;
        this.homes.push({
          id: newId,
          address,
          price,
          description,
          foto1,
          foto2,
          foto3,
          foto4,
          foto5,
        });
      },
    },
  });
