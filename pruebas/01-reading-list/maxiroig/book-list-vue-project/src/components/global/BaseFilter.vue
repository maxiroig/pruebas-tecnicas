<script setup>
import { ref } from 'vue';
const props = defineProps(["data", "id", "label", "type", "min", "max"])

const genreFilterSelected = ref("")
const rangeFilterSelected = ref("")
</script>

<template>
    <div class="text-center ">
        <div v-if="type === 'select'" class="mx-2 items-center grid grid-rows-2 justify-center">
            <label class="me-2 block text-xl" :for="id">
                {{ label }}
            </label>
            <select class="text-black rounded-md h-10 w-60" v-model="genreFilterSelected" :name="id" :id="id">
                <option v-for="(item, index) in props.data" :key="index" value="filterSelected">
                    {{ item }}
                </option>
            </select>
        </div>
        <div v-if="type === 'range'" class="items-center justify-center grid grid-rows-2">
            <label for="default-range" class="text-xl mb-2 font-medium text-white-900 dark:text-white">
                {{ label }}
            </label>
            <input
                v-model="rangeFilterSelected" 
                id="id" 
                :type="type" 
                :min="min" 
                :max="max"
                :value="rangeFilterSelected"
                class="w-96 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            >
        </div>
    </div>
</template>