<template>
  <div class="home">
    <!-- <HelloWorld msg="Hello World!" /> -->
    <div class="hero">
      <div class="container">
        <h1>The first name <br>in <span>corporate law</span>.</h1>
        <h4>Meet our Team +</h4>
      </div>
    </div>

    <div class="the-team">
      <div class="team-title-and-text">
        <h2>Meet our Team</h2>
        <p>Legal Eagles is a leading law firm focused on achieving the best possible outcomes for our clients, with a history of supporting the industries that make New Zealand successful.</p>
      </div>
      <div class="team-slider">Team slider</div>
    </div>

    <div class="news">
      <div class="news-title">
        <h2>Latest News.</h2>
      </div>
      <div class="news-slider">News slider</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .hero {
    height: 702px;
    width: 100%;
    background-image: url("../assets/Hero-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    .container {
      width: 1400px;

      h1 {
        height: 210px;
        width: 1054px;
        color: #FFFFFF;
        font-family: "Open Sans";
        font-size: 100px;
        font-weight: 800;
        letter-spacing: -2px;
        line-height: 105px;

        span {
          color: lightgrey;
        }
      }
    }
  }
}

.team-title-and-text {
  display: flex;

  h2 {
    width: 50%;
  }

  p {
    width: 50%;
  }
}

.team-slider {
  width: 100%;
  height: 40rem;
  border: 1px dotted green;
  overflow: visible;
}

.news {
  display: flex;
  flex-direction: column;
}

.news-title {
}

.news-slider {
  width: 100%;
  height: 40rem;
  border: 1px dotted green;
  overflow: visible;
}
</style>
