<template>
    <div class="nav-container">
        <router-link class="nav-element" :to="{ name: 'pokemon-id', params: { id } }">Pokemon</router-link>
        <!-- <router-link class="nav-element" :to="'/pokemon/' + id">Pokemon</router-link> -->
        <router-link class="nav-element" to="/about">About</router-link>
        <router-link class="nav-element" to="/">Home</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 23
        }
    }
}
</script>

<style scoped>

    .nav-container {
        padding: 0 2rem;
    }

    .nav-container .nav-element {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        padding: 0 1rem;
    }

    .nav-container .router-link-exact-active {
        color: #42b983;
    }

</style>