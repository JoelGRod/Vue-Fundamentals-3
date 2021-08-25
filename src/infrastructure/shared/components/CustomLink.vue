<template>
  <a
    v-if="isExternalLink"
    class="nav-element normal-link "
    :href="link.to"
    target="_blank"
  >
    {{ link.name }}
  </a>

  <router-link v-else :to="link.to" v-slot="{ href, isActive }">
    <a
      :href="href"
      :class="isActive ? 'nav-element active-link' : 'nav-element normal-link'"
    >
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
  },
};
</script>

<style>
.nav-container .nav-element {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 1rem;
}
.active-link {
  color: #42b983;
}
.normal-link {
  color: #c6c5c5;
}
</style>