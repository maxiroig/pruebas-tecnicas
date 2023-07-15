<script setup>
import BaseCard from './BaseCard.vue';

const props = defineProps([
    "books",
])
console.log("books", props.books);
</script>

<template>
    <ul role="list" class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
        <li v-for="(item, index) in props.books" :key="index" class="rounded-2xl bg-slate-800 px-8 py-4 self-start h-128 grid">
            <BaseCard
                :title="item.book.title"
                :cover="item.book.cover"
                :author="item.book.author.name"
                :genre="item.book.genre"
            />
        </li>
    </ul>
</template>