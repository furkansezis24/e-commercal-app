<template>
  <input type="text" placeholder="search" v-model="search" />
  <div class="grid">
    <div class="col-3" v-for="product in filteredPost" :key="product.id">
      <Card style="width: 25em" class="card">
        <template #header>
          <img :src="product.image" style="height: 15rem" />
        </template>
        <template #title> {{ product.title }}</template>
        <template #subtitle> {{ product.subtitle }} </template>
        <template #content>
          <p>
            {{ product.description }}
          </p>
          <br />
          <div class="right">
            <span class="text-red-500">
              <del> {{ product.price * 2 }}$ </del></span
            >
            {{ product.price }}$
          </div>
        </template>
        <template #footer>
          <Button
            icon="pi pi-check"
            label="Add"
            @click="storeCounter.increment"
          />
          <Button
            icon="pi pi-info-circle"
            label="Detail"
            class="p-button-secondary"
            style="margin-left: 0.5em"
            @click="confirmDetail(product)"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      counter: 0,
      storeCounter: useCounterStore(),
      products: [],
      search: "",
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await fetch("https://fakestoreapi.com/products");
      this.products = await data.json();
      /* .then((res) => res.json())
          .then((json) => console.log(json)); */
      console.log(this.products);
    },
    confirmDetail(product) {
      this.$router.push({ name: "DetailView", params: { id: product.id } });
    },
  },
  computed: {
    filteredPost() {
      return this.products.filter((product) =>
        product.title.includes(this.search)
      );
    },
  },
};
</script>

<style></style>
