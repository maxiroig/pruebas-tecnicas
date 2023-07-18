<script setup>
import BaseGrid from './global/BaseGrid.vue';

const props = defineProps(["dataBooks"])
const emit = defineEmits(["bookSelected"])

const bookSelected = (id) => {
    emit ("bookSelected", id);
}
</script>

<template>
        <div class="mb-6">
            <BaseGrid 
            :books="props.dataBooks"
            @bookSelected="bookSelected"
            />
        </div>
</template>