import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
  const store = useStore();

  return {
    cartItems: computed(() => store.getters["cart/getCartElements"]),
  };
};
