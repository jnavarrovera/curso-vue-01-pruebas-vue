import { GetterTree } from "vuex";
import { IState } from "..";
import { ICartState } from "./state";

const getters: GetterTree<ICartState, IState> = {
  getCartElements(state) {
    return state.users;
  },
};

export default getters;
