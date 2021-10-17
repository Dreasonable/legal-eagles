<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

body {
  box-sizing: border-box;
  margin: 0;
  font-family: 'OpenSans', sans-serif;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  background-color: #FAFAFA;
}

#app {
}
</style>
