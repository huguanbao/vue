import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import recomment from './recomment'
import singer from './singer'
import ranking from './ranking'
import my from './my'

let router = new VueRouter({
     routes: [
        {
            path: '/recomment',
            component: recomment
        },
        {
            path: '/singer',
            component: singer
        },
        {
            path: '/ranking',
            component: ranking
        },
        {
            path: '/my',
            component: my
        },
        {
            path:'/',
            redirect: '/recomment'
        }
    ]
})

export default router