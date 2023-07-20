<script setup>
const props = defineProps(["title", "cover", "author", "genre", "ISBN", "year", "pages", "synopsis"])
</script>
<template>
    <div class="w-full min-h-[290px] mt-2 ms-4 max-w-sm  bg-slate-800 border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div class="text-end">
            <lord-icon
                class="cursor-pointer grow"
                data-tooltip-target="tooltip-remove"
                src="https://cdn.lordicon.com/qqedoixr.json"
                trigger="loop-on-hover"
                stroke="80"
                colors="primary:#db2777,secondary:#ec4899"
                style="width:22px;height:22px">
            </lord-icon>
            <div id="tooltip-remove" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Remove
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>  
        </div>
        <div>
            <img class="mx-auto pb-3 pt-1 rounded-t-lg h-[150px] cursor-default" :src="props.cover" :alt="title" />
        </div>
        <div class="ps-8 ">
            <div class="flex justify-between">
                <h5 class="text-xs font-semibold tracking-tight text-pink-600">
                    {{ title }}
                </h5>
                
            </div>
            <div class="flex items-center mt-2.5 mb-5">
                <svg class="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-3 h-3 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-3 h-3 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-0.5 py-0.2 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
            </div>
            <div class="">
                <p class="text-xs leading-4 text-gray-400">
                    Author:
                    <span class="text-white text-xs leading-4">
                        {{ author }}
                    </span>
                </p>
                <p class="text-xs leading-4 text-gray-400">
                    Genre:
                    <span class="text-white text-xs leading-4">
                        {{ genre }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grow{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
  }
  .grow:hover{
    transform: scale3d(1.5, 1.5, 0.3);
        -webkit-transform: scale3d(1.7, 1.7, 0.3);
        -moz-transform: scale3d(1.5, 1.5, 0.3);
  }
</style>