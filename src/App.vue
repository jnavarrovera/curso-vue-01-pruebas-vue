<template>
  <NavBar
    title="Hola Mundo"
    :color="'red'"
    :links="[
      { label: 'Facebook', link: 'https://facebook.es' },
      { label: 'Twitter', link: 'https://twitter.es', style: 'important-link' },
    ]"
    @buttonClicked="alertaClick($event)"
  />
  <!-- Son equivalentes  -->
  <!-- @buttonClicked="alertaClick($event)" -->
  <!-- @buttonClicked="alertaClick" -->
  <br /><br />

  <!-- <custom-button>
    <span style="font-size: xx-large">desde el slot</span>
    <template v-slot:left-icon>
      <span>usuario </span>
    </template>
    <template v-slot:right-icon>
      <span> buscar</span>
    </template>
  </custom-button> -->
  <CustomSelect />
  <br />
  <custom-card>
    <template v-slot:header>
      <h3>Card header</h3>
    </template>
    <template v-slot:body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sint
        odio, ex culpa quam sequi veritatis. Velit perspiciatis obcaecati
        voluptas. Velit tempore odio vel! Itaque cupiditate accusamus eos
        temporibus repellat.
      </p>
      <CustomButton>
        hola
      </CustomButton>
    </template>
    <template v-slot:footer>
      <div>
        <span style="color: purple">Footer</span>
      </div>
    </template>
  </custom-card>

  <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import CustomButton from "@/components/CustomButton.vue";
import CustomCard from "@/components/CustomCard.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import { Link } from "./interfaces/link";

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    CustomButton,
    CustomCard,
    CustomSelect
  },
  setup() {
    const hola = () => alert("hola");
    return {
      alertaClick: (link: Link) => alert(link.label + " Pulsado!"),
      hola, // sólo hay que devolver elementos que se usen en el template
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
