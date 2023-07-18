<script setup>
import BaseCard from './BaseCard.vue';

const props = defineProps(["books"])
const emit = defineEmits(["bookSelected"])
const bookSelected = (id) => {
    emit ("bookSelected", id);
}

</script>

<template>
    <ul role="list" class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
        <li v-for="(item, index) in props.books" :key="index" class="rounded-2xl bg-slate-800 px-8 py-4 self-start h-128 grid cursor-pointer grow">
            <BaseCard
                @bookSelected="bookSelected"
                :title="item.book.title"
                :cover="item.book.cover"
                :author="item.book.author.name"
                :genre="item.book.genre"
                :ISBN="item.book.ISBN"
            />
        </li>
    </ul>
</template>

<style scoped>
.grow{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.grow:hover{
    transform: scale3d(1.5, 1.5, 0.3);
        -webkit-transform: scale3d(1.1, 1.1, 0.3);
        -moz-transform: scale3d(1.5, 1.5, 0.3);
}
</style>