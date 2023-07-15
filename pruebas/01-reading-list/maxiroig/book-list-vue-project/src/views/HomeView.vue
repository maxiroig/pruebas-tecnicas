<script setup>
import json from '@/data/dataBooks.json';
import HeaderSection from '@/components/HeaderSection.vue';
import BookList from '@/components/BookList.vue';
import BookFilters from '@/components/BookFilters.vue';

const dataBooks = json.library

console.log("json", dataBooks);
</script>

<template>
  <header>
    <HeaderSection/>
  </header>
  <main class="container mx-auto py-6">
      <BookFilters/>
      <BookList :dataBooks="dataBooks"/>
  </main>
</template>
