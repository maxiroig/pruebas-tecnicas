<script setup>
const props = defineProps(["data"]);
</script>
<template>
    <div class="">
        <h2 class="text-4xl ms-2">
            Total Books: 
            {{ props.data }}
        </h2>
    </div>
</template>