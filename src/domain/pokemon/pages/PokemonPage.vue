<template>
  <h1>
    Pokemon: <span> #{{ pokemonId }} </span>
  </h1>
  <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // pokemonId: null
      pokemon: null,
    };
  },
  watch: {
    pokemonId(value, oldValue) {
      this.getPokemon();
    },
  },
  methods: {
    async getPokemon() {
      try {
        this.pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`
        ).then((resp) => resp.json());
      } catch (error) {
        this.$router.push("/");
        console.log("Wrong pokemon id");
      }
    },
  },
  // Life Cycle Hooks
  created() {
    // This is usefull for query params, for params use props
    // this.pokemonId = this.$route.params.id
    this.getPokemon();
  },
};
</script>