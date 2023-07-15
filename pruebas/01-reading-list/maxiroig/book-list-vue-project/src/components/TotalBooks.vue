<script setup>
import BaseText from './global/BaseText.vue';
const props = defineProps(["totalBooks"]);
</script>
<template>
    <div>
        <BaseText>
            Total Books: {{ props.totalBooks }}
        </BaseText>
    </div>
</template>


<style lang="scss" scoped>

</style>