import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SerchByNameView from '../views/SerchByName.vue'
import SerchBySynView from '../views/SerchBySyn.vue'
import FavView from '../views/FavView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }, 
  {
    path: '/SerchByName',
    name: 'SerchByname',
    component: SerchByNameView
  },
  {
    path: '/SerchBySyn',
    name: 'SerchBySyn',
    component: SerchBySynView
  },
  {
    path: '/Fav',
    name: 'Fav',
    component: FavView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
