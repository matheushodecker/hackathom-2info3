import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    validUsers: [
      {
        username: 'admin1',
        password: 'adminpassword1',
        email: 'admin1@example.com',
        birthDate: '1990-01-01',
        profilePicture: 'path/to/default/profile.jpg'
      },
      {
        username: 'admin2',
        password: 'adminpassword2',
        email: 'admin2@example.com',
        birthDate: '1992-02-02',
        profilePicture: 'path/to/default/profile.jpg'
      }
    ]
  }),
  actions: {
    async login(username, password) {
      const user = this.validUsers.find((u) => u.username === username && u.password === password)
      if (user) {
        this.user = {
          username: user.username,
          email: user.email,
          birthDate: user.birthDate,
          profilePicture: user.profilePicture
        }
      } else {
        throw new Error('Credenciais inválidas')
      }
    },

    async register(username, password, email, birthDate, profilePicture) {
      const existingUser = this.validUsers.find((u) => u.username === username)
      if (existingUser) {
        throw new Error('Usuário já existe')
      }
      this.validUsers.push({ username, password, email, birthDate, profilePicture })
      console.log('Usuário registrado:', username)
    },

    async updateProfile(username, email, birthDate, profilePicture) {
      if (this.user) {
        this.user.username = username
        this.user.email = email
        this.user.birthDate = birthDate
        this.user.profilePicture = profilePicture
      } else {
        throw new Error('Usuário não está autenticado')
      }
    },

    logout() {
      this.user = null
    }
  }
})
