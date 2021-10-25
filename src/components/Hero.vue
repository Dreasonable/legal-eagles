<template>
  <div class="hero container--full-screen">
    <div class="hero--content container">
      <div class="hero--content__brand">
        <router-link :to="{ name: 'Home' }">
          <img
            alt="Legal Eagle logo"
            src="../assets/logo-large-legal-eagles.svg"
          />
        </router-link>
      </div>
      <div class="hero--content__text">
        <h1 class="mobile">The first name in <span>corporate law</span>.</h1>
        <h1 class="desktop">
          The first name <br />in <span>corporate law</span>.
        </h1>
        <div>
          <h4>Meet our Team</h4>
          <img alt="Plus icon" src="../assets/icon-plus-grey.svg" />
        </div>
      </div>
    </div>

    <div class="hero--slider-controls">
      <button @click="prev()">
        <img alt="Left arrow icon" src="../assets/icon-left-arrow.svg" />
      </button>
      <button @click="next()">
        <img alt="Right arrow icon" src="../assets/icon-right-arrow.svg" />
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  data() {
    return {
      backgrounds: ["../assets/Hero-1.png", "../assets/Hero-2.png"],
      backgroundIndex: 0
    };
  },
  methods: {
    next() {
      if (this.backgroundIndex >= this.backgrounds.length - 1) {
        return;
      }
      this.backgroundIndex++;
      console.log(this.backgroundIndex);
    },
    prev() {
      if (this.backgroundIndex <= 0) {
        return;
      }
      this.backgroundIndex--;
      console.log(this.backgroundIndex);
    }
  }
};
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 702px;
  background-image: url("../assets/Hero-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media only screen and (max-width: 767px) {
    background-image: url("../assets/Hero-1-mobile.png");
    height: 560px;
  }

  &--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100%;

    @media only screen and (max-width: 767px) {
      margin: 15px;
    }

    &__brand {
      position: absolute;
      top: 20px;
      z-index: 30;

      img {
        @media only screen and (max-width: 767px) {
          height: 40px;
          width: 118px;
        }
      }
    }

    &__text {
      width: 1054px;

      h1 {
        margin-bottom: 0;

        span {
          color: lightgrey;
        }
      }

      h4 {
        font-size: 20px;
        font-weight: 600;
        line-height: 38px;

        @media only screen and (max-width: 767px) {
          font-size: 17px;
        }
      }

      div {
        display: flex;
        align-items: center;
        width: fit-content;

        &:hover {
          cursor: pointer;
        }
      }

      img {
        height: 32px;
        margin-left: 1rem;

        @media only screen and (max-width: 767px) {
          height: 24px;
        }
      }

      .mobile {
        display: none;
      }

      @media only screen and (max-width: 767px) {
        width: 325px;

        .desktop {
          display: none;
        }

        .mobile {
          display: block;
        }
      }
    }
  }

  &--slider-controls {
    position: absolute;
    bottom: 2rem;
    right: 4.32rem;

    img {
      cursor: pointer;
    }

    button {
      &:first-child {
        margin-right: 50px;
      }
    }

    @media only screen and (max-width: 767px) {
      bottom: 20px;
      right: 10px;

      img {
        height: 30px;
      }

      button {
        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
