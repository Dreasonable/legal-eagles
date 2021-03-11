<template>
  <div class="hero-banner">
    <img
      class="logo1"
      alt="Vue logo"
      src="../assets/logo.png"
      @mouseover="animate(1)"
    />
    <img
      class="logo2"
      alt="Vue logo"
      src="../assets/logo.png"
      @mouseover="animate(2)"
    />
    <img
      class="logo3"
      alt="Vue logo"
      src="../assets/logo.png"
      @mouseover="animate(3)"
    />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "HeroBanner",

  methods: {
    animate(n) {
      let rotation = Math.floor(Math.random() * 361);
      let locationX = Math.floor(Math.random() * 751);
      let locationY = Math.floor(Math.random() * 1001);
      if (rotation % 2 === 1) {
        rotation*=-1
      };
      if (locationX % 2 === 1) {
        locationX*=-1
      };
      // eslint-disable-next-line
      gsap.timeline({repeat: 0})
        // eslint-disable-next-line
        .to(".logo"+n, {duration: 1, rotate: rotation, x: locationX, y: locationY, ease: 'back'}, 0);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.logo:hover {
  cursor: pointer;
}

</style>
