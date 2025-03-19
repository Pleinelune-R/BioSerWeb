import { createRouter, createWebHistory } from 'vue-router'
import Login from '../view/Login.vue' 
import Dashboard from '../view/Dashboard.vue'
 
const routes = [
    {
      path: '/',
      redirect: '/login'  
    },
    {
      path: '/login',     
      name: 'Login',
      component: Login 
    },

    {
      path: '/dashboard',     
      name: 'Dashboard',
      component: Dashboard
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes 
})


// 路由守卫 
router.beforeEach((to,  from, next) => {
  const isAuthenticated = !!localStorage.getItem('jwtToken'); 
  
  if (to.meta.requiresAuth  && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});
 
export default router 