<template>
  <h1>{{ products.description }}</h1>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await fetch(
        "https://fakestoreapi.com/products/" + this.$route.params.id
      );
      this.products = await data.json();

      /* .then((res) => res.json())
            .then((json) => console.log(json)); */
      console.log(data);
    },
  },
};
</script>
<style></style>
