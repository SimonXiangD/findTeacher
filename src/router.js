import { createRouter, } from "vue-router";
import { createWebHistory } from "vue-router";

import TeachersList from './pages/teachers/TeachersList.vue'
import TeacherDetail from './pages/teachers/TeacherDetail.vue'
import ContactTeacher from './pages/requests/ContactTeacher.vue'
import registerTeacher from './pages/requests/RegisterTeacher.vue'
import RequestsList from './pages/requests/RequestsList.vue'
import notFound from './components/notFound/notFound.vue'
import userAuth from "./pages/auth/userAuth.vue";

const routes = [
    {
        path: '/',
        redirect: '/teachers',
        // component: null,
    },

    {
        path: '/home',
        redirect: '/teachers',
    },

    {
        path: '/teachers',
        component: TeachersList,
    },

    {

        path: '/teachers/:id',
        component: TeacherDetail,
        props: true,
        children: [
            {
                path: 'contact',
                component: ContactTeacher,
            }
        ]

    },

    {
        path: '/register',
        component: registerTeacher
    },

    {
        path: '/requests',
        component: RequestsList,
    },

    {
        path: '/auth',
        component: userAuth,
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: notFound },


]

const router = createRouter({

    history: createWebHistory(),
    routes

})

// 可以用 meta 和 router.beforeEach 作 navigation guard


export default router