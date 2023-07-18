import {defineStore} from "pinia";
import {reactive} from 'vue'

export const useUploads = defineStore('uploads', () => {
  let files = reactive([])

  const gettingFiles = (event) => {
    let target = event.target.files;
    for (let i = 0; i < target.length; i++) {
      files.push({
        filename: target[i].name,
        extention: target[i].type,
        size: target[i].size,
      })
    }
  }
  const removeFiles = (index) => {
    files.splice(index, 1);
  }
  return {files, removeFiles,gettingFiles}
})