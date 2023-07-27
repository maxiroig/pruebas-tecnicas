<script setup>
import BaseCard from '@/components/global/BaseCard.vue'
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const props = defineProps(["dataBooks", "isFilterActive"]);
const emit = defineEmits(["bookToAdd"])
const filteredLibraryBooks = computed (() =>  store.state.filteredLibraryBooks)


const currentLibrary = computed (() =>  {
    if (props.isFilterActive){
        return filteredLibraryBooks.value
    }else{
        return props.dataBooks
    }
})
const bookToAdd = (id) => {
    emit("bookToAdd", id)
}
</script>

<template>
        <div 
        v-if="currentLibrary > 0"
        class="mb-6">
            <ul role="list" class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
                <li v-for="(item, index) in currentLibrary" :key="index" class="rounded-2xl bg-slate-800 px-8 py-4 self-start h-128 grid grow">
                    <BaseCard
                        :title="item.title"
                        :cover="item.cover"
                        :author="item.author.name"
                        :genre="item.genre"
                        :ISBN="item.ISBN"
                        :pages="item.pages"
                        @bookToAdd="bookToAdd"
                    />
                </li>
            </ul>
        </div>
        <div 
        v-else
        class="text-center mt-20  "
        >
            <div class="text-white text-3xl ">
                Nothing to see here...
            </div>
        </div>
</template>

<style scoped>
.grow{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.grow:hover{
    transform: scale3d(1.4, 1.4, 0.3);
        -webkit-transform: scale3d(1.1, 1.1, 0.3);
        -moz-transform: scale3d(1.5, 1.5, 0.3);
}
</style>