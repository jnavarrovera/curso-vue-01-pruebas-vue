<template>
    <div>
        <h1>Detalle: {{ id }}</h1>
        <h2>Role: {{ userRole }}</h2>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true
        },
        userRole: String
    },
     setup() {      

        return {}
    },
})
</script>

