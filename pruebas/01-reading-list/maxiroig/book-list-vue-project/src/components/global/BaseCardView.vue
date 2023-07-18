<template>
    <div>
        <div class="text-end">
            <span>
                <lord-icon
                    data-tooltip-target="tooltip-add"
                    src="https://cdn.lordicon.com/ytuosppc.json"
                    trigger="loop-on-hover"
                    colors="primary:#e8308c,secondary:#cb5eee"
                    stroke="80"
                    style="width:30px;height:30px">
                </lord-icon>
                <div id="tooltip-add" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Add to list
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div> 
            </span>
        </div>
        <img 
            class="mx-auto h-48 w-48 md:h-56 md:w-56" 
            :src="props.cover" 
            :alt="title" 
        />
        <h3 class="text-base font-semibold mt-3 tracking-tight text-pink-500 hover:text-pink-400 hover:cursor-pointer">
            {{ title }}
        </h3>
        <div>
            <p class="text-sm leading-6 text-gray-400">
                Author:
                <span class="text-white">
                    {{ author }}
                </span>
            </p>
            <p class="text-sm leading-6 text-gray-400">
                Genre:
                <span class="text-white">
                    {{ genre }}
                </span>
            </p>
        </div>
    </div>
</template>

<script setup>
</script>