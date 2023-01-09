<template>
<div v-if="$store.state.fav">
   
    <li v-for="(value, key ,index) in  $store.state.fav" :key="key" class = "myp" >
         {{ index }} {{ value }}
       <p></p>
      <label for="rating">Rating:</label>
    <input v-if="$store.state.fav" type="number" v-model="ratings[index].rating" />
       <button @click="setAnimeId(index, key)" >Click me</button>
    </li>
     <form @submit.prevent="submit">
    <button type="submit">Submit</button>
     </form>
</div>
<div v-if="$store.state.Datafav">
  <li v-for="(value, key) in  $store.state.Datafav.data" :key="key" class = "myp">
       {{ value }}
       <p></p>
    </li>
</div>
</template>

<script>
import axios from 'axios'
export default {
     data() {
    return {
        data: null,
      ratings: [{
          user_id: 0,
          anime_id: Number(0),
          rating: 0,
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       },
       {
        user_id: 0,
        anime_id: Number(0),
        rating: 0
       }]
    }
},
methods: {
  setAnimeId(index, key) {
    this.ratings[index].anime_id = key
  },submit() {
      this.$store.commit('removeDatafav')
      axios.post('http://127.0.0.1:5000/predictanime', this.ratings)
      .then((response) => {
          this.Data = response
          this.$store.commit('setDatafav', this.Data)
          })
        .catch((error) => {
          console.log(error)
        })
    }
}
}
</script>
