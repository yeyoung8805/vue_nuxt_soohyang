<template>
  <div>
    <h1>Detail Page!!</h1>
    <h1>{{ id }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log("id : " + this.id);
  },
};
</script>
