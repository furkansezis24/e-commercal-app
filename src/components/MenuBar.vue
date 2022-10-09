<template>
  <div>
    <Menubar>
      <template #start>
        <img
          alt="logo"
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          height="40"
          class="mr-2"
        />
      </template>

      <template #end>
        <i class="pi pi pi-shopping-bag"></i>
        <span class="hide">
          You have items {{ storeCounter.count }} in your cart!</span
        >
      </template>
    </Menubar>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      storeCounter: useCounterStore(),
    };
  },
};
</script>

<style></style>
