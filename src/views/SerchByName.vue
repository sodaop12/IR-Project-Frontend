<template>
  <form @submit.prevent="submit">
    <label>Name:</label>
    <input type="text" v-model="Name" />
    <br />
    <button type="submit">Submit</button>
    <pre> {{ Name }}</pre>
  </form>
  <div v-if="$store.state.Dataname">
    <div style="display: flex">
    <li v-for="(value, key) in  $store.state.Dataname.data.title" :key="key" class = "myp">
       {{ key }}
       <p></p>
        <button @click="addtofav(key, value)">Click me</button>
    </li>

    </div>
    <div class = "img1">
     <img v-for="(value, key) in $store.state.Dataname.data.main_picture" :key="key" v-bind:src="value" :style="{ width: '200px', height: '200px' }"/>
      </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        Name: '',
        Data: null,
    }
  },
  methods: {
    submit() {
    const object = {
        Name: this.Name,
      };
      this.$store.commit('removeDataName')
      axios.post('http://127.0.0.1:5000/SerachByName', object)
      .then((response) => {
          this.Data = response
          this.$store.commit('setDataName', this.Data)
          })
        .catch((error) => {
          console.log(error)
        })
    },
    addtofav(key, value){
       this.$store.commit('addToFav', { key, value })
    }
  }
}
</script>

<style scoped>
.myp {
  text-align: center;
}
.img1{
  display: flex;
  justify-content: center;  /* align horizontally */
  align-items: center; 
}
</style>