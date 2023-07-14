<script setup>
/* import { ref } from 'vue'; */

/* const actualPage = ref("");
const defaultPage = ref(""); */

</script>
<template>
    <div class="flex items-center justify-between border-t border-white bg-gray-800px-4 py-3 sm:px-6 text-white">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#"
                class="relative inline-flex items-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-500">Previous</a>
            <a href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-500">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-white">
                    Showing
                    {{ ' ' }}
                    <span class="font-medium">1</span>
                    {{ ' ' }}
                    to
                    {{ ' ' }}
                    <span class="font-medium">10</span>
                    {{ ' ' }}
                    of
                    {{ ' ' }}
                    <span class="font-medium">97</span>
                    {{ ' ' }}
                    results
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a href="#"
                        class="relative inline-flex items-center rounded-l-md px-2 py-2 ttext-white ring-1 ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">
                            Previous
                        </span>
                        <span class="h-8 w-5 rotate-180" aria-hidden="true"> 
                            >
                        </span>
                        
                    </a>
                    <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:outline-offset-0" -->
                    <a href="#" aria-current="page"
                        class="relative z-10 inline-flex items-center bg-pink-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        1
                    </a>
                    <a href="#"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0">
                        2
                    </a>
                    <a href="#"
                        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0 md:inline-flex">
                        3
                    </a>
                    <a href="#"
                        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0 md:inline-flex">
                        4
                    </a>
                    <a href="#"
                        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0 md:inline-flex">
                        5
                    </a>
                    <a href="#"
                        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0 md:inline-flex">
                        6
                    </a>
                    <a href="#"
                        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0 md:inline-flex">
                        7
                    </a>
                    <a href="#"
                        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0 md:inline-flex">
                        8
                    </a>
                    <a href="#"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0">
                        9
                    </a>
                    <a href="#"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0">
                        10
                    </a>
                    <a href="#"
                    class="relative inline-flex items-center rounded-r-md px-2 py-2 ttext-white ring-1 ring-inset ring-gray-300 hover:bg-gray-500 focus:z-20 focus:outline-offset-0">
                    <span class="sr-only">
                        Next
                    </span>
                    <span> > </span>
                </a>
            </nav>
        </div>
    </div>
</div></template>
  