import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import Course from "./components/EditCourse.vue";
import Classroom from "./components/EditClassroom.vue";
import Service from "./components/EditService.vue";
import Busy from "./components/EditBusy.vue";
import Result from "./components/Result.vue";

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: '/', component: HomePage},
        {path: '/course', component: Course},
        {path: '/classroom', component: Classroom},
        {path: '/service', component: Service},
        {path: '/busy', component: Busy},
        {path: '/plannedCourse', component: Result}
    ]
});

export default router