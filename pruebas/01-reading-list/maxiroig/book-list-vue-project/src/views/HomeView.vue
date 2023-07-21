<script setup>
import HeaderSection from '@/components/HeaderSection.vue';
import BookList from '@/components/BookList.vue';
import BookFilters from '@/components/BookFilters.vue';
import MyList from '../components/MyList.vue';
import { useStore } from 'vuex'
import { watch, computed } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const library = store.state.library


const getNewBookToShow = computed (() => {return store.state.bookToShowDetails}) 
watch(getNewBookToShow,(currentValue) => {router.push(`/book/${currentValue}`)})

</script>

<template>
  <header>
    <HeaderSection/>
  </header>
  <main class="container mx-auto py-6">
    <MyList
      :data="library"
    />
    <BookFilters/>
    <BookList 
      @bookSelected="bookSelected"
      :dataBooks="library"
    />
  </main>
</template>
