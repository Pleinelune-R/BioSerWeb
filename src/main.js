import { createApp } from 'vue'
import './style.css' 
import App from './App.vue' 
import router from './router/index'
 
createApp(App)
  .use(router)
  .mount('#app')

setInterval(() => {
  if (isAuthenticated()) {
    http.post('/auth/refresh') 
      .then(res => {
        localStorage.setItem('jwtToken',  res.data.token); 
      })
      .catch(() => logout());
  }
}, 55 * 60 * 1000); 