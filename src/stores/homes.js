import { defineStore } from 'pinia';

export const useHomesStore = defineStore('homes', {
  state: () => ({
    homes: [
      {
        id: 1,
        address: 'Rua das Flores, 123, Joinville, SC',
        price: 250000,
        description: 'Casa aconchegante com 3 quartos, 2 banheiros, sala de estar ampla e quintal com jardim.',
        imageUrl: '/src/assets/img/casa1.jpg',
      },
      {
        id: 2,
        address: 'Avenida Brasil, 456, Joinville, SC',
        price: 350000,
        description: 'Imóvel moderno com 4 quartos, suíte master, cozinha planejada e área gourmet.',
        imageUrl: '/src/assets/img/casa2.jpg',
      },
      {
        id: 3,
        address: 'Rua das Palmeiras, 789, Curitiba, PR',
        price: 450000,
        description: 'Amplo sobrado com 5 quartos, 3 banheiros, área de lazer e garagem para 3 carros.',
        imageUrl: '/src/assets/img/casa3.jpg',
      },
      {
        id: 4,
        address: 'Alameda Rio Verde, 101, Florianópolis, SC',
        price: 500000,
        description: 'Casa com vista para o mar, 3 suítes, piscina e varanda gourmet.',
        imageUrl: '/src/assets/img/casa4.jpg',
      },
      {
        id: 5,
        address: 'Estrada do Sol, 202, Balneário Camboriú, SC',
        price: 700000,
        description: 'Luxuosa mansão com 6 suítes, sauna, jacuzzi e área de festas.',
        imageUrl: '/src/assets/img/casa5.jpg',
      },
      {
        id: 6,
        address: 'Rua das Acácias, 303, Porto Alegre, RS',
        price: 320000,
        description: 'Casa térrea com 2 quartos, quintal espaçoso e garagem para 2 carros.',
        imageUrl: '/src/assets/img/casa6.jpg',
      },
      {
        id: 7,
        address: 'Avenida Paulista, 1000, São Paulo, SP',
        price: 850000,
        description: 'Cobertura duplex com 3 suítes, vista panorâmica e piscina privativa.',
        imageUrl: '/src/assets/img/casa7.jpg',
      },
      {
        id: 8,
        address: 'Rua Santa Clara, 505, Rio de Janeiro, RJ',
        price: 600000,
        description: 'Apartamento à beira-mar com 4 quartos, 2 suítes e varanda gourmet.',
        imageUrl: '/src/assets/img/casa8.jpg',
      },
      {
        id: 9,
        address: 'Rua das Rosas, 909, Belo Horizonte, MG',
        price: 300000,
        description: 'Casa familiar com 3 quartos, sala ampla e quintal com área verde.',
        imageUrl: '/src/assets/img/casa9.jpg',
      },
      {
        id: 10,
        address: 'Praça Central, 111, Brasília, DF',
        price: 400000,
        description: 'Imóvel com design contemporâneo, 3 quartos e escritório.',
        imageUrl: '/src/assets/img/casa10.jpg',
      },
      {
        id: 11,
        address: 'Rua Vitória, 678, Salvador, BA',
        price: 270000,
        description: 'Casa simples com 2 quartos e quintal com espaço para piscina.',
        imageUrl: '/src/assets/img/casa11.jpg',
      },
      {
        id: 12,
        address: 'Alameda das Orquídeas, 222, Recife, PE',
        price: 380000,
        description: 'Sobrado moderno com 4 quartos e área de lazer com churrasqueira.',
        imageUrl: '/src/assets/img/casa12.jpg',
      },
      {
        id: 13,
        address: 'Rua Azul, 333, Fortaleza, CE',
        price: 250000,
        description: 'Casa com 2 quartos, sala de jantar e quintal grande.',
        imageUrl: '/src/assets/img/casa13.jpg',
      },
      {
        id: 14,
        address: 'Avenida Sul, 444, Manaus, AM',
        price: 450000,
        description: 'Imóvel com 5 quartos, piscina e varanda espaçosa.',
        imageUrl: '/src/assets/img/casa14.jpg',
      },
      {
        id: 15,
        address: 'Rua Vermelha, 555, Belém, PA',
        price: 320000,
        description: 'Casa com 3 quartos e um quintal arborizado.',
        imageUrl: '/src/assets/img/casa15.jpg',
      },
      {
        id: 16,
        address: 'Praça do Sol, 666, Goiânia, GO',
        price: 500000,
        description: 'Apartamento de luxo com 3 suítes e varanda gourmet.',
        imageUrl: '/src/assets/img/casa16.jpg',
      },
      {
        id: 17,
        address: 'Rua do Norte, 777, Vitória, ES',
        price: 410000,
        description: 'Sobrado com 4 quartos e garagem para 2 carros.',
        imageUrl: '/src/assets/img/casa17.jpg',
      },
      {
        id: 18,
        address: 'Alameda Oeste, 888, Campo Grande, MS',
        price: 200000,
        description: 'Casa simples com 2 quartos, sala e quintal.',
        imageUrl: '/src/assets/img/casa18.jpg',
      },
      {
        id: 19,
        address: 'Rua Estrela, 999, Curitiba, PR',
        price: 390000,
        description: 'Imóvel com 3 quartos, cozinha ampla e área de lazer.',
        imageUrl: '/src/assets/img/casa19.jpg',
      },
      {
        id: 20,
        address: 'Avenida das Palmeiras, 1234, Florianópolis, SC',
        price: 600000,
        description: 'Casa com vista para a praia, 4 suítes e área gourmet.',
        imageUrl: '/src/assets/img/casa20.jpg',
      },
    ],
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
