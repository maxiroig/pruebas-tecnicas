<script setup>
import { onMounted } from 'vue';
import {initTooltips} from 'flowbite'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps(["title", "cover", "author", "genre","pages", "ISBN"])
const emit = defineEmits(["bookToAdd"])

const bookSelected = (id) => {
    store.dispatch('bookToShow', id)
}

onMounted(() => {
    initTooltips()
})

</script>

<template>
    <div class="text-end">
        <span>
            <lord-icon
                @click="bookSelected(ISBN)"
                class="cursor-pointer"
                data-tooltip-target="tooltip-details"
                src="https://cdn.lordicon.com/zniqnylq.json"
                trigger="loop-on-hover"
                colors="primary:#db2777,secondary:#ec4899"
                stroke="80"
                style="width:30px;height:30px">
            </lord-icon>         
            <div id="tooltip-details" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Details
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> 
        </span>
        <span>
            <lord-icon
                @click="emit('bookToAdd',ISBN)"
                class="cursor-pointer"
                data-tooltip-target="tooltip-add"
                src="https://cdn.lordicon.com/ytuosppc.json"
                trigger="loop-on-hover"
                colors="primary:#db2777,secondary:#ec4899"
                stroke="80"
                style="width:30px;height:30px">
            </lord-icon>
            <div id="tooltip-add" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Add to list
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div> 
        </span>
    </div>
    
    <img 
        class="mx-auto h-48  md:h-56" 
        :src="props.cover" 
        :alt="title" 
    />
    <div class="">
        <div class="flex items-center mt-2.5">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
        </div>
    </div>
    <h3 
    @click="bookSelected(ISBN)"
    class="text-base font-semibold tracking-tight text-pink-600 hover:text-pink-500 hover:cursor-pointer">
        {{ title }}
    </h3>
    <div>
        <p class="text-xs leading-5 text-gray-400">
            Author:
            <span class="text-white">
                {{ author }}
            </span>
        </p>
        <p class="text-xs leading-5 text-gray-400">
            Genre:
            <span class="text-white">
                {{ genre }}
            </span>
        </p>
        <p class="text-xs leading-5 text-gray-400">
            Pages:
            <span class="text-white">
                {{ pages }}
            </span>
        </p>
    </div>
</template>
