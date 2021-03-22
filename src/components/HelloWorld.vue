<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <img alt="Logo" src="../assets/logo.png" />
    <div v-for="item in data" :id="item.id" :key="item.id" :title="item.title">
      {{ item.id }}: {{ item.title }}
    </div>
  </div>
</template>

<script>
import data from "../data/data.json";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: black;
}
</style>
