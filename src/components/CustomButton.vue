<template>
    <button @click="$emit('clicked')">
        <slot name="left-icon"></slot>
        <slot></slot>
        <slot name="right-icon"></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: 'CustomButton',
});

</script>
