import { createRouter, createWebHistory } from 'vue-router';
import AboutNew from './AboutNew';
import HomeNew from './HomeNew';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }; //스크롤 위치 초기화
  },
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
