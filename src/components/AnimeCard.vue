<template>
    <div class="anime-card">
        <h4>{{ anime.title}}</h4>
         <div>
        <img :src = "anime.main_picture" :alt= "'undefine' "/>
      </div>
     <button @click="addtofav(anime)" class = "button-6">add to fav</button>
    </div>
</template>
<script>
export default {
 props: ["anime"],
 methods:{
    addtofav(anime){
       this.$store.commit('setfav', anime)
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
</style>
