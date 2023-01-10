<template>
  <NavBar
    title="Hola Mundo"
    :color="'red'"
    :links="[
      { label: 'Facebook', link: 'https://facebook.es' },
      { label: 'Twitter', link: 'https://twitter.es', style:'important-link' },
    ]"
    @buttonClicked="alertaClick($event)"
  />
  <!-- Son equivalentes  -->
  <!-- @buttonClicked="alertaClick($event)" -->
  <!-- @buttonClicked="alertaClick" -->


  <!-- <router-view /> -->

</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import { Link } from "./interfaces/link";

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
  },
  setup() {
    const hola = () => alert('hola');
    return {
      alertaClick: (link: Link) => alert(link.label + ' Pulsado!'),
      hola, // sólo hay que devolver elementos que se usen en el template
    }
  }
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
