import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { ICartState } from "./state";

const mutations: MutationTree<ICartState> = {
  addElement(state, element: User) {
    state.users.push(element);
  },
  removeElement(state, element: User) {
    const tmp = state.users.filter((u) => u.id !== element.id);
    state.users = tmp;
  },
  toggleCart(state) {
    state.isOpen = !state.isOpen;
  },
};

export default mutations;
