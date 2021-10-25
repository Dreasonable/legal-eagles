<template>
  <div class="home container--full-screen">
    <Hero />
    <TeamSlider />
    <NewsSlider />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import TeamSlider from "@/components/TeamSlider";
import NewsSlider from "@/components/NewsSlider";

export default {
  name: "Home",
  components: {
    Hero,
    TeamSlider,
    NewsSlider
  }
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 5px solid black;
}

.carousel {
  display: flex;
  position: relative;
  height: 500px;
}

.slide-info {
  // width: 100%;
  // max-height: 100%;
  height: 100%;

  img {
    height: 100%;
  }
}
</style>
