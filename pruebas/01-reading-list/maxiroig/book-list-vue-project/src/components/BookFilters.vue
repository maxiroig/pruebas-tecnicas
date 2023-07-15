<script setup>
import BaseFilter from './global/BaseFilter.vue';
import TotalAvailableBooks from './TotalAvailableBooks.vue';
</script>
<template>
    
    <div class="text-sm text-end mb-1 text-pink-500 cursor-pointer">
        Reset Filters >>
    </div>
    <div class="grid grid-cols-3 border border-1 border-gray-500 rounded-lg py-3 mb-8 items-center">
        <TotalAvailableBooks 
            class="grid grid-cols-2"
        />
        <BaseFilter
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
            max="2000"
        />
    </div>
</template>