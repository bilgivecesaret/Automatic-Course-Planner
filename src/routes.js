import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import Result from "./components/Result.vue";

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: '/', component: HomePage},
        {path: '/createdSchedule', component: Result}
    ]
});

export default router