<script setup>
import BaseFilter from './global/BaseFilter.vue';
import TotalAvailableBooks from './TotalAvailableBooks.vue';
import { ref } from 'vue';

const resetFiltersNewValue = ref(null);

const resetFilters = () => {
    resetFiltersNewValue.value.resetAllFilters();
};
</script>
<template>
    <div class="text-end">
        <span @click="resetFilters" class="text-sm  mb-1 text-pink-500 cursor-pointer hover:text-pink-400">
            Reset Filters >>
        </span>
    </div>
    <div class="grid grid-cols-3 border border-1 border-gray-500 rounded-lg py-3 mb-8 items-center">
        <TotalAvailableBooks 
            class="grid grid-cols-2"
        />
        <BaseFilter
            ref="resetFiltersNewValue"
            :data="['testuno', 'testdos', 'testtres']"
            label="Filter by genre"
            id="gender"
            type="select"
        />
        <BaseFilter
            type="range"
            label="Filter by pages"
            id="pages"
            min="50"
            max="3000"
        />
    </div>
</template>