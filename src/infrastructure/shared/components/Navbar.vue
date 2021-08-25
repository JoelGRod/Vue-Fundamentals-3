<template>
    <div class="nav-container">
        <!-- <router-link class="nav-element" :to="{ name: 'pokemon-id', params: { id } }">Pokemon</router-link> -->
        <!-- <router-link class="nav-element" :to="'/pokemon/' + id">Pokemon</router-link> -->
        <!-- <router-link class="nav-element" :to="{ name: 'pokemon-about' }">About</router-link>
        <router-link class="nav-element" :to="{ name: 'pokemon-home' }">Home</router-link> -->

        <CustomLink v-for="link in links" :key="link.to" :link="link"></CustomLink>

    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
    data() {
        return {
            // id: 23,
            links: [
                // Pokemon
                { to: 'pokemon-home', name: 'Pokemon-Home' },
                { to: 'pokemon-id', name: 'Pokemon', id: 23 },
                { to: 'pokemon-about', name: 'Pokemon-About' },
                // DBZ
                { to: 'dbz-characters', name: 'DBZ-Characters' },
                { to: 'dbz-about', name: 'DBZ-About' },
                { to: 'https://www.google.es/', name: 'Google' },
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent( () => import('./CustomLink') )
    }
}
</script>

<style scoped>

    .nav-container {
        padding: 0 2rem;
    }

    /* .nav-container .nav-element {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        padding: 0 1rem;
    }

    .nav-container .router-link-exact-active {
        color: #42b983;
    } */

</style>