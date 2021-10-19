<template>

  <Header />
  <router-view />
  <Footer />

  <Nothing />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Nothing from "@/components/Nothing.vue";

export default {
  components: {
    Header,
    Footer,
    Nothing
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

body {
  box-sizing: border-box;
  margin: 0;
  font-family: 'OpenSans', sans-serif;
  background-color: #FAFAFA;
}

.container {
  width: 1400px;

  &--wide {
    width: 1680px;
  }

  &--narrow {
    width: 924px;
  }

  &--full-screen {
    width: 100%;
  }
}

.extrabold {
  font-weight: 800;
}

.bold {
  font-weight: 700;
}

.semibold {
  font-weight: 600;
}

.regular {
  font-weight: 400;
}

.light {
  font-weight: 300;
}

#app {
}
</style>
