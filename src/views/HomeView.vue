<template>
  <div class="home">
    <div v-if="isLoading">Cargando...</div>
    <div class="user-list" v-else>
      <UserItem v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script lang="ts">
import useUsers from "@/composables/useUsers";
import { defineComponent } from "vue";
import UserItem from "@/components/UserItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    UserItem,
  },
  setup() {
    const { users, isLoading, fetchUsers } = useUsers();

    fetchUsers();

    return { users, isLoading };
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
