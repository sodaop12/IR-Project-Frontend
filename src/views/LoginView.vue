<template>
  <form @submit.prevent="login">
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button type="submit">Log in</button>
     <div>
    <button v-if="loggedIn" @click="logout" type="button">Log out</button>
  </div>
  </form>
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
           this.$router.push({
            name: 'SerchByname'
          })
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
<style scoped>
      * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      }

      /* Style the form */
      form {
        background-color: #f9f9f9;
        padding: 16px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: box-shadow 0.3s ease-in-out;
        width: 20%;
        margin: 16px auto;
        text-align: center;
      }
      /* Style the inputs */
      input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 18px;
        transition: border 0.3s ease-in-out;
      }
       /* Style the submit button */
        button[type="submit"] {
          background-color: #4CAF50; /* Green */
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
          font-size: 20px;
          font-weight: bold;
          border-radius: 4px;
          transition: background-color 0.3s ease-in-out;
        }

        /* Style the logout button */
        button[type="button"] {
          background-color: #f44336; /* Red */
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
          font-size: 20px;
          font-weight: bold;
          border-radius: 4px;
          transition: background-color 0.3s ease-in-out;
        }
</style>