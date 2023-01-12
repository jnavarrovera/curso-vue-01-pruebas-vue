<template>
  <label for="">Seleccionar color</label>
  <!-- <select v-model="color">
    <option value="red">Rojo</option>
    <option value="green">Verde</option>
    <option value="blue">Azul</option>
  </select> -->

  <h4>Color seleccionado: {{ color }}</h4>
  <br />
  <input type="text" v-model.lazy="texto" />
  <h4>Texto: {{ texto }}</h4>

  <br />
  <input type="number" v-model.number="numero" />
  <h4>Numero: {{ numero }}</h4>

  <input type="color" v-model="color" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const color = ref<string>("#ececec");
    const texto = ref<string>("");
    const numero = ref<number>(0);
    return {
      color,
      texto,
      numero
    };
  },
});
</script>
