<template>
  <div class="team container">
    <div class="team--intro">
      <h2>Meet our Team.</h2>
      <p>Legal Eagles is a leading law firm focused on achieving the best possible outcomes for our clients, with a history of supporting the industries that make New Zealand successful.</p>
    </div>
    <swiper
      class="swiper"
      :slidesPerView="1"
      :centeredSlides="false"
      :spaceBetween="0"
      :grabCursor="true"
      :navigation="false"
      :scrollbar="true"
      :breakpoints='{
        "768": {
          "slidesPerView": 3.5,
          "scrollbar": false
        }
      }'
    >
      <swiper-slide
        v-for="person in team"
        :key="person.id"
      >
        <img
          :src="require(`@/assets/${person.imageUrl}.png`)"
          alt="Profile image"
        />
        <div class="team--profile">
          <div class="team--profile__name">{{ person.name }}</div>
          <div class="team--profile__position">{{ person.position }}</div>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-scrollbar">
        <div class="swiper-scrollbar-drag"></div>
      </div> -->
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import team from '../data/team.json';

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Scrollbar, Parallax]);

export default {
  name: "TeamSlider",
  data() {
    return {
      team,
      parallaxSwiperWidth: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
};
</script>

<style scoped lang="scss">
.team {

  &--intro {
    margin: 83px 28px 65px 28px;
    display: flex;
    align-items: flex-end;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    h2, p {
      margin-top: 0;
      margin-bottom: 0;
      color: #2F2D2D;
    }

    h2 {
      font-size: 60px;
      font-weight: 800;
      width: 60%;
      letter-spacing: -2px;
      line-height: 60px;
    }

    p {
      width: 35%;
      margin-right: auto;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 34px;
    }
  }

  &--profile {
    margin-top: 28px;

    &__name {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 20px;
      color: #2F2D2D;
    }

    &__position {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 20px;
      color: #AFACAC;
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
    }
  }
}

</style>
