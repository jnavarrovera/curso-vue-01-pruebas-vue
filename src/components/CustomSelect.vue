<template>
  <label for="">Seleccionar color</label>
  <select v-model="color">
    <option value="red">Rojo</option>
    <option value="green">Verde</option>
    <option value="blue">Azul</option>
  </select>

  <h4>Color seleccionado: {{ colorLabel }}</h4>
  <br />
  <input type="text" v-model.lazy="texto" />
  <h4>Texto: {{ texto }}</h4>

  <br />
  <input type="number" v-model.number="numero" />
  <h4>Numero: {{ numero }}</h4>

  <h3>{{ now }}</h3>

  <!-- <input type="color" v-model="color" /> -->
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  watch,
} from "vue";

export default defineComponent({
  setup() {
    const color = ref<string>("red");
    const texto = ref<string>("");
    const numero = ref<number>(0);

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    watch(color, (value: string, oldvalue: string) => {
      alert(`Has cambiado el color de ${oldvalue} a ${value}`);
    });

    return {
      color,
      texto,
      numero,

      colorLabel: computed(() =>
        color.value === "red"
          ? "Rojo"
          : color.value === "green"
          ? "Verde"
          : "Azul"
      ),
      now: computed(() => new Date().toDateString()),
    };
  },
});
</script>
