<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios'
import ShowInfo from './ShowInfo.vue';
import SkeletonLoader from './SkeletonLoader.vue';

const route = useRoute()
const router = useRouter()
const characters = ref([])
const charactersFiltereds = ref([])
const totalCharacters = ref("")
const totalLocations = ref("")
const totalEpisodes = ref("")
const selectedGender = ref("")
const selectedStatus = ref("")
const selectedName = ref("")
const dataIsReady = ref(false)
const charactersStatus = [
    "alive",
    "dead",
    "unknown",
]
const genders = [
    'Male',
    'Female',
    "genderless",
    "unknown"
]

const setDataResult = () => {
    getCharacters();
    getLocations();
    getEpisodes();
}
const setCharactersResult = (response) => {
    characters.value = response.results
    totalCharacters.value = response.info.count
    setDisplayCardsByDefault();
}
const setDisplayCardsByDefault = () => {
        charactersFiltereds.value = characters.value.slice(0, 5)
        setUrlByDefault();
}
const setUrlByDefault = () => {
    const parameters = route.query
    if (parameters.gender) selectedGender.value = parameters.gender
    if (parameters.status) selectedStatus.value = parameters.status
}
const filterCharactersBy = () => {
    if (selectedGender.value) {
        axios
            .get(`https://rickandmortyapi.com/api/character/?gender=${selectedGender.value}`)
            .then(response => charactersFiltereds.value = response.data.results)
    }
    if (selectedStatus.value) {
        axios
            .get(`https://rickandmortyapi.com/api/character/?status=${selectedStatus.value}`)
            .then(response => charactersFiltereds.value = response.data.results)
    }
    if (selectedGender.value && selectedStatus.value) {
        axios
            .get(`https://rickandmortyapi.com/api/character/?gender=${selectedGender.value}&status=${selectedStatus.value}`)
            .then(response => charactersFiltereds.value = response.data.results)
    }
    if (selectedStatus.value === "") setDisplayCardsByDefault()
    if (selectedName.value) {
        charactersFiltereds.value = characters.value.filter(character => character.name.toLowerCase().substring(0, selectedName.value.length) === selectedName.value.toLowerCase())
        console.log("filter", charactersFiltereds.value);
    }
}
const resetFiltersButton = () => {
    selectedName.value = "";
    selectedGender.value = ""
    selectedStatus.value = ""
    router.push("/")
    setDisplayCardsByDefault();
}
const getCharacters = async () => {
    const response = await axios
        .get('https://rickandmortyapi.com/api/character')

    setTimeout(() => {
        setCharactersResult(response.data)
        dataIsReady.value = true
    }, 2000);

}
const getLocations = async () => {
    axios
    const response = await axios
        .get('https://rickandmortyapi.com/api/location')
    totalLocations.value = response.data.info.count
}
const getEpisodes = async () => {
    axios
    const response = await axios
        .get('https://rickandmortyapi.com/api/episode')
    totalEpisodes.value = response.data.info.count
}

const handleUrlParameters = () => {
    if (selectedGender.value) {
        router.push({ query: { gender: selectedGender.value } })
    }
    if (selectedStatus.value) {
        router.push({ query: { gender: selectedGender.value } })
    }
    if (selectedGender.value && selectedStatus.value) {
        router.push({ query: { gender: selectedGender.value, status: selectedStatus.value } })
    }
}

watch(selectedGender, () => {
    filterCharactersBy();
    handleUrlParameters();
})
watch(selectedStatus, () => {
    filterCharactersBy()
    handleUrlParameters();
})
onMounted(() => {
    setDataResult();
})
</script>
<template>
    <div class="bg-gray-900 min-h-screen py-24 sm:py-32">
        <div  v-if="dataIsReady" class="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div class="text-center text-5xl mb-12">
                Filter By
            </div>
            <div class="grid">
                <div class="mb-3 grid grid-cols-2">
                    <span class="mr-3 text-end p-2">Name</span>
                    <input @keyup="filterCharactersBy" v-model="selectedName" class="text-black max-w-xs h-10 rounded-md"
                        type="text">
                </div>
                <div class="mb-3 grid grid-cols-2">
                    <span class="mr-3 text-end p-2">Gender</span>
                    <select id="gender" v-model="selectedGender" class="text-black max-w-xs h-10 rounded-md">
                        <option disabled value="selectedGender">
                            Gender
                        </option>
                        <option v-for="(gender, index) in genders" :key="index" :value="gender">
                            {{ gender }}
                        </option>
                    </select>
                </div>
                <div class="grid grid-cols-2">
                    <label class="text-end mr-3 p-2" for="Count">
                        Status
                    </label>
                    <select v-model="selectedStatus" class="text-black max-w-xs h-10 rounded-md">
                        <option v-for="(status, index) in charactersStatus" :key="index" :value="status">
                            {{ status }}
                        </option>
                    </select>
                </div>
            </div>
            <div>
                <button @click="resetFiltersButton" class="bg-pink-500 p-3 mt-5 rounded-md hover:bg-pink-700">
                    Reset filters
                </button>
                <router-link to="/pagination" >
                    <button 
                    class="bg-pink-500 p-3 mt-5 ms-6 rounded-md hover:bg-pink-700">
                        Active pagination
                    </button>
                </router-link>
            </div>
            <div class="mb-6">
                <ul role="list"
                    class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    <li v-for="character in charactersFiltereds" :key="character.id"
                        @click="router.push(`/character/${character.id}`)" 
                        class="rounded-2xl bg-gray-800 px-8 py-10 grow">
                        <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" :src="character.image"
                            :alt="character.name" />
                        <h3
                            class="mt-6 text-base font-semibold leading-7 tracking-tight text-pink-500 hover:text-orange-500 hover:cursor-pointer">
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
                    </li>
                </ul>
            </div>
            <ShowInfo 
            :characters="totalCharacters" 
            :episodes="totalEpisodes" 
            :locations="totalLocations" 
            />
        </div>
        <SkeletonLoader v-else/>
    </div>
</template>

<style>
.green-dot {
    height: 8px;
    width: 8px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
}

.red-dot {
    height: 8px;
    width: 8px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
}

.yellow-dot {
    height: 8px;
    width: 8px;
    background-color: yellow;
    border-radius: 50%;
    display: inline-block;
}
.grow{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.grow:hover{
    transform: scale3d(1.5, 1.5, 0.3);
        -webkit-transform: scale3d(1.1, 1.1, 0.3);
        -moz-transform: scale3d(1.5, 1.5, 0.3);
}
</style>