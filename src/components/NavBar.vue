<template>
  <nav :class="{'bg-red':color==='red'}">
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <div class="links" v-if="links">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.link"
        
        target="_blank"
        >{{ link.label }}</a
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/link";

export default defineComponent({
  name: "NavBar",
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array as PropType<Link[]>,
      default(): Link[] {
        return [
          { label: "cosa", link: "http://www.google.es" },
          { label: "Vue", link: "https://vuejs.org" },
        ];
      },
    },
    color: {
      type: String
    }
  },
});
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
}
h4 {
  color: white;
}
.links,
.title {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}
.bg-red {
  background-color: red;
}
</style>