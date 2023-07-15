<script setup>
import HeaderSection from '../components/HeaderSection.vue';
import BookList from '@/components/BookList.vue';
import json from '@/data/dataBooks.json';

const dataBooks = json.library


</script>

<template>
  <header>
    <HeaderSection/>
  </header>
  <main class="container mx-auto py-6">
      <BookList :dataBooks="dataBooks"/>
  </main>
</template>
