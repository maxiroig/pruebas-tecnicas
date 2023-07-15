<script setup>
import { PlusCircleIcon } from "@heroicons/vue/24/outline";

const props = defineProps([""]);
</script>

<template>
  <div class="self-end">
    <button
      class="flex p-2 bg-pink-600 hover:bg-pink-500 rounded-lg mx-auto self-end cursor-pointer swing"
    >
      <PlusCircleIcon class="h-6 w-6" aria-hidden="true" />
      <slot class="ms-2"></slot>
    </button>
  </div>
</template>

<style scoped>
.swing:hover {
  animation-name: swing;
  -webkit-animation-name: swing;
  -moz-animation-name: swing;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
}

@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
</style>
