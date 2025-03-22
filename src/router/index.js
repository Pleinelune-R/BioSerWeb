import { createRouter, createWebHistory } from 'vue-router'
import Login from '../view/Login.vue'
import Dashboard from '../view/dashboard.vue'

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
    path: '/register',
    name: 'Register',
    component: () => import('../view/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // meta: { requiresAuth: true } 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


// router.beforeEach((to,  from, next) => {
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path); 
//   const loggedIn = localStorage.getItem('jwtToken'); 

//   // 重定向到登录页 
//   if (authRequired && !loggedIn) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath  }
//     });
//   } else {
//     // 已登录时禁止访问登录/注册页 
//     if (loggedIn && (to.path  === '/login' || to.path  === '/register')) {
//       next('/dashboard');
//     } else {
//       next();
//     }
//   }
// });

export default router 