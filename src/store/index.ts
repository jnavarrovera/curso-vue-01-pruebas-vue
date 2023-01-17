import { createStore } from "vuex";

export default createStore({
  state: {
    authUser: {
      id: 5,
      email: "hola@email.com",
      name: "Pepe",
    },
    greeting: "Hola a todas!",
  },
  mutations: {
    cambiaSaludo(state, saludo: string) {
      state.greeting = saludo;
    },
  },
  getters: {
    saludo(state) {
      return state.greeting;
    }
  },
  actions: {},
  modules: {},
});
