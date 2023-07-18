import {createRouter, createWebHistory} from "vue-router";
import index from '/src/components/pages/index.vue'
import preview from '/src/components/pages/preview.vue'

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/preview',
    component: preview
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;