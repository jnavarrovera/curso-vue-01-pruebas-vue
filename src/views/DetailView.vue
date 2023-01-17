<template>
  <div v-if="user">
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
import { AxiosResponse } from "axios";
import { defineComponent, ref } from "vue";
import fakeShopAPI from "../api/fakeShopApi";
import { User } from "../models/user";

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
    let user = ref<User>();
    fakeShopAPI
      .get<unknown, AxiosResponse<User>>(`/users/${props.id}`)
      .then((resp) => (user.value = resp.data));
    return {
      user,
      addElementToCart,
    };
  },
});
</script>

