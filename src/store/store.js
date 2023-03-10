// store.js


import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
    state: {
      loggedIn: false,
      username: '',
      Dataname: null,
      Datasyn: null,
      Datafav: null,
      fav: []
    },
    mutations: {
      setLoggedIn(state, loggedIn) {
        state.loggedIn = loggedIn
      },
      setUsername(state, username){
        state.username = username
      },
      setDataName(state, Dataname){
        state.Dataname = Dataname
      }, 
      setDatasyn(state, Datasyn){
        state.Datasyn = Datasyn
      }, 
      setDatafav(state, Datafav){
        state.Datafav = Datafav
      },
      setfav(state, fav){
        state.fav.push(fav)
      },
      removeDatafav(state){
        state.Datafav = null
      },
      removeUsername(state) {
        state.username = ''
      },
      removeDataName(state) {
        state.Dataname = null
      },
      removeDataSyn(state) {
        state.Datasyn = null
      },
      splicearryFav(state,index) {
        state.fav.splice(index,1) 
      }
    },
    actions: {
    // eslint-disable-next-line
      async login({ commit }, data) {
        try {
          const response = await axios.post('http://127.0.0.1:5000/login', data)
          return response
        } catch (error) {
          console.error(error)
        }
      },
      // eslint-disable-next-line
      async logout({ commit }) {
        try {
          await axios.post('http://127.0.0.1:5000/logout')
        } catch (error) {
          console.error(error)
        }
      }
    }
  })

