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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  background-color: #fafafa;
}

h1 {
  // height: 210px;
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 100px;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 105px;

  @media only screen and (max-width: 767px) {
    font-size: 60px;
    letter-spacing: -1.2px;
    line-height: 60px;
  }
}

.container {
  width: 1400px;

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  &--wide {
    width: 1680px;

    @media only screen and (max-width: 1400px) {
      width: 100%;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
  }

  &--narrow {
    width: 924px;

    @media only screen and (max-width: 924px) {
      width: 100%;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }
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

button {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
}

.swiper-scrollbar {
  border-radius: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  z-index: 50 !important;
  height: 4px !important;
  width: 100% !important;

  @media only screen and (max-width: 767px) {
    opacity: 1 !important;
  }
}

.swiper-scrollbar-drag {
  background: #2f2d2d !important;
  border-radius: 0 !important;
}

.hero {
  .swiper-container {
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute !important;
      top: auto !important;
      left: auto !important;
      bottom: 40px !important;
      color: white;
    }

    .swiper-button-prev {
      right: 120px !important;
    }

    .swiper-button-next {
      right: 45px !important;
    }

    .swiper-slide {
      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
}

#app {
  overflow: hidden;
}
</style>
