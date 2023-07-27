<script setup>
const props = defineProps(["data"]);
</script>

<template>
    <div class="">
        <div class=" border border-1 border-gray-500 rounded-lg bg-slate-800 py-2 h-28 w-80 text-center mx-auto">
            <div class="text-xl mt-3">
                Books in my List
            </div>
            <div class="text-5xl mx-auto rounded-full w-14 h-14 bg-pink-600">
                <div class="relative top-1 left-0">
                    {{ props.data.length }}
                </div>
            </div>
        </div>
    </div>
</template>

