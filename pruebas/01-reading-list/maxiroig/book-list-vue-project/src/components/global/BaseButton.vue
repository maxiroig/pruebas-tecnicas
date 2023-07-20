<script setup>

</script>

<template>
  <div class="self-end">
    <button class="flex p-2 bg-pink-600 hover:bg-pink-500 rounded-lg mx-auto self-end cursor-pointer grow">
      <slot class="ms-2"></slot>
    </button>
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
      -webkit-transform: scale3d(1.1, 1.1, 0.3);
      -moz-transform: scale3d(1.5, 1.5, 0.3);
}
</style>
