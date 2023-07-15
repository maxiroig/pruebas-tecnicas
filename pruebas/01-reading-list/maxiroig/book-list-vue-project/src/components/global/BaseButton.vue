<script setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline'

const props = defineProps([""])
</script>

<template>
    <div class="mt-3 self-end">
        <button class="flex p-2 bg-pink-500 rounded-lg mx-auto self-end cursor-pointer">
            <PlusCircleIcon class="h-6 w-6" aria-hidden="true" />
            <slot class="ms-2"></slot>
        </button>
    </div>
</template>