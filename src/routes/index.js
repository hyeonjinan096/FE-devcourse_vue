import {createRouter, createWebHashHistory} from 'vue-router'
import HomeNew from './HomeNew'
import AboutNew from './AboutNew'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomeNew
        },
        {
            path: '/about',
            component: AboutNew
        },
        {
            path: '/:notFound(.*)',     //그 외 페이지
            component: NotFound
        }
    ]
})