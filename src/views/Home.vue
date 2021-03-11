<template>
  <div class="home">
    <h1>Home Page</h1>
    <!-- <HeroBanner /> -->
    <HelloWorld msg="Hello World!" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HeroBanner from "@/components/HeroBanner.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HeroBanner,
    HelloWorld
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
  .home {
  
  }
</style>
