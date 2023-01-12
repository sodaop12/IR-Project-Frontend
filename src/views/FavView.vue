<template>
<div v-if="$store.state.fav">
  <div v-for="(item, index) in $store.state.fav" :key="index" class = "anime-card">
   <p>{{item.title}}</p>
    <img :src = "item.main_picture" :alt= "'undefine' "/>
    <div>
      <label for="rating">Rating:</label>
      <input type="number" v-model="ratings[index].rating" min="1" max="10"/>
    </div>
       <button @click="setAnimeId(index,item.mal_id)" class ="button-6" >Setid</button>
  </div>
  <form @submit.prevent="submit">
        <button type="submit" class = "button-6">Submit</button>
     </form>
</div>
<div v-if="$store.state.Datafav" class="mo">
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
  setAnimeId(index, id) {
    this.ratings[index].anime_id = id
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
<style scoped>
 * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      }

      /* Style the anime card */
      .anime-card {
        background-color: #f9f9f9;
        padding: 16px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: box-shadow 0.3s ease-in-out;
        width: 200px; /* fixed width of 150px */
        display: inline-block;
        margin: 16px;
        text-align: center; /* align content in the center */
      }

      /* Style the anime title */
      .anime-card h4 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      /* Style the anime main picture */
      .anime-card img {
        width: 100%;
        max-width: 200px; /* max-width of 120px */
        height: 200px; /* scale image proportionally */
        border-radius: 10px;
        margin: 0 auto; /* center the image horizontally */
      }
      
      /* Style the add to fav button */
      .button-6 {
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
        margin-top: 8px; /* add some margin top to button */
      }
       .myp {
        background-color: #f9f9f9;
        padding: 16px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: box-shadow 0.3s ease-in-out;
        width: 150px;
        height: 150px;
        margin: 16px;
        text-align: center;
        list-style: none; /* remove the bullet points */
        display: flex;
      }
      .mo{
        display: flex;
      }
</style>
