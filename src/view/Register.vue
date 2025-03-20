<template>
    <div class="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8"> 
        <!-- 登录框卡片 --> 
        <div class="card w-full max-w-sm bg-base-100 items-center justify-center"> 
            <!-- 内部卡片，用于放置登录表单 --> 
            <div class="card bg-base-200 w-100 h-75 items-center justify-center p-8"> 
          
          <!-- 用户名输入 -->
          <!-- <div class="form-control">
            <label class="label">
              <span class="label-text">用户名</span>
            </label>
            <input v-model="username" type="text" class="input input-bordered" />
          </div> -->
          
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

          <!-- 密码输入 -->
          <label class="input validator"> 
               <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"> 
                  <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"> 
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path> 
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle> 
                  </g> 
              </svg> 
              <input v-model="confirmPassword" type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" /> 
          </label> 

          <!-- 密码输入提示 --> 
          <p class="validator-hint hidden"> 
              Must be more than 8 characters, including 
          </p> 
          <br>
   
          <!-- 确认密码 -->
          <label class="input validator2"> 
               <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"> 
                  <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"> 
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path> 
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle> 
                  </g> 
              </svg> 
              <input v-model="password" type="password2" required placeholder="ConfirmPassword" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" /> 
          </label> 
   
          <div class="form-control mt-6">
            <button @click="register" class="btn btn-primary">注册</button>
          </div>
        </div>
        <div class="text-center mt-4">
            <span class="text-sm opacity-75">已有账号？</span>
            <router-link 
              to="/login" 
              class="link link-hover text-primary text-sm font-semibold"
            >
              立即登录
            </router-link>
        </div>
      </div>
    </div>
  </template>
   
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import http from '../utils/http';
   
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');
   
  const register = async () => {
    if (password.value  !== confirmPassword.value)  {
      alert('两次密码输入不一致');
      return;
    }
   
    try {
      const response = await http.post('/api/auth/register',  {
        username: username.value, 
        password: CryptoJS.SHA256(password.value).toString() 
      });
   
      if (response.data.success)  {
        alert('注册成功，请登录');
        router.push('/login'); 
      }
    } catch (error) {
      console.error(' 注册失败:', error);
      alert(error.response?.data?.message  || '注册失败');
    }
  };
  </script>