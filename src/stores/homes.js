import { defineStore } from 'pinia'

export const useHomesStore = defineStore('homes', {
  state: () => ({
    homes: [] // Lista de casas cadastradas
  }),
  actions: {
    async addHome(home) {
      home.id+this.homes.length + 1
      this.homes.push(home)
    },
    async getUserHomes(userId) {
      return this.homes.filter(home => home.userId === userId)
    }
  }
})


