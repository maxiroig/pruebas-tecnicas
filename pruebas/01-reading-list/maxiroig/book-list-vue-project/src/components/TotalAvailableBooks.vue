<script setup>
import BaseText from './global/BaseText.vue';
const props = defineProps(["data"]);
</script>
<template>
    <div>
        <BaseText>
            Total Books: {{ props.data }}
        </BaseText>
    </div>
</template>


<style lang="scss" scoped>

</style>