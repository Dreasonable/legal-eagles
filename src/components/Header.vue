<template>
  <div class="header">
    <div
      class="nav"
      id="nav"
      :class="{'menu-open': menuOpen === true}"
    >
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
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
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: black;
}

.nav {
  transition: opacity 0.2s, right 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 20%;
  height: 100%;
  opacity: 0;
  top: 0;
  right: -10rem;
  background-image: linear-gradient(to right, black, white);
  padding-right: 4rem;

  a {
    padding: 0 1rem;
    font-weight: bold;
    text-decoration: none;
    color: white;

    &.router-link-exact-active {
      color: #41D9FA;
    }
  }
}

.menu-open {
  transition: opacity 0.2s, right 0.5s;
  opacity: 1;
  right: 0;
}

.hamburger-menu {
  position: absolute;
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
}

span {
  width: 30px;
  height: 3px;
  margin: 3px 0;
  border-radius: 1px;
  transition: 0.2s;
  opacity: 1;
  background-color: white;
  transform: rotate(0deg);
}

.opened {
  span {
    background-color: black;

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
