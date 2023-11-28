import router from './index';
import store from '~/store';

router.beforeEach((to) => {
  console.log(store);
  if (to.meta.requiresAuth && !store.state.user.isLoggedIn) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }, //login완료 후 이동
    };
    //
  }
}); //전역, 페이지 접근 이전에 콜백 작동
