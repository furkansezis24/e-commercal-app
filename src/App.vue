<template>
  <menu-bar />
  <nav>
    <router-link to="/">Home</router-link>
  </nav>

  <routerView />
</template>

<script>
import MainProducts from "./components/MainProducts.vue";
import MenuBar from "./components/MenuBar.vue";

export default {
  components: { MainProducts, MenuBar },
  data() {
    return {
      addedList: [],
      itemsCounter: 0,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
