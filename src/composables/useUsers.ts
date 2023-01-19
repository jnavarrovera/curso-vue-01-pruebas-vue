import { computed } from "vue";
import { useStore } from "vuex";

const useUsers = () => {
  const store = useStore();

  return {
    // GETTERS
    users: computed(() => store.getters["users/getUsers"]),
    isLoading: computed(() => store.getters["users/getIsLoading"]),
    user: computed(() => store.getters["users/getUser"]),

    // ACTIONS
    fetchUsers: () => store.dispatch("users/fetchUsers"),
    fetchUserById: (userId: number) =>
      store.dispatch("users/fetchUserById", userId),
  };
};

export default useUsers;
