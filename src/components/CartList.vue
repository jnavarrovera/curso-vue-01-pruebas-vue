<template>
  <div class="cart">
    <div class="cart-header">
      <h2>Mi Carrito {{ cartItems.length }}</h2>
    </div>
    <div class="cart-items">
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <button class="btn btn-primary">Comprar</button>
    </div>
  </div>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
import {useCart} from '../composables/useCart'

export default defineComponent({
  setup() {
    const {cartItems} = useCart()

    return {
      cartItems
    }
  },
})
</script>


<style scoped>
.cart {
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  border: 1px solid black;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  background-color: lightgray;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.cart-header,
.cart-footer {
  background-color: grey;
  height: 50px;
  width: 100%;
}
</style>