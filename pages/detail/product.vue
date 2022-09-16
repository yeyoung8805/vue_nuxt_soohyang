<template>
  <div>
    <h1>Detail Page!!</h1>
    <div>
      <h1>{{ id }}</h1>
      <h1>{{ productId }}</h1>
      <h1>{{ productTitle }}</h1>
      <h1>{{ productSummary }}</h1>
      <h1>{{ productContent }}</h1>
      <h1>{{ productPrice }}</h1>
      <h1>{{ productImage }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
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
    this.id = this.$route.query.id;
    console.log("id : " + this.id);
    if (this.id != undefined) {
      this.readProductDetail();
    }
  },
  methods: {
    async readProductDetail() {
      // let resource =
      await fetch("/data/product.json")
        .then((res) => res.json())
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
