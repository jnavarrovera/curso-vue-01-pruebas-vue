import fakeShopApi from "@/api/fakeShopApi";
import { User } from "@/models/user";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const actions: ActionTree<IUsersState, IState> = {
  async fetchUsers({ commit }) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<User[]>>(
      "/users"
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setUsers", data);
  },
  async fetchUserById({ commit }, userId: number) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<User>>(
      `/users/${userId}`
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setSelectedUser", data);
  },
};

export default actions;
