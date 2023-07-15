<script setup>
import json from '@/data/dataBooks.json';
import HeaderSection from '../components/HeaderSection.vue';
import BookList from '@/components/BookList.vue';
import TotalBooks from '../components/TotalBooks.vue';

const dataBooks = json.library


</script>

<template>
  <header>
    <HeaderSection/>
  </header>
  <main class="container mx-auto py-6">
      <TotalBooks />
      <BookList :dataBooks="dataBooks"/>
  </main>
</template>
