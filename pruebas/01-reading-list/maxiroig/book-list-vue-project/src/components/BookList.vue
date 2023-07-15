<script setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline'

const props = defineProps(["dataBooks"])
console.log("props", props.dataBooks);
</script>

<template>
    <div class="">
        <div class="mb-6">
            <ul role="list"
                class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
                <li v-for="(item, index) in props.dataBooks" :key="index" class="rounded-2xl bg-slate-800 px-8 py-4 ">
                    <img class="mx-auto h-48 w-48 md:h-56 md:w-56" 
                        :src="item.book.cover" 
                        :alt="item.book.title" 
                    />
                    <h3
                        class="text-base font-semibold mt-3 tracking-tight text-pink-500 hover:text-orange-500 hover:cursor-pointer">
                        {{ item.book.title }}
                    </h3>
                    <p class="text-sm leading-6 text-gray-400">
                        Author:
                        <span class="text-white">
                            {{ item.book.author.name }}
                        </span>
                    </p>
                    <p class="text-sm leading-6 text-gray-400">
                        Genre:
                        <span class="text-white">
                            {{ item.book.genre }}
                        </span>
                    </p>
                    <div class="mt-3">
                        <button class="flex p-2 bg-pink-500 rounded-lg mx-auto self-end">
                            <PlusCircleIcon class="h-6 w-6" aria-hidden="true" />
                            <span class="ms-2">Add</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>