<template>
    <div>
        <input v-model="name" placeholder="Tu nombre!">
        <div v-if="name">
        {{ name }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null
        }
    }
}
</script>