<template>
  <NavBar
    title="Hola Mundo"
    :color="'red'"
    :links="[
      { label: 'Facebook', link: 'https://facebook.es' },
      { label: 'Facebook', link: 'https://facebook.es' },
    ]"
  />
  <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
  },
});
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
