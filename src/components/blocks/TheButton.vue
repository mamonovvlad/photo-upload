<script setup>
import {defineProps, computed} from 'vue';

const props = defineProps({
  link: {
    type: String,
    required: true,
  }
})
const link = computed(() => {
  return props.link;
})
</script>

<template>
  <router-link class="inline-block text-white rounded-lg bg-red-500 hover:bg-red-700 p-2 duration-500" :to="link">
    <slot></slot>
  </router-link>
</template>

<style scoped>

</style>