<template> 
    <div class="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8"> 
      <!-- 登录框卡片 -->    
      <div class="card w-full bg-base-100 items-center justify-center"> 
        <!-- 内部卡片，用于放置登录表单 --> 
        <div class="flex-left card  w-full h-full items-center"> 
          <!-- 用户名输入框 --> 
          <label class="input validator"> 
               <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"> 
                  <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"> 
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> 
                      <circle cx="12" cy="7" r="4"></circle> 
                  </g> 
              </svg> 
              <input v-model="username" type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" /> 
          </label> 
          <!-- 用户名输入提示 --> 
          <p class="validator-hint"> 
            Must be 3 to 30 characters 
          </p> 
 
          <!-- 密码输入框 --> 
          <label class="input validator"> 
            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"> 
                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"> 
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path> 
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle> 
                </g> 
            </svg> 
            <input v-model="password" type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" /> 
          </label> 
          <!-- 密码输入提示 --> 
          <p class="validator-hint hidden"> 
            Must be more than 8 characters, including 
          </p>
          <br>
          <button class="btn btn-primary" @click="login">Sign In</button> 
          <div class="text-center mt-4">
          <span class="text-sm opacity-75">New to BionetServer?</span>
          <router-link 
            to="/register" 
            class="link link-hover text-primary text-sm font-semibold">
          Create an account
          </router-link>
          </div>
        </div> 
      </div>
    </div> 
</template> 
 
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
 
const router = useRouter();
const username = ref('');
const password = ref('');
 
const login = async () => {
  try {
    const { setItem } = secureStorage;
    const hashedPassword = setItem(password.value).password; 
 
    const response = await http.post('/api/auth/login',  {
      username: username.value, 
      password: hashedPassword 
    });
 
    localStorage.setItem('jwtToken',  response.data.token); 
    localStorage.setItem('user',  JSON.stringify(response.data.user)); 
    
    router.replace(to.query.redirect  || '/dashboard');
  } catch (error) {
    console.error(' 登录失败:', error);
    alert(error.response?.data?.message  || '认证失败');
  }
};
</script>