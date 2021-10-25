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
    <swiper
      class="swiper"
      :slidesPerView="1"
      :centeredSlides="true"
      :spaceBetween="0"
      :grabCursor="false"
      :navigation="true"
      :scrollbar="false"
    >
      <swiper-slide
        v-for="image in backgrounds"
        v-show="isDesktop()"
        :key="image.id">
        <img
          :src="require(`@/assets/${image.imageUrl}.png`)"
          alt="Background image"
          class="image"
        />
      </swiper-slide>
      <swiper-slide
        v-for="image in backgroundsMobile"
        v-show="isMobile()"
        :key="image.id">
        <img
          :src="require(`@/assets/${image.imageUrl}.png`)"
          alt="Background image"
          class="image"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Scrollbar, Parallax]);

export default {
  name: "Hero",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      backgrounds: [
        {id: 1, imageUrl: "Hero-1"},
        {id: 2, imageUrl:"Hero-2"}
      ],
      backgroundsMobile: [
        {id: 1, imageUrl: "Hero-1-mobile"},
        {id: 2, imageUrl:"Hero-1-mobile"}
      ],
      parallaxSwiperWidth: 0
      // backgroundUrl: this.backgrounds[0]
    };
  },
  methods: {
    isDesktop() {
      return window.innerWidth > 767;
    },
    isMobile() {
      return window.innerWidth < 768;
    }
  }
};
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  top: -1px;
  height: 702px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;

  @media only screen and (max-width: 767px) {
    height: 560px;
    top: -5px;
  }

  &--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100%;
    z-index: 5;

    @media only screen and (max-width: 767px) {
      margin: 0 15px;
      height: fit-content;
    }

    &__brand {
      margin-top: 15px;
      z-index: 30;

      @media only screen and (max-width: 767px) {
        margin-left: 15px;
      }

      img {
        @media only screen and (max-width: 767px) {
          height: 40px;
          width: 118px;
        }
      }
    }

    &__text {
      width: 1054px;

      @media only screen and (max-width: 767px) {
        margin-left: 15px;
      }

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

  .swiper {
    position: absolute !important;
    width: 100%;
    height: 100%;
  }
}
</style>
