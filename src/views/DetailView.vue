<template>
    <div>
        <h1>Detalle: {{ id }}</h1>
    </div>    
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
     setup() {
        const route = useRoute();

        console.log(route.params)

        const id = ref<string>(route.params.id as string);

        return {id}
    },
})
</script>

