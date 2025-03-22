<template>
  <div class="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
    <!-- 登录框卡片 -->
    <div class="card w-full max-w-sm items-center justify-center">
      <!-- 内部卡片，用于放置登录表单 -->
      <div class="card w-full h-full items-center justify-center p-8">
        <label class="input validator">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input v-model="username" type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3" maxlength="30" title="Only letters, numbers or dash" />
        </label>

        <!-- 用户名输入提示 -->
        <p class="validator-hint">
          Must be 3 to 30 characters
        </p>

        <!-- 邮箱输入 -->
        <label class="input validator">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input v-model="email" type="input" required placeholder="Email" minlength="3" maxlength="30" />
        </label>

        <!-- 用户名输入提示 -->
        <p class="validator-hint">
          Must be 3 to 30 characters
        </p>

        <!-- 密码输入 -->
        <label class="input validator">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z">
              </path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input v-model="confirmPassword" type="password" required placeholder="Password" minlength="6"
            title="Must be more than 6 characters" />
        </label>

        <!-- 密码输入提示 -->
        <p class="validator-hint hidden">
          Must be more than 6 characters.
        </p>
        <br>

        <!-- 确认密码 -->
        <label class="input validator2">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z">
              </path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input v-model="password" type="password" required placeholder="ConfirmPassword" minlength="6"
            title="Must be more than 6 characters" />
        </label>

        <!-- 密码输入提示 -->
        <p class="validator-hint hidden">
          Must be more than 6 characters.
        </p>

        <!-- 输入验证码 -->
        <label class="input validator2">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z">
              </path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input v-model="verifycode" type="vericode" required placeholder="vericode" minlength="6" maxlength="6"
            pattern="" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
        </label>

        <!-- 密码输入提示 -->
        <p class="validator-hint hidden">
          Must be 6 characters.
        </p>


        <div class="form-control mt-6">
          <button @click="sendemail" class="btn btn-primary">Send verification code</button>
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary" @click="register">Sign Up</button>
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary" @click="update">Update User</button>
        </div>

        <div class="text-center mt-4">
          <span class="text-sm opacity-75">Already have an account?</span>
          <router-link to="/login" class="link link-hover text-primary text-sm font-semibold">
            Sign in
          </router-link>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import qs from 'qs';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import http from '../utils/http';

const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const vericode = ref('');


// const sendemail = async () => {

//   try {
//     const response = await http.post('/signup', ({
//       username: username.value,
//       email: email.value
//     }), {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//     });
//     console.log('response:', response.status)
//     if (response.status !== 200) {
//       console.log('response:', response.data)
//       throw new Error(response.data?.message || 'Unable to connect the server.');
//     }

//   }
//   catch (error) {
//     console.error('Fail:', error);
//     alert(error.response?.data?.message || 'Email already exists.');
//   }
// };

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('The passwords entered do not match.');
    return;
  }

  try {
    const response = await http.post('/signup', ({
      username: username.value,
      email: email.value,
      password: password.value
      // vericode: vericode.value
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('password:', password.value);
    console.log('email:', email.value);
    console.log('username:', username.value);

    console.log('response:', response.status)
    if (response.status !== 200) {
      console.log('response:', response.data)
      throw new Error(response.data?.message || 'Unable to connect the server.');
    }

    //路由重定向逻辑
    const redirectPath = router.currentRoute.value.query.redirect || '/login';
    await router.replace(redirectPath);
  }
  catch (error) {
    console.error('Fail:', error);
    alert(error.response?.data?.message || 'Account already exists.');
  }
};

const update = async () => {
  if (password.value !== confirmPassword.value) {
    alert('The passwords entered do not match.');
    return;
  }

  try {
    const response = await http.post('/change', ({
      username: username.value,
      email: email.value,
      password: password.value
      // verifycode: verifycode.value
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log('password:', password.value);
    console.log('email:', email.value);
    console.log('username:', username.value);

    console.log('response:', response.status)
    if (response.status !== 200) {
      console.log('response:', response.data)
      throw new Error(response.data?.message || 'Unable to connect the server.');
    }

    //路由重定向逻辑
    const redirectPath = router.currentRoute.value.query.redirect || '/login';
    await router.replace(redirectPath);
  }
  catch (error) {
    console.error('Fail:', error);
    alert(error.response?.data?.message || 'Update failed, please check your urename or password.');
  }
};
</script>