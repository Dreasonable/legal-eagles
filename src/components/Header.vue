<template>
  <div class="header">
    <div class="brand">
      <h1 class="name">
        <router-link :to="{ name: 'Home' }">Daniel Reason</router-link>
      </h1>
      <p class="title">Software Engineer</p>
    </div>
    <div
      class="nav"
      id="nav"
    >
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <a>CV ⇩</a>
    </div>
    <div
      class="hamburger-menu"
      :class="{'opened': menuOpen === true}"
      @click="openCloseMenu()"
    >
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    openCloseMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
}

.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .name {
    margin: 0;
  }

  .name a {
    font-weight: 800;
    text-decoration: none;
    color: black;
  }

  .title {
    color: black;
    margin: 0;
  }
}

.nav {
  transition: opacity 0.2s, right 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  a {
    position: relative;
    margin: 0 4rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: black;

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      right: 0;
      background-color: black;
      transition: all 0.2s ease-in-out 0s;
    }

    &.router-link-exact-active {
      color: #63855F;

      &::after {
        left: 0;
        width: 100%;
        transition: all 0.2s ease-in-out 0s;
        transition-delay: 0.1s;
      }
    }
  }
}

// .menu-open {
//   transition: opacity 0.2s, right 0.5s;
//   opacity: 1;
//   right: 0;
// }

.hamburger-menu {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }

  span {
    width: 30px;
    height: 3px;
    margin: 3px 0;
    border-radius: 1px;
    transition: 0.2s;
    opacity: 1;
    background-color: black;
    transform: rotate(0deg);
  }
}

.opened {
  span {
    // background-color: black;

    &:nth-child(1) {
      transition: 0.5s;
      transform: rotate(45deg);
      position: absolute;
    }

    &:nth-child(2) {
      transition: 0.1s;
      opacity: 0;
    }

    &:nth-child(3) {
      transition: 0.5s;
      transform: rotate(-45deg);
      position: absolute;
    }
  }
}
</style>
