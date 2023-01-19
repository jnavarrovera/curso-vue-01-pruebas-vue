<template>
  <div class="user-item">
    <div class="user-avatar">
      <img :src="user.avatar" :alt="user.name" />
    </div>
    <div class="user-info">
      <div class="user-name">{{ user.name }}</div>
      <div class="user-email">{{ user.email }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { User } from "@/models/user";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>

<style scoped>
.user-item {
    width: 300px;
    display: flex;
    border: 1px solid black;

}

.user-avatar {
    width: 50%;

}
.user-avatar > img {
    width: 100%;
    height: auto;
}
</style>
