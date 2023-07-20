<script setup>
import BaseCardMyList from './global/BaseCardMyList.vue';

const props = defineProps(["data"])
console.log("data", props.data);
</script>
<template>
    <!-- drawer init and toggle -->
    <div class="text-start">
        <button
            class="relative top-5 text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5"
            type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="bottom"
            data-drawer-edge="true" data-drawer-edge-offset="bottom-[60px]" aria-controls="drawer-swipe">
            <span class="relative bottom-3">
                My Books
            </span>
            <lord-icon
                class="relative top-1"
                stroke="80"
                src="https://cdn.lordicon.com/alnsmmtf.json"
                trigger="loop-on-hover"
                colors="primary:#ffffff,secondary:#f49cc8"
                style="width:40px;height:40px">
            </lord-icon>
        </button>
    </div>

    <!-- drawer component -->
    <div id="drawer-swipe"
        class="fixed z-40 w-full bg-slate-800 border-t border-gray-500 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 translate-y-full bottom-[60px] max-h-[365px] overflow-auto"
        tabindex="-1" aria-labelledby="drawer-swipe-label">
        <div class="p-4 cursor-pointer hover:bg-slate-700 dark:hover:bg-gray-700" data-drawer-toggle="drawer-swipe">
            <span class="absolute w-8 h-1 -translate-x-1/2 bg-gray-500 rounded-lg top-3 left-1/2 dark:bg-gray-600"></span>
            <h5 id="drawer-swipe-label"
                class="inline-flex items-center text-base text-gray-500 dark:text-gray-400 font-medium"><svg
                    class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 18 18">
                    <path
                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
                </svg>My Library</h5>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <div 
            v-for="(item, index) in data" :key="index"
            class="rounded-lg dark:hover:bg-gray-600 dark:bg-gray-700 h-[298px] w-[200px]">
                <div
                    class="flex justify-center items-center mx-auto mb-2 bg-slate-800 dark:bg-gray-600">
                    <BaseCardMyList
                        :title="item.book.title"
                        :cover="item.book.cover"
                        :author="item.book.author.name"
                        :genre="item.book.genre"
                        :year="item.book.year"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
