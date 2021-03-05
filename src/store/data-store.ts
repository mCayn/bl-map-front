import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// const state = Vue.observable({
// });
const store = new Vuex.Store({
  state: {
    occupations: [
      {
        userName: 'Forslin',
        userId: 1,
        roomId: 4,
        roomName: 'dev nere',
        id: 1,
        lastUpdate: 'nyligen',
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
export default store;
