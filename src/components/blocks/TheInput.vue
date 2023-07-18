<script setup>
import TheListFiles from "./TheListFiles.vue";
import {useUploads} from "../../stores/uploads.js";

const uploads = useUploads();

</script>

<template>
  <label class="label">
    <input class="hidden" type="file" @change="uploads.gettingFiles" name="file">
    <span
        class="block text-gray-500 bg-gray-200 p-5 rounded-md text-center">
      Перетащите файл в поле или нажмите на него
    </span>
  </label>
  <the-list-files></the-list-files>
</template>

<style lang="scss">

</style>