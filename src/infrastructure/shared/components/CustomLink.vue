<template>
  <a
    v-if="isExternalLink"
    class="nav-element normal-link"
    :href="link.to"
    target="_blank">
    {{ link.name }}
  </a>

  <router-link
    v-else
    class="nav-element"
    :to="haveParams"
    v-slot="{ isActive }">
    <!-- v-slot -> href, isActive -->
    <a :class="isActive ? 'nav-element active-link' : 'nav-element normal-link'">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
    haveParams() {
      return this.link.id === undefined ?
        { name: this.link.to } : 
        { name: this.link.to, params: { id: this.link.id } }
    }
  },
};
</script>

<style>
.nav-container .nav-element {
  font-weight: bold;
  text-decoration: none;
  padding: 0 1rem;
}
.active-link {
  color: #42b983;
}
.normal-link {
  color: #2c3e50;
}
</style>