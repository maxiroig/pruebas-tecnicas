<script setup>
import BaseFilter from './global/BaseFilter.vue';
import BaseButton from '@/components/global/BaseButton.vue'
import { ref, computed } from 'vue';
import { mapGetters } from 'vuex'


const resetFiltersNewValue = ref(null);

const library = computed(() => {
    return mapGetters(library)
}) 

const resetFilters = () => {
    resetFiltersNewValue.value.resetAllFilters();
    console.log("store", library.value);
};
</script>
<template>
    <div class=" ">
        <div class="flex justify-evenly border border-1 border-gray-500 rounded-lg p-3.5 items-center">
            <BaseFilter
            class="border border-1 border-gray-500 rounded-lg bg-slate-800 py-2 w-80"
                ref="resetFiltersNewValue"
                :data="['testuno', 'testdos', 'testtres']"
                label="Filter by genre"
                id="gender"
                type="select"
            />
            <div class="px-2">
                <BaseButton @click="resetFilters" class="">
                    Reset Filters
                </BaseButton>
            </div>
            <BaseFilter
            class="border border-1 border-gray-500 rounded-lg bg-slate-800 py-2 w-80"
                type="range"
                label="Filter by pages"
                id="pages"
                min="50"
                max="3000"
            />
        </div>
    </div>
</template>