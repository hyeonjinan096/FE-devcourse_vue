import { createRouter, createWebHistory } from 'vue-router';
import AboutNew from './AboutNew';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/about',
      component: AboutNew,
    },
  ],
});
