<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">

body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Sarpanch', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

h1 {
  margin: 0;
}

#app {
}

.container {
  margin: 2rem;
  padding: 2rem;
  border: 2px solid black;
  border-radius: 2rem;
  min-height: 20rem;
}
</style>
