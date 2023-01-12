<template>
   <div>
    <button v-on:click="currentForm = 'Name'">Name</button>
    <button v-on:click="currentForm = 'Synopsis'">Synopsis</button>

    <div v-if="currentForm === 'Name'">
      <form @submit.prevent="submitName">
        <label>Name:</label>
        <input type="text" v-model="Name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div v-else-if="currentForm === 'Synopsis'">
      <form @submit.prevent="submitSyn">
        <label>Synopsis:</label>
        <input type="text" v-model="Synopsis" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>

  <div v-if="$store.state.Dataname">
      <AnimeCard
        v-for="anime in $store.state.Dataname.data"
        :key="anime.mal_id"
        :anime="anime"
      ></AnimeCard>
  </div>

</template>

<script>
import AnimeCard from '../components/AnimeCard.vue'
import axios from 'axios'
export default {
  data() {
    return {
        currentForm: 'Name',
        Synopsis: '',
        Name: '',
        Data: null,
    }
  },
 components: {
    AnimeCard
    },
  methods: {
    submitName() {
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
    submitSyn() {
    const object = {
        Synopsis: this.Synopsis,
      };
      this.$store.commit('removeDataName')
      axios.post('http://127.0.0.1:5000/SerachBySysnopsis', object)
      .then((response) => {
          this.Data = response
          this.$store.commit('setDataName', this.Data)
          })
        .catch(() => {
          console.log("error")
        })
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
  /* General Styles */
      * {
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
      }

      /* Style the buttons */
      button {
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

      /* Style the active button */
      button.active {
        background-color: #3e8e41;
      }

      /* Style the form and inputs */
      form {
        border: 1px solid #ccc;
        padding: 16px;
        width: 50%;
        margin: 0 auto;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: box-shadow 0.3s ease-in-out;
      }

      /* Input fields styles */
      input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 18px;
        transition: border 0.3s ease-in-out;
      }

      /* Style the label */
      label {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
        display: block;
      }

      /* Add hover effect on the buttons and form */
      button:hover, form:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
      
      /* Add focus effect on the inputs */
      input:focus {
        border: 2px solid #4CAF50;
      }


</style>