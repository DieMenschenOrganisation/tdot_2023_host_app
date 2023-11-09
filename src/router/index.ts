import { createRouter, createWebHistory } from 'vue-router'
import SelectView from "@/views/SelectView.vue";
import PayoutView from "@/views/PayoutView.vue";
import GamesView from "@/views/GamesView.vue";
import AdminView from "@/views/AdminView.vue";
import RouletteSelectionView from "@/views/RouletteSelectionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/select_host",
      name: "select_host",
      component: SelectView
    },
    {
      path: "/payout",
      name: "payout",
      component: PayoutView
    },
    {
      path: "/games",
      name: "games",
      component: GamesView
    },
    {
      path: "/roulette",
      name: "roulette",
      component: RouletteSelectionView
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView
    }
  ]
})

export default router
