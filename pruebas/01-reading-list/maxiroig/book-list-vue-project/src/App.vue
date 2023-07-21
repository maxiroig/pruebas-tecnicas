<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="w-screen min-h-screen bg-slate-900 text-white">
    <NavBar/>
    <router-view/>
  </div>
</template>

<style scoped>
</style>
