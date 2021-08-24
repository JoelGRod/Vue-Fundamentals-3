<template>
    <h1>Pokemon: #{{ pokemonId }} </h1>
</template>

<script>
export default {
    
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // pokemonId: null
        }
    },

    created() {
        // This is usefull for query params, for params use props
        // this.pokemonId = this.$route.params.id
    }
}
</script>