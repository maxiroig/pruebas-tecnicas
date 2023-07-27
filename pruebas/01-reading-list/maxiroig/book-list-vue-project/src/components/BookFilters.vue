<script setup>
import BaseFilter from './global/BaseFilter.vue';
import BaseButton from '@/components/global/BaseButton.vue'


const emit = defineEmits(["genreFilterSelected","pageFilterSelected, resetFilters"])
const props = defineProps(["genres"])



const genreFilterSelected = (filter) => {
    emit("genreFilterSelected", filter)
}
const pageFilterSelected = (filter) => {
    emit("pageFilterSelected", filter)
}
const resetFilters = () => {
    emit("resetFilters")
}

</script>
<template>
    <div class=" ">
        <div class="block xl:flex justify-evenly border border-1 border-gray-500 rounded-lg p-3.5 items-center ">
            <BaseFilter
                class="border border-1 border-gray-500 rounded-lg bg-slate-800 py-2 w-80 mx-auto"
                ref="resetFiltersDefaultValue"
                :data="props.genres"
                label="Filter by genre"
                id="gender"
                type="select"
                @genreFilterSelected="genreFilterSelected"
            />
            <div class="px-2">
                <BaseButton 
                    @click="resetFilters">
                    Reset Filters
                </BaseButton>
            </div>
            <BaseFilter
                class="border border-1 border-gray-500 rounded-lg bg-slate-800 py-2 w-80 mx-auto"
                type="range"
                label="Filter by pages"
                id="pages"
                min=50
                max=3000
                @pageFilterSelected="pageFilterSelected"
            />
        </div>
    </div>
</template>