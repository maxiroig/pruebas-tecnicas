<script setup>
import BaseGrid from './global/BaseGrid.vue';

const props = defineProps(["dataBooks"])

</script>

<template>
        <div class="mb-6">
            <BaseGrid :books="dataBooks"/>
        </div>
</template>