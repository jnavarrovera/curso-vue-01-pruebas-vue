import { GetterTree } from "vuex";
import { IState } from "..";
import { ICartState } from "./state";

const getters: GetterTree<ICartState, IState> = {
  getCartElements(state) {
    return state.users;
  },

  getIsOpen(state) {
    return state.isOpen;
  },
};

export default getters;
