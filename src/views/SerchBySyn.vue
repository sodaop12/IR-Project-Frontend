<template>
  <form @submit.prevent="submit">
    <label>Synopsis:</label>
    <input type="text" v-model="Synopsis" />
    <br />
    <button type="submit">Submit</button>
    <pre> {{ Synopsis }}</pre>
  </form>
  <div v-if="$store.state.Datasyn">
    <ul>
    <li v-for="(value, key) in $store.state.Datasyn.data.title" :key="key">
       {{ value }}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        Synopsis: '',
        DataSyn: null,
    }
  },
  methods: {
    submit() {
    const object = {
        Synopsis: this.Synopsis,
      };
      this.$store.commit('removeDataSyn')
      axios.post('http://127.0.0.1:5000/SerachBySysnopsis', object)
      .then((response) => {
          this.DataSyn = response
          console.log(this.Synopsis)
          this.$store.commit('setDatasyn', this.DataSyn)
          })
        .catch(() => {
          console.log("error")
        })
    }
  }
}
</script>