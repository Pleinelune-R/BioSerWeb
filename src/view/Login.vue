<template>
  <div class="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
    <!-- 登录框卡片 -->
    <div class="card w-full bg-base-100 items-center justify-center">
      <!-- 内部卡片，用于放置登录表单 -->
      <div class="flex-left card  w-full h-full items-center">
        <!-- 用户名输入 -->
        <AuthInput v-model="username" icon-type="user" type="text" required placeholder="username"
          pattern="[A-Za-z0-9\-]*" :min-length="3" :max-length="30" title="Only letters, numbers or dash" />
        <p class="validator-hint">
          Must be 3 to 30 characters.
        </p>
        <!-- 密码输入 -->
        <AuthInput v-model="password" icon-type="password" type="password" required placeholder="password"
          pattern="[A-Za-z0-9\-]*" :min-length="6" :max-length="30" />
        <p class="validator-hint">
          Must be 6 to 30 characters.
        </p>
        <br>
        <button class="btn btn-primary" @click="login">Sign In</button>
        <div class="text-center mt-4">
          <span class="text-sm opacity-75">New to BionetServer?</span>
          <router-link to="/register" class="link link-hover text-primary text-sm font-semibold">
            Create an account
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AuthInput from '../components/AuthInput.vue';
import { useRouter } from 'vue-router';
import http from '../utils/http';
import qs from 'qs';


const router = useRouter();
const username = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await http.post('/login', qs.stringify({
      username: username.value,
      password: password.value
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    console.log('response:', response.status)
    if (response.status !== 200) {
      console.log('response:', response.data)
      throw new Error(response.data?.message || 'Unable to connect the server.');
    }

    const { access_token } = await response.data;
    console.log('token:', access_token);
    console.log('response:', response.data);

    //路由重定向逻辑
    const redirectPath = router.currentRoute.value.query.redirect || '/dashboard';
    await router.replace(redirectPath);
  }

  catch (error) {
    console.error('Fail:', error);
    alert(error.response?.data?.message || 'Invaild username or password.');
  }
};

</script>