// src/stores/preHomes.js
import { defineStore } from 'pinia'

export const usePreHomesStore = defineStore('preHomes', {
  state: () => ({
    preHomes: [
      {
        id: 1,
        address: 'Rua das Flores, 123, Joinville, SC',
        price: 250000,
        description:
          'Casa aconchegante com 3 quartos, 2 banheiros, sala de estar ampla e quintal com jardim.',
        foto1: '/src/assets/img/casa1/5a5c51d1-86df-4df5-a85b-abb67d01cf7c.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 2,
        address: 'Avenida Brasil, 456, Joinville, SC',
        price: 350000,
        description:
          'Imóvel moderno com 4 quartos, suíte master, cozinha planejada e área gourmet.',
        foto1: 'src/assets/img/casa2/2ad59c3b-3b36-4071-98e7-110ea1a98c27.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 3,
        address: 'Rua das Palmeiras, 789, Curitiba, PR',
        price: 450000,
        description:
          'Amplo sobrado com 5 quartos, 3 banheiros, área de lazer e garagem para 3 carros.',
        foto1: 'src/assets/img/casa3/3a33537c-9afe-421f-a941-b7b20909f859.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 4,
        address: 'Alameda Rio Verde, 101, Florianópolis, SC',
        price: 500000,
        description: 'Casa com vista para o mar, 3 suítes, piscina e varanda gourmet.',
        foto1: 'src/assets/img/casa4/3d90ca74-4b4d-46b2-87a6-e2b6cf652431.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 5,
        address: 'Estrada do Sol, 202, Balneário Camboriú, SC',
        price: 700000,
        description: 'Luxuosa mansão com 6 suítes, sauna, jacuzzi e área de festas.',
        foto1: 'src/assets/img/casa5/31f2bacc-66af-4358-9647-e1fc8a8656fe.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 6,
        address: 'Rua das Acácias, 303, Porto Alegre, RS',
        price: 320000,
        description: 'Casa térrea com 2 quartos, quintal espaçoso e garagem para 2 carros.',
        foto1: 'src/assets/img/casa6/1229319f-b10b-4791-a664-3810f4b2541f.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 7,
        address: 'Avenida Paulista, 1000, São Paulo, SP',
        price: 850000,
        description: 'Cobertura duplex com 3 suítes, vista panorâmica e piscina privativa.',
        foto1: 'src/assets/img/casa7/5b44f9dd-19af-4740-98b5-a78eaa20fb0e.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 8,
        address: 'Rua Santa Clara, 505, Rio de Janeiro, RJ',
        price: 600000,
        description: 'Apartamento à beira-mar com 4 quartos, 2 suítes e varanda gourmet.',
        foto1: 'src/assets/img/casa8/7a89ba92-8034-4e3b-8f5b-333bab4fd739.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 9,
        address: 'Rua das Rosas, 909, Belo Horizonte, MG',
        price: 300000,
        description: 'Casa familiar com 3 quartos, sala ampla e quintal com área verde.',
        foto1: 'src/assets/img/casa9/1f5b88df-b369-48d7-a3dd-76c953ab5e08.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 10,
        address: 'Praça Central, 111, Brasília, DF',
        price: 400000,
        description: 'Imóvel com design contemporâneo, 3 quartos e escritório.',
        foto1: 'src/assets/img/casa10/0a25919a-a87c-4a77-9dfe-209c418c1696.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 11,
        address: 'Rua Vitória, 678, Salvador, BA',
        price: 270000,
        description: 'Casa simples com 2 quartos e quintal com espaço para piscina.',
        foto1: 'src/assets/img/apt1/2b496cf6-0686-4146-bbb7-63236f94e2a6.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 12,
        address: 'Alameda das Orquídeas, 222, Recife, PE',
        price: 380000,
        description: 'Sobrado moderno com 4 quartos e área de lazer com churrasqueira.',
        foto1: 'src/assets/img/apt2/44d9e110-a553-4e1b-94b3-1ed63908c9e3.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 13,
        address: 'Rua Azul, 333, Fortaleza, CE',
        price: 250000,
        description: 'Casa com 2 quartos, sala de jantar e quintal grande.',
        foto1: 'src/assets/img/apt3/3947c586-c9ae-4473-bb97-832eddc9afbf.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 14,
        address: 'Avenida Sul, 444, Manaus, AM',
        price: 450000,
        description: 'Imóvel com 5 quartos, piscina e varanda espaçosa.',
        foto1: 'src/assets/img/apt4/16b3a887-16d8-40be-9baf-91872e950a6a.webp',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 15,
        address: 'Rua Vermelha, 555, Belém, PA',
        price: 320000,
        description: 'Casa com 3 quartos e um quintal arborizado.',
        foto1: 'src/assets/img/apt5/7c8bb70a-f02f-4a34-9c18-020ee53deb25.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 16,
        address: 'Praça do Sol, 666, Goiânia, GO',
        price: 500000,
        description: 'Apartamento de luxo com 3 suítes e varanda gourmet.',
        foto1: 'src/assets/img/apt6/61e64005-6def-4a04-a0c8-0ff5bdf131b2.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 17,
        address: 'Rua do Norte, 777, Vitória, ES',
        price: 410000,
        description: 'Sobrado com 4 quartos e garagem para 2 carros.',
        foto1: 'src/assets/img/apt7/672ef92a-975a-4d05-ba4e-a2c3a1197140.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 18,
        address: 'Alameda Oeste, 888, Campo Grande, MS',
        price: 200000,
        description: 'Casa simples com 2 quartos, sala e quintal.',
        foto1: 'src/assets/img/apt8/60a838b9-a4bc-4ec3-b4eb-0a209653aaed.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 19,
        address: 'Rua Estrela, 999, Curitiba, PR',
        price: 390000,
        description: 'Imóvel com 3 quartos, cozinha ampla e área de lazer.',
        foto1: 'src/assets/img/apt9/7b30af43-6535-4ae2-9da5-6319894d0872.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      },
      {
        id: 20,
        address: 'Avenida das Palmeiras, 1234, Florianópolis, SC',
        price: 600000,
        description: 'Casa com vista para a praia, 4 suítes e área gourmet.',
        foto1: 'src/assets/img/apt10/7d69ba87-ce1a-4cb5-ada6-f03f8203d092.avif',
        foto2: '',
        foto3: '',
        foto4: '',
        foto5: ''
      }
    ]
  }),
  actions: {
    addPreHome(address, price, description, foto1, foto2, foto3, foto4, foto5) {
      const newId = this.preHomes.length + 1
      this.preHomes.push({
        id: newId,
        address,
        price,
        description,
        foto1,
        foto2,
        foto3,
        foto4,
        foto5
      })
    }
  }
})

/*
import { defineStore } from 'pinia'

export const useHomesStore = defineStore('homes', {
  state: () => ({
    homes: [
      {
        id: 1,
        address: 'Rua das Flores, 123, Joinville, SC',
        price: 250000,
        description:
          'Casa aconchegante com 3 quartos, 2 banheiros, sala de estar ampla e quintal com jardim.',
        foto1: '/src/assets/img/casa1/5a5c51d1-86df-4df5-a85b-abb67d01cf7c.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 2,
        address: 'Avenida Brasil, 456, Joinville, SC',
        price: 350000,
        description:
          'Imóvel moderno com 4 quartos, suíte master, cozinha planejada e área gourmet.',
        foto1: 'src/assets/img/casa2/2ad59c3b-3b36-4071-98e7-110ea1a98c27.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 3,
        address: 'Rua das Palmeiras, 789, Curitiba, PR',
        price: 450000,
        description:
          'Amplo sobrado com 5 quartos, 3 banheiros, área de lazer e garagem para 3 carros.',
        foto1: 'src/assets/img/casa3/3a33537c-9afe-421f-a941-b7b20909f859.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 4,
        address: 'Alameda Rio Verde, 101, Florianópolis, SC',
        price: 500000,
        description: 'Casa com vista para o mar, 3 suítes, piscina e varanda gourmet.',
        foto1: 'src/assets/img/casa4/3d90ca74-4b4d-46b2-87a6-e2b6cf652431.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 5,
        address: 'Estrada do Sol, 202, Balneário Camboriú, SC',
        price: 700000,
        description: 'Luxuosa mansão com 6 suítes, sauna, jacuzzi e área de festas.',
        foto1: 'src/assets/img/casa5/31f2bacc-66af-4358-9647-e1fc8a8656fe.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 6,
        address: 'Rua das Acácias, 303, Porto Alegre, RS',
        price: 320000,
        description: 'Casa térrea com 2 quartos, quintal espaçoso e garagem para 2 carros.',
        foto1: 'src/assets/img/casa6/1229319f-b10b-4791-a664-3810f4b2541f.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 7,
        address: 'Avenida Paulista, 1000, São Paulo, SP',
        price: 850000,
        description: 'Cobertura duplex com 3 suítes, vista panorâmica e piscina privativa.',
        foto1: 'src/assets/img/casa7/5b44f9dd-19af-4740-98b5-a78eaa20fb0e.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 8,
        address: 'Rua Santa Clara, 505, Rio de Janeiro, RJ',
        price: 600000,
        description: 'Apartamento à beira-mar com 4 quartos, 2 suítes e varanda gourmet.',
        foto1: 'src/assets/img/casa8/7a89ba92-8034-4e3b-8f5b-333bab4fd739.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 9,
        address: 'Rua das Rosas, 909, Belo Horizonte, MG',
        price: 300000,
        description: 'Casa familiar com 3 quartos, sala ampla e quintal com área verde.',
        foto1: 'src/assets/img/casa9/1f5b88df-b369-48d7-a3dd-76c953ab5e08.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 10,
        address: 'Praça Central, 111, Brasília, DF',
        price: 400000,
        description: 'Imóvel com design contemporâneo, 3 quartos e escritório.',
        foto1: 'src/assets/img/casa10/0a25919a-a87c-4a77-9dfe-209c418c1696.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 11,
        address: 'Rua Vitória, 678, Salvador, BA',
        price: 270000,
        description: 'Casa simples com 2 quartos e quintal com espaço para piscina.',
        foto1: 'src/assets/img/apt1/2b496cf6-0686-4146-bbb7-63236f94e2a6.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 12,
        address: 'Alameda das Orquídeas, 222, Recife, PE',
        price: 380000,
        description: 'Sobrado moderno com 4 quartos e área de lazer com churrasqueira.',
        foto1: 'src/assets/img/apt2/44d9e110-a553-4e1b-94b3-1ed63908c9e3.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 13,
        address: 'Rua Azul, 333, Fortaleza, CE',
        price: 250000,
        description: 'Casa com 2 quartos, sala de jantar e quintal grande.',
        foto1: 'src/assets/img/apt3/3947c586-c9ae-4473-bb97-832eddc9afbf.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 14,
        address: 'Avenida Sul, 444, Manaus, AM',
        price: 450000,
        description: 'Imóvel com 5 quartos, piscina e varanda espaçosa.',
        foto1: 'src/assets/img/apt4/16b3a887-16d8-40be-9baf-91872e950a6a.webp',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 15,
        address: 'Rua Vermelha, 555, Belém, PA',
        price: 320000,
        description: 'Casa com 3 quartos e um quintal arborizado.',
        foto1: 'src/assets/img/apt5/7c8bb70a-f02f-4a34-9c18-020ee53deb25.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 16,
        address: 'Praça do Sol, 666, Goiânia, GO',
        price: 500000,
        description: 'Apartamento de luxo com 3 suítes e varanda gourmet.',
        foto1: 'src/assets/img/apt6/61e64005-6def-4a04-a0c8-0ff5bdf131b2.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 17,
        address: 'Rua do Norte, 777, Vitória, ES',
        price: 410000,
        description: 'Sobrado com 4 quartos e garagem para 2 carros.',
        foto1: 'src/assets/img/apt7/672ef92a-975a-4d05-ba4e-a2c3a1197140.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 18,
        address: 'Alameda Oeste, 888, Campo Grande, MS',
        price: 200000,
        description: 'Casa simples com 2 quartos, sala e quintal.',
        foto1: 'src/assets/img/apt8/60a838b9-a4bc-4ec3-b4eb-0a209653aaed.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 19,
        address: 'Rua Estrela, 999, Curitiba, PR',
        price: 390000,
        description: 'Imóvel com 3 quartos, cozinha ampla e área de lazer.',
        foto1: 'src/assets/img/apt9/7b30af43-6535-4ae2-9da5-6319894d0872.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      },
      {
        id: 20,
        address: 'Avenida das Palmeiras, 1234, Florianópolis, SC',
        price: 600000,
        description: 'Casa com vista para a praia, 4 suítes e área gourmet.',
        foto1: 'src/assets/img/apt10/7d69ba87-ce1a-4cb5-ada6-f03f8203d092.avif',
        foto2:'',
        foto3:'',
        foto4:'',
        foto5:'',
      }
    ]
  }),
  actions: {
    addHome(address, price, description, foto1, foto2, foto3, foto4, foto5) {
      const newHome = {
        id: this.homes.length + 1,
        address,
        price,
        description,
        foto1: foto1 || null,
        foto2: foto2 || null,
        foto3: foto3 || null,
        foto4: foto4 || null,
        foto5: foto5 || null
      };
      this.homes.push(newHome);
    },
    
    getHomes() {
      return this.homes
    }
  }
})
 */
