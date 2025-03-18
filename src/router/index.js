// src/router/index.js  
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../view/Login.vue' 
 
const routes = [
    {
      path: '/',
      redirect: '/login'  
    },
    {
      path: '/login',     
      name: 'Login',
      component: Login 
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes 
})
 
export default router 