<template>
  <div class="team container">
    <div class="team--intro">
      <h2>Meet our Team.</h2>
      <p>
        Legal Eagles is a leading law firm focused on achieving the best
        possible outcomes for our clients, with a history of supporting the
        industries that make New Zealand successful.
      </p>
    </div>
    <swiper
      class="swiper"
      :slidesPerView="1"
      :centeredSlides="false"
      :spaceBetween="0"
      :grabCursor="true"
      :navigation="false"
      :scrollbar="true"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          scrollbar: {
            hide: false,
            draggable: true
          }
        },
        '850': {
          slidesPerView: 2.5,
          scrollbar: {
            hide: true,
            draggable: true
          }
        },
        '1000': {
          slidesPerView: 3,
          scrollbar: {
            hide: true,
            draggable: true
          }
        },
        '1400': {
          slidesPerView: 3.5,
          scrollbar: {
            hide: true,
            draggable: true
          }
        }
      }"
    >
      <swiper-slide v-for="person in team" :key="person.id">
        <img
          :src="require(`@/assets/${person.imageUrl}.png`)"
          alt="Profile image"
          class="image"
        />
        <div class="team--profile">
          <div class="team--profile__name">{{ person.name }}</div>
          <div class="team--profile__position">{{ person.position }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import team from "../data/team.json";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Scrollbar]);

export default {
  name: "TeamSlider",
  data() {
    return {
      team
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped lang="scss">
.team {
  &--intro {
    margin: 83px 28px 65px 28px;
    display: flex;
    align-items: flex-end;

    @media only screen and (max-width: 767px) {
      flex-direction: column-reverse;
      margin: 55px 15px 20px 15px;
    }

    h2,
    p {
      margin-top: 0;
      margin-bottom: 0;
      color: #2f2d2d;
    }

    h2 {
      font-size: 60px;
      font-weight: 800;
      width: 60%;
      letter-spacing: -2px;
      line-height: 60px;

      @media only screen and (max-width: 767px) {
        width: 100%;
        font-size: 40px;
        letter-spacing: -1.33px;
      }
    }

    p {
      width: 35%;
      margin-right: auto;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 34px;

      @media only screen and (max-width: 767px) {
        width: 80%;
        margin: auto;
        margin-bottom: 46px;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }

  &--profile {
    margin-top: 28px;

    &__name {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 20px;
      color: #2f2d2d;
    }

    &__position {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 20px;
      color: #afacac;
    }
  }

  .swiper {
    &-container {
      overflow: visible !important;
      margin: 0 28px;

      @media only screen and (max-width: 767px) {
        overflow: hidden !important;
        margin: 0 15px;
      }
    }

    &-slide {
      margin-bottom: 28px;

      img {
        position: relative;
      }

      img:hover {
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
        transition: all 1s;
        z-index: 10;
      }
    }
  }
}
</style>
