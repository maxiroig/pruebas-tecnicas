<script setup>
import { ref } from 'vue';

const props = defineProps(["data", "id", "label", "type", "min", "max"])
const emit = defineEmits(["genreFilterSelected", "pageFilterSelected"])

const genreFilterSelected = ref(null)
const rangeFilterSelected = ref(null)


const resetAllFilters = () => {
    genreFilterSelected.value = null;
    rangeFilterSelected.value = null;
}

defineExpose({
    resetAllFilters
})
</script>

<template>
    <div class="text-center">
        <div v-if="type === 'select'" class="m-2 items-center flex  sm:grid grid-rows-2 justify-center">
            <label class="block text-xl" 
                :for="id">
                {{ label }}
            </label>
            <select class="text-white rounded-md h-10 w-60 bg-slate-800 active:ring-slate-800"
                @change="emit('genreFilterSelected', genreFilterSelected)"
                v-model="genreFilterSelected" 
                :name="id" 
                :id="id">
                <option v-for="(item, index) in props.data" :key="index" :value="item">
                    {{ item }}
                </option>
            </select>
        </div>
        <div v-if="type === 'range'" class="h-24 flex items-center justify-center sm:grid grid-rows-2">
            <label for="default-range" class="text-xl text-white-900 dark:text-white relative top-3">
                {{ label }}
            </label>
            <span class="text-sm relative top-4">
                {{ rangeFilterSelected }}
            </span>
            <div class="flex justify-between relative bottom-2">
                <span>-</span>
                <span>+</span>
            </div>
            <input
                @mouseup="emit('pageFilterSelected', rangeFilterSelected)"
                v-model="rangeFilterSelected" 
                :id="id" 
                :type="type" 
                :min="min" 
                :max="max"
                value="rangeFilterSelected"
                class="w-56 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 relative bottom-2"
            >
        </div>
    </div>
</template>