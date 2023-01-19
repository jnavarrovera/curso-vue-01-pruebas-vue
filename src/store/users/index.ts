import { Module } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const usersModule: Module<IUsersState, IState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default usersModule;

// interface MiInterface<S, R> {
//   var1: S;
//   func1: () => R;
// }

// const instacia: MiInterface<string, boolean> = {
//   var1: 'hola',
//   func1() {
//     return false;
//   },
// };
// const instaciaotra: MiInterface<number, OtraInterfaz> = {
//   var1: 'hola',
//   func1() {
//     return false;
//   },
// };

// interface OtraInterfaz {
//   var1: number;
//   func1: () => boolean;
// }

// const instacia2: OtraInterfaz = {
//   var1: 3,
//   func1() {
//     return true;
//   },
// };
