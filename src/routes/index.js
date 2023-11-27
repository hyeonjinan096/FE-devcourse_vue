import {createRouter, createWebHashHistory} from 'vue-router'
import HomeNew from './HomeNew'
import AboutNew from './AboutNew'
import NotFound from './NotFound'
import DocsNew from './DocsNew'
import DocsNewId from './DocsNewId'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeNew
        },
        {
            path: '/about',
            name: 'about',
            component: AboutNew
        },
        {
            path: '/documents',
            component: DocsNew,
            children: [
                // {
                //     path: ':id',   //'/'없음 주의
                //     component: DocsNewId
                // }
            ]
        },
        {
            path: '/documents/:id',   //'/'아님 주의
            name: 'docsId',
            component: DocsNewId
            
        },
        {
            path: '/:notFound(.*)',     //그 외 페이지
            component: NotFound
        }
    ]
})