<template>
  <NavBar
    title="Odio Vue"
    :color="'blue'"
    :links="[
      { label: 'Facebook', link: 'https://facebook.es' },
      { label: 'Twitter', link: 'https://twitter.es', style: 'important-link' },
    ]"
    @buttonClicked="alertaClick($event)"
  />
  <NavBarLinks />

  <router-view />

  <!-- <DetailView
   :id="4"
   userRole="desde componente"
  ></DetailView> -->
  <CartList v-show="isCartOpen" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";
import { Link } from "./interfaces/link";
import CartList from "./components/CartList.vue";
import { useCart } from "./composables/useCart";
// import DetailView from "./views/DetailView.vue"

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    NavBarLinks,
    CartList,
    // DetailView
  },
  setup() {
    const { isCartOpen } = useCart();
    const hola = () => alert("hola");

    return {
      alertaClick: (link: Link) => alert(link.label + " Pulsado!"),
      hola, // sólo hay que devolver elementos que se usen en el template
      isCartOpen,
    };
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
