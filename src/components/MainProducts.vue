<template>
  <div class="grid">
    <div class="col-3" v-for="data in products" :key="data.id">
      <Card style="width: 25em" class="card">
        <template #header>
          <img :src="data.image" style="height: 15rem" />
        </template>
        <template #title> {{ data.title }}</template>
        <template #subtitle> {{ data.subtitle }} </template>
        <template #content>
          <p>
            {{ data.description }}
          </p>
          <br />
          <div class="right">
            <span class="text-red-500">
              <del> {{ data.price * 2 }}$ </del></span
            >
            {{ data.price }}$
          </div>
        </template>
        <template #footer>
          <Button
            icon="pi pi-check"
            label="Addi"
            @click="storeCounter.increment"
          />
          <Button
            icon="pi pi-times"
            label="Drop"
            class="p-button-secondary"
            style="margin-left: 0.5em"
            @click="storeCounter.decrement"
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
  },
};
</script>

<style></style>
