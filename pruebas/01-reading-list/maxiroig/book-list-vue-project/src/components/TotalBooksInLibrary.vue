<script setup>
const props = defineProps(["data"]);

</script>
<template>
    <div class="border border-1 mb-10 xl:mb-0 border-gray-500 rounded-lg bg-slate-800 w-80 h-28 text-center content-center mx-auto">
        <h2 class="text-xl mt-5">
            Books in library
        </h2>
        <div class="text-5xl mx-auto rounded-full w-14 h-14 bg-pink-600">
            <div class="relative top-1 right-1">
                {{ props.data.length }}
            </div>
        </div>
    </div>
</template>