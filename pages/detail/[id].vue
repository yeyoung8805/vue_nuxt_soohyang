<template>
  <section class="max">
    <div class="container">
      <div>
        <h1>
          <strong>{{ productStore.item.id }}</strong>
        </h1>
      </div>
      <div class="product-detail">
        <img :src="productStore.item.image" alt="image" />
        <br /><br />
        <h1>{{ productStore.item.title }}</h1>
        <br />
        {{ productStore.item.price }}<br />
        {{ productStore.item.summary }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as productRepository from "@/lib/repositories/product";
import { useProductStore } from "@/lib/stores/product";

const productStore = useProductStore();

async function readProductDetail(_id: number) {
  await productRepository
    .reads()
    .then((data) => {
      productStore.items = data;
      productStore.items.filter(function (eachItem) {
        if (eachItem.id === Number(_id)) {
          productStore.item = eachItem;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

readProductDetail(Number(useRoute().params.id));
</script>

<style lang="scss" scoped></style>
