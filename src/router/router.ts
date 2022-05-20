import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from './../layouts/Home.vue'
import Detalhar from './../layouts/Detalhar.vue'


const routes: RouteRecordRaw[] = [

    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/detalhar/:id',
        name: 'Detalhar',
        component: Detalhar,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })

  export default router