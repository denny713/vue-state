import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    async incrementAsync({ commit }) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("increment");
    },
  },
});

export default store;
