<template>
  <div v-if="user">
    <h1>Nombre: {{ user.name }}</h1>
    <h2>Email: {{ user.email }}</h2>
    <img :src="user.avatar" alt="">
    <h2>Role: {{ userRole }}</h2>
  </div>
  <div v-else>
    Cargando...
  </div>
</template>

<script lang="ts">
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
    let user = ref<User>();
    fakeShopAPI
      .get<unknown, AxiosResponse<User>>(`/users/${props.id}`)
      .then((resp) => user.value = resp.data);
    return {user};
  },
});
</script>

