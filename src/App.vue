<template>
  <Navbar />

  <component :is="components[currentComponent]"></component>
</template>

<script setup>
  import { ref } from 'vue'
  import AppList from './components/AppList.vue'
  import Navbar from './components/Navbar.vue'
  // import { createMemoryHistory, createRouter } from 'vue-router'
  // import HomeView from './HomeView.vue'
  // import AboutView from './AboutView.vue'

  // const routes = [
  //   { path: '/', component: HomeView },
  //   { path: '/about', component: AboutView },
  // ]

  // const router = createRouter({
  //   history: createMemoryHistory(),
  //   routes,
  // })

  const currentComponent = ref('List')
  const components = {
    List: AppList,
  };
</script>


