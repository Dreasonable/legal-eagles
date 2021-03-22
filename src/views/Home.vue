<template>
  <div class="home">
    <HelloWorld msg="Hello World!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
