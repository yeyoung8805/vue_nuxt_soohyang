<template>
  <div>
    <h1>
      <strong>{{ productId }}</strong>
    </h1>
    <ul class="product-list">
      <li>
        <div class="img">
          <img :src="productImage" alt="image" />
        </div>
        <div class="des">
          <strong>{{ productTitle }}</strong> <br />
          {{ productPrice }}<br />
          {{ productSummary }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import * as productRepository from "@/lib/repositories/product";

export default {
  data() {
    return {
      id: 0,
      productId: 0,
      productTitle: "",
      productSummary: "",
      productContent: "",
      productPrice: 0,
      productImage: "",
    };
  },
  created() {
    this.id = useRoute().params.id;
    console.log("id : " + this.id);
    if (this.id != undefined) {
      this.readProductDetail();
    }
  },
  methods: {
    async readProductDetail() {
      await productRepository
        .reads()
        .then((data) => {
          console.log("data : " + data[this.id - 1]);
          console.log("data.id : " + data[this.id - 1].id);
          console.log("data.title : " + data[this.id - 1].title);
          console.log("data.summary : " + data[this.id - 1].summary);
          console.log("data.content : " + data[this.id - 1].content);
          console.log("data.price : " + data[this.id - 1].price);
          console.log("data.image : " + data[this.id - 1].image);
          this.productId = data[this.id - 1].id;
          this.productTitle = data[this.id - 1].title;
          this.productSummary = data[this.id - 1].summary;
          this.productContent = data[this.id - 1].content;
          this.productPrice = data[this.id - 1].price;
          this.productImage = data[this.id - 1].image;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
