<script setup>
import BaseFilter from './global/BaseFilter.vue';
</script>
<template>
    <div>
        <BaseFilter
        :data="['testuno', 'testdos', 'testtres']"
        label="Select a Gender"
        id="gender"
        />
    </div>
</template>


<style lang="scss" scoped>

</style>