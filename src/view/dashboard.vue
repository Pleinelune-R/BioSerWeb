<template>
  <div class="flex:left mockup-window border border-base-300 w-full">
    <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
  </div>
  <div class="flex:right mockup-window border border-base-300 w-full">
    <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
  </div>


    </template>

      
  <script setup>
  import { secureStorage } from '../utils/auth';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const logout = () => {
    secureStorage.clearAuthData(); 
    router.push('/login'); 
  };
  </script>