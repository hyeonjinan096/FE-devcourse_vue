import { defineStore } from 'pinia';

export const useNumberStore = defineStore('number', {
  state: () => ({
    number: 1,
  }),
  getters: {
    double(state) {
      return state.number * 2;
    },
  },
  actions: {
    increase() {
      //const{state, getters, commit,dispatch} = context
      this.number += 1;
    },
    decrease() {
      this.number -= 1;
    },
  },
});
