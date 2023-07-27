<script setup>
import BaseCardDetails from '../components/global/BaseCardDetails.vue';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute();
const bookId = ref(route.params)


const getBookFromState = computed (() =>  store.getters.getBookById(bookId.value.id))
const bookToShowDetails = ref(getBookFromState.value[0])

</script>

<template>
    <div class="h-screen">
        <BaseCardDetails
        :title="bookToShowDetails.title"
        :cover="bookToShowDetails.cover"
        :author="bookToShowDetails.author.name"
        :genre="bookToShowDetails.genre"
        :ISBN="bookToShowDetails.ISBN"
        :year="bookToShowDetails.year"
        :pages="bookToShowDetails.pages"
        :synopsis="bookToShowDetails.synopsis"
        />
    </div>
</template>
