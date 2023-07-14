<script setup>
const props = defineProps(["characters", "locations", "episodes"])
</script>
<template>
    <div class="text-center mt-4">
        <span class="text-gray-500 mr-5">
            CHARACTERS: <span class="text-white">{{ props.characters }}</span>
        </span>
        <span class="text-gray-500 mr-5">
            LOCATIONS: <span class="text-white">{{ props.locations }}</span>
        </span>
        <span class="text-gray-500 ">
            EPISODES: <span class="text-white">{{ props.episodes }}</span> </span>
        </div>
</template>