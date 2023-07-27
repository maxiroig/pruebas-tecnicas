<script setup>
import HeaderSection from '@/components/HeaderSection.vue';
import BookList from '@/components/BookList.vue';
import BookFilters from '@/components/BookFilters.vue';
import MyList from '@/components/MyList.vue';
import InfoSection from '@/components/InfoSection.vue';
import { useStore } from 'vuex'
import { watch, computed, onBeforeMount , ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'


//Root
const router = useRouter()
const store = useStore()
const genreForFilter = ref()
const isFilterActive = ref(false)

//Methods
const addBookToMyList = (id) => {
  store.dispatch('addBookToMyList', id)
}
const removeBookFromMyList = (id) => {
  store.dispatch('removeBookFromMyList', id)
}


//Setting Filters
const getAllGenresAvailables = () => {
  const allGenre = store.state.allLibrary.map(obj => obj.genre)
  const uniqueGenre = [];
  allGenre.forEach((element) => {
    if(!uniqueGenre.includes(element)){
      uniqueGenre.push(element)
    }
  })
  genreForFilter.value = uniqueGenre
}
const genreFilterSelected = (filter) => {
  isFilterActive.value = true
  let data = getBooksFilteredByGener(filter)
  store.dispatch('updateFilteredLibraryBooks', data)
}
const getBooksFilteredByGener = (filter) => {
  let books = [];
  let library = libraryList.value
    library.forEach(item => {
      if(item.genre === filter){
        books.push(item)
      }
    })
  return books;
}
const pageFilterSelected = (filter) => {
  isFilterActive.value = true
  let data = getBooksFilteredByPages(filter)
  store.dispatch('updateFilteredLibraryBooks', data)
};
const getBooksFilteredByPages = (filter) => {
  let pages = parseInt(filter)
  let library = libraryList.value
  library = library.filter(item => item.pages <= pages)
  return library;
}
const resetAllFilters = () => {
  isFilterActive.value = false
  store.dispatch('resetFilters')
}
//Computeds
const libraryList = computed (() =>  store.getters.getLibraryBooks) 
const myBookList = computed (() =>  store.getters.getMyListOfBooks) 
const getNewBookToShow = computed (() => store.getters.bookToShowDetails) 


//Watchs
watch(getNewBookToShow,(currentValue) => {router.push(`/book/${currentValue}`)})

//Hooks
onBeforeMount (() => {
  store.dispatch('setStateByDefault')
})
onMounted (() => {
  getAllGenresAvailables();
})

</script>

<template>
  <header>
    <HeaderSection/>
  </header>
  <main class="container mx-auto py-6">
    <section class="grid grid-cols-2 gap-4 my-6">
      <InfoSection 
        :libraryQty="libraryList"
        :myListQty="myBookList"
      />
      <BookFilters
      :genres="genreForFilter"
      @genreFilterSelected="genreFilterSelected"
      @pageFilterSelected="pageFilterSelected"
      @resetFilters="resetAllFilters"
      />
    </section>
    <section>
      <BookList 
        @bookToAdd="addBookToMyList"
        :dataBooks="libraryList"
        :isFilterActive="isFilterActive"
      />
      <MyList
        @removeBookFromMyList="removeBookFromMyList"
      />
    </section>
  </main>
</template>
