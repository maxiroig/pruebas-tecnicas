<script setup>
import HeaderSection from '@/components/HeaderSection.vue';
import BookList from '@/components/BookList.vue';
import BookFilters from '@/components/BookFilters.vue';
import MyList from '../components/MyList.vue';
import InfoSection from '../components/InfoSection.vue';
import { useStore } from 'vuex'
import { watch, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'

//Root
const router = useRouter()
const store = useStore()

//Methods
const addBookToMyList = (id) => {
  store.dispatch('addBookToMyList', id)
}
const removeBookFromMyList = (id) => {
  store.dispatch('removeBookFromMyList', id)
}

//Computeds
const libraryList = computed (() => {return store.state.libraryBooks}) 
const myBookList = computed (() => {return store.state.myListBooks}) 
const getNewBookToShow = computed (() => {return store.state.bookToShowDetails}) 

//Watchs
watch(getNewBookToShow,(currentValue) => {router.push(`/book/${currentValue}`)})

//Hooks
onMounted (() => {
  store.dispatch('setAllBooksInLibrary')
})

</script>

<template>
  <header>
    <HeaderSection/>
  </header>
  <main class="container mx-auto py-6">
    <section class="grid grid-cols-2 gap-4 my-6">
      <InfoSection/>
      <BookFilters/>
    </section>
    <section>
      <BookList 
      @bookToAdd="addBookToMyList"
      :dataBooks="libraryList"
      />
      <MyList
        :data="myBookList"
        @removeBookFromMyList="removeBookFromMyList"
      />
    </section>
  </main>
</template>
