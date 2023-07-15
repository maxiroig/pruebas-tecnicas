<script setup>
import BaseText from './global/BaseText.vue';
const props = defineProps(["data"]);
</script>
<template>
    <div>
        <BaseText class="text-4xl ms-2">
            Total Books: {{ props.data }}
        </BaseText>
    </div>
</template>