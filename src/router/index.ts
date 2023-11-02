import { createRouter, createWebHistory } from 'vue-router'
import SelectView from "@/views/SelectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/select_host",
      name: "select_host",
      component: SelectView
    }
  ]
})

export default router
