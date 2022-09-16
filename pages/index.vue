<template>
  <section class="max pad-mid">
    <div class="container">
      <ul class="product-list">
        <li v-for="(item, i) in productStore.items" :key="i">
          <div class="img">
            <img :src="item.image" alt="image" />
          </div>
          <div class="des">
            <strong>{{ item.title }}</strong> <br />
            {{ item.price }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from "@/lib/stores/product";

const productStore = useProductStore();

const resFetch = async () => {
  await fetch("/data/product.json")
    .then((res) => res.json())
    .then((data) => {
      productStore.items = data;
      console.log("fetch: " + JSON.stringify(productStore.items));
    })
    .catch((error) => {
      console.log(error);
    });
};
resFetch();
</script>
