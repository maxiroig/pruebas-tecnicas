<script setup>
import { ref } from 'vue';
const props = defineProps(["data", "id", "label"])

const filterSelected = ref("")
</script>

<template>
    <div>
        <label class="me-2" :for="id">
            {{ label }}
        </label>
        <select 
            class="text-black rounded-md h-10 w-40"
            v-model="filterSelected" 
            :name="id" 
            :id="id"
        >
            <option v-for="(item, index) in props.data" :key="index" value="filterSelected" >
                {{ item }}
            </option>
        </select>
    </div>
</template>