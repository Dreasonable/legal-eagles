<template>
  <div class="news container">
    <div class="news--intro">
      <h2>Latest News.</h2>
    </div>
    <swiper
      class="swiper"
      :slidesPerView="1"
      :centeredSlides="false"
      :spaceBetween="47"
      :grabCursor="true"
      :navigation="false"
      :scrollbar="true"
      :breakpoints="{
        '768': {
          slidesPerView: 3,
          scrollbar: {
            draggable: true
          }
        },
        '1000': {
          slidesPerView: 4,
          scrollbar: {
            draggable: true
          }
        }
      }"
    >
      <swiper-slide v-for="news in newsList" :key="news.id">
        <div class="news--item">
          <div class="news--item__title">{{ news.title }}</div>
          <div class="news--item__content">{{ news.content }}</div>
          <div class="news--item__date">{{ news.date }}</div>
          <img alt="Plus icon" src="../assets/icon-plus-grey.svg" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import newsList from "../data/news.json";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Scrollbar]);

export default {
  name: "NewsSlider",
  data() {
    return {
      newsList
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped lang="scss">
.news {
  display: flex;
  flex-direction: column;

  h2 {
    color: #2f2d2d;
    font-size: 60px;
    font-weight: 800;
    width: 60%;
    letter-spacing: -2px;
    line-height: 60px;
    margin: 0;
  }

  &--intro {
    margin: 83px 28px 65px 28px;
    display: flex;
  }

  &--item {
    &__title {
      font-size: 16px;
      color: #afacac;
    }

    &__content {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 30px;
    }

    &__date {
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0;
      line-height: 40px;
      color: #afacac;
    }

    div {
      margin: 20px 0;
    }

    img {
      margin-bottom: 20px;

      &:hover {
        cursor: pointer;
      }
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
