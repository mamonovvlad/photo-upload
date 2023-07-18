<script setup>
import {useUploads} from "../../stores/uploads.js";

const uploads = useUploads();
import TheClose from "../icons/TheClose.vue";
import TheIcon from "../icons/TheIcon.vue";
</script>

<template>
  <template v-if="uploads.files.length > 0">
    <div class="flex justify-between items-center mt-5" v-for="(file, idx) in uploads.files" :key="idx">
      <div class="flex items-center">
        <the-icon></the-icon>
        <span class="font-semibold"> {{ file.filename }}</span>
      </div>
      <button class="bg-red-300 h-5 w-5 rounded flex justify-center items-center" @click="uploads.removeFiles(idx)">
        <the-close></the-close>
      </button>
    </div>
  </template>
</template>

<style scoped>

</style>