<script setup>
import HeaderSection from '@/components/HeaderSection.vue';
import BookList from '@/components/BookList.vue';
import BookFilters from '@/components/BookFilters.vue';
import {useStore} from 'vuex'

const store = useStore()
const dataBooks = store.state.data.library

const bookSelected = (id) => {
  console.log("last", id);
}
</script>

<template>
  <header>
    <HeaderSection/>
  </header>
  <main class="container mx-auto py-6">
      <BookFilters/>
      <BookList 
      @bookSelected="bookSelected"
      :dataBooks="dataBooks"/>
  </main>
</template>
