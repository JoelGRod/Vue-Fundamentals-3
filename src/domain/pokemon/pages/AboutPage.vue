<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="changeName()">Change Name</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Joel",
    };
  },
  methods: {
    changeName() {
      this.name = "Begoña";
    },
  },
  // Watch changes in reactive objects
  watch: {
      name(value, oldValue) {
          console.log(`Object Name ${ oldValue } is changed by ${ value }`)
      }
  },

  // Life Cycle Hooks
  beforeCreate() {
    // On Init ~
    // Operations with auth systems or validations
    console.log("beforeCreate");
  },
  created() {
    // On Init - reactive object is created and available
    // Promises, Observables, HTTP Requests
    // Call to services
    console.log("created");
  },
  beforeMount() {
    // AfterViewInit ~
    console.log("beforeMount");
  },
  mounted() {
    // AfterViewInit
    // Acces to View
    console.log("mounted");
  },
  renderTriggered() {
    // DoCheck 1
    // Reactive changes in component HTML -> IMPORTANT
    console.log("renderTriggered");
  },
  beforeUpdate() {
    // DoCheck 2
    // Reactive changes in component HTML -> IMPORTANT
    console.log("beforeUpdate");
  },
  renderTracked() {
    // DoCheck 3
    // Reactive changes in component HTML -> IMPORTANT
    console.log("renderTracked");
  },
  updated() {
    // DoCheck 4
    // Reactive changes in component HTML -> IMPORTANT
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    // OnDestroy ~
    console.log("beforeUnmount");
  },
  unmounted() {
    // OnDestroy
    // Unsubscribe from listeners, observables and promises
    // Component cleaning operations
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
};
</script>