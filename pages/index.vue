<template>
  <section class="max pad-mid">
    <div class="container">
      <ul class="product-list">
        <li v-for="(item, i) in productStore.items" :key="i">
          <nuxt-link :to="{ path: 'detail/' + item.id }">
            <div class="img">
              <img :src="item.image" alt="image" />
            </div>
          </nuxt-link>
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
import * as productRepository from "@/lib/repositories/product";
import { useProductStore } from "@/lib/stores/product";

const productStore = useProductStore();

// async function resFetch(){
const resFetch = async () => {
  await productRepository
    .reads()
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
