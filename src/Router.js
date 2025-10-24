import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./components/HomeComponent.vue"; 
import CineComponent from "./components/CineComponent.vue"; 
import MusicaComponent from "./components/MusicaComponent.vue"; 
import PruebaComponent from "./components/PruebaComponent.vue";

const myRoute = [
    {path: "/home", component: HomeComponent},
    {path: "/musica", component: MusicaComponent},
    {path: "/cine", component: CineComponent},
    {path: "/prueba", component: PruebaComponent},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoute
})

export default router;