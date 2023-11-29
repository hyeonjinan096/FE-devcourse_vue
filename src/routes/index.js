import { createRouter, createWebHistory } from 'vue-router';
import HomeNew from './HomeNew';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: HomeNew,
    },
  ],
});
