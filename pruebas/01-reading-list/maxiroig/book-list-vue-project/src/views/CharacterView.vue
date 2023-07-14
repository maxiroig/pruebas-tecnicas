<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted , ref } from 'vue';
import axios from 'axios';

const route = useRoute()
const router = useRouter()
const characterId = ref(route.params)
const character = ref("")
const episodes = ref(null);

const setDataResult = (data) =>{
    character.value = data
    episodes.value = data.episode

    console.log("data", data);
    console.log("episodes", episodes.value.length);
}
const getCharacter = () => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${characterId.value.id}`)
        .then(response => setDataResult(response.data))
}

onMounted(() => {
    getCharacter();    
})

</script>

<template>
    <div class="text-center h-screen overflow-auto">
        <div class="text-center pt-5">
            <button
                @click="router.push('/')" 
                class="rounded-md bg-pink-500 p-3" 
            >
                Back home
            </button>
        </div>
        <div class="w-[300px] mx-auto mt-5">
            <div class="mx-auto"
            v-if="character">
                <div class="rounded-2xl bg-gray-700 px-8 py-10 ">
                    <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" :src="character.image"
                        :alt="character.name" />
                    <h3
                        class="mt-6 text-base font-semibold leading-7 tracking-tight text-pink-500">
                        {{ character.name }}
                    </h3>
                    <p class="text-sm leading-6 text-white-400">
                        <span v-if="character.status === 'Alive' || character.status === 'Dead'"
                            :class="character.status === 'Alive' ? 'green-dot' : 'red-dot'" />
                        <span v-if="character.status === 'unknown'" class="yellow-dot" />
                        {{ character.species }} - {{ character.status }}
                    </p>
                    <p class="text-sm leading-6 text-gray-400">Gender: <span class="text-white">{{ character.gender
                    }}</span></p>
                    <p class="text-sm leading-6 text-gray-400">Last know location: <span class="text-white">{{
                        character.location.name }}</span></p>
                </div>
            </div>
            <div v-else 
            class="card-body">
                <h2 class="card-title skeleton">
                    <!-- wating for title to load from javascript -->
                </h2>
                <p class="card-intro skeleton">
                    <!-- waiting for intro to load from Javascript -->
                </p>
            </div>
        </div>
        <div class="mt-5">
            <h3 class="text-2xl">Episodes:</h3>
            <ul >
                <li
                v-for="(episode, index) in character.episode" :key="index"
                class="hover: cursor-pointer border p-2" 
                :href="episode">
                    {{ episode }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
*,
*:after,
*:before {
    box-sizing: border-box;
}

body {
    font-family: "Inter", sans-serif;
    background-color: #f2f5f7;
}

.card {
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 100%;
    background-color: #FFF;
    box-shadow: 0 5px 10px 0 rgba(#000, .15);
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem;
}

.card-img {
    padding-bottom: 56.25%;
    position: relative;

    img {
        position: absolute;
        width: 100%;
    }
}

.card-body {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.25rem;
    line-height: 1.33;
    font-weight: 700;

    &.skeleton {
        min-height: 28px;
        border-radius: 4px;
    }
}

.card-intro {
    margin-top: .75rem;
    line-height: 1.5;

    &.skeleton {
        min-height: 72px;
        border-radius: 4px;
    }
}

.skeleton {
    background-color: #e2e5e7;
    background-image:
        linear-gradient(90deg,
            rgba(#fff, 0),
            rgba(#fff, 0.5),
            rgba(#fff, 0));
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: shine 1s ease infinite
}

@keyframes shine {
    to {
        background-position: right -40px top 0;
    }
}

.container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>