<script setup>
import TotalAvailableBooks from '@/components/TotalAvailableBooks.vue';
</script>

<template>
    <div>
        <TotalAvailableBooks :data="dataBooks.length" />
    </div>
</template>
