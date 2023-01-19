<template>
  <div class="home">
    <div v-if="isLoading">Cargando...</div>
    <div class="user-list" v-else>
      <UserItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        @addCart="addElementToCart"
        @goDetail="goDetail"
      />
    </div>
  </div>
</template>

<script lang="ts">
import useUsers from "@/composables/useUsers";
import { defineComponent } from "vue";
import UserItem from "@/components/UserItem.vue";
import { useCart } from "@/composables/useCart";
import { User } from "@/models/user";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomeView",
  components: {
    UserItem,
  },
  setup() {
    const { users, isLoading, fetchUsers } = useUsers();
    const { addElementToCart } = useCart();
    const router = useRouter();

    fetchUsers();

    return {
      users,
      isLoading,
      addElementToCart,
      goDetail: (user: User) =>
        router.push({ name: "detail", params: { id: user.id } }),
    };
  },
});
</script>

<style scoped>
.user-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>
