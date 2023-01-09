<template>
  <form @submit.prevent="login">
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button type="submit">Log in</button>
  </form>
  <div>
    <button v-if="loggedIn" @click="logout">Log out</button>
    <p>{{ $store.state.username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
        if (response.data.success) {
          this.$store.commit('setLoggedIn', true)
        }
      } catch (error) {
        console.error(error)
      }
      this.$store.commit('setUsername', this.username)
    },
     async logout() {
      try {
        await this.$store.dispatch('logout')
        this.$store.commit('setLoggedIn', false)
      } catch (error) {
        console.error(error)
      }
      this.$store.commit('removeUsername')
    }
  }
}
</script>
