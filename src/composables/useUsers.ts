import { computed } from "vue";
import { useStore } from "vuex"

const useUsers = () => {
    const store = useStore();

    return {
        // GETTERS
        users: computed(()=> store.getters['users/getUsers']),
        isLoading: computed(()=> store.getters['users/getIsLoading']),

        // ACTIONS
        fetchUsers: () => store.dispatch('users/fetchUsers')
    }
}

export default useUsers;