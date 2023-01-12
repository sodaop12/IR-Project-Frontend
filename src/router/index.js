import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SerchByNameView from '../views/SerchByName.vue'
import FavView from '../views/FavView.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  }, 
  {
    path: '/SerchByName',
    name: 'SerchByname',
    component: SerchByNameView
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
