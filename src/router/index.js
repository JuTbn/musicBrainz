import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue'
import Titles from '@/views/Titles.vue'
import Artists from '@/views/Artists.vue'
import Title from '@/views/Title.vue'
import Artist from '@/views/Artist.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    }, {
        name: 'Artists',
        path: '/Artists/:name',
        component: Artists,
        props : true,
    }, {
        name: 'Titles',
        path: '/Titles/:name',
        component: Titles,
        props : true,
    },{
        name: 'Artist',
        path: '/Artist/:name',
        component: Artist,
        props : true,
    }, {
        name: 'Title',
        path: '/Title/:id',
        component: Title,
        props : true,
    }

];

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router