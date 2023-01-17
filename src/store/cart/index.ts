import { Module } from "vuex";
import state, { ICartState } from "./state";
import mutations from "./mutations";
import { IState } from "..";
import getters from "./getters";

const cartModule: Module<ICartState, IState> = {
  namespaced: true,
  state,
  mutations,
  getters
};

export default cartModule;
