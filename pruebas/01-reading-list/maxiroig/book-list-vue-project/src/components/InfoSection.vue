<script setup>
import TotalBooksInLibrary from '@/components/TotalBooksInLibrary.vue'
import TotalBooksInMyList from '@/components/TotalBooksInMyList.vue';

const props = defineProps(["libraryQty", "myListQty"])

</script>
<template>
    <div class="sm:block ">
        <div class="block xl:flex xl:gap-3 justify-evenly border border-1 border-gray-500 rounded-lg p-4 ">
            <TotalBooksInLibrary :data="props.libraryQty"/>
            <TotalBooksInMyList :data="myListQty"/>
        </div>
    </div>
</template>

