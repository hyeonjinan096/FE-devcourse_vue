import router from '~/routes';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    updateLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    initialize({ commit }) {
      if (localStorage.getItem('isLoggedIn')) {
        commit('updateLoggedIn', true);
      }
    },
    logIn({ commit }, payload) {
      const { id, pw } = payload;
      if (id && pw) {
        localStorage.setItem('isLoggedIn', true);
        commit('updateLoggedIn', true);
        console.log(router);
        const { redirect } = router.currentRoute.value.query;
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      }
    },
    logOut({ commit }) {
      localStorage.removeItem('isLoggedIn', true);
      commit('updateLoggedIn', false);
      const { requiresAuth } = router.currentRoute.value.meta;
      if (requiresAuth) {
        router.push('/');
      }
    },
  },
};
