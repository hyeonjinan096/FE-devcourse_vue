import { createRouter, createWebHistory } from 'vue-router';
import AboutNew from './AboutNew';
import HomeNew from './HomeNew';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeNew,
    },
    {
      path: '/about',
      component: AboutNew,
    },
  ],
});
