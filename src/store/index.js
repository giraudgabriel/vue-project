import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: "",
    senha: "",
    isAdmin: false,
  },
  mutations: {
    setUsuario(state, valor) {
      state.usuario = valor;
    },
    setSenha(state, valor) {
      state.senha = valor;
    },
    setIsAdmin(state, valor) {
      state.isAdmin = valor;
    },
  },
  actions: {},
  modules: {},
});
