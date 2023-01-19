<template>
  <div v-if="!isLoading">
    <h1>Nombre: {{ user.name }}</h1>
    <h2>Email: {{ user.email }}</h2>
    <img :src="user.avatar" alt="" />
    <h2>Role: {{ userRole }}</h2>

    <button @click="addElementToCart(user)" class="btn btn-success">
      Añadir al Carrito
    </button>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { useCart } from "@/composables/useCart";
import useUsers from "@/composables/useUsers";
import { defineComponent } from "vue";


export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
  setup(props) {
    const { addElementToCart } = useCart();
    const { user, fetchUserById, isLoading } = useUsers();
    // let user = ref<User>();
    // fakeShopAPI
    //   .get<unknown, AxiosResponse<User>>(`/users/${props.id}`)
    //   .then((resp) => (user.value = resp.data));
    fetchUserById(props.id);
    return {
      user,
      addElementToCart,
      isLoading
    };
  },
});
</script>

