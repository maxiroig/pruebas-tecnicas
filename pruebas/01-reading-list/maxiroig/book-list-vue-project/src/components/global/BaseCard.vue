<script setup>
import BaseButton from './BaseButton.vue';
const props = defineProps(["title", "cover", "author", "genre", ])
</script>

<template>
    <img 
        class="mx-auto h-48 w-48 md:h-56 md:w-56" 
        :src="props.cover" 
        :alt="title" 
    />
    <h3 class="text-base font-semibold mt-3 tracking-tight text-pink-600 hover:text-pink-400 hover:cursor-pointer">
        {{ title }}
    </h3>
    <div>
        <p class="text-sm leading-6 text-gray-400">
            Author:
            <span class="text-white">
                {{ author }}
            </span>
        </p>
        <p class="text-sm leading-6 text-gray-400">
            Genre:
            <span class="text-white">
                {{ genre }}
            </span>
        </p>
    </div>
    <BaseButton>
        Add
    </BaseButton>
</template>
