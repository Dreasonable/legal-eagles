<template>
  <header
    class="header container--full-screen"
    id="header"
    :class="{ headerFull: mobileMenuOpen === true }"
  >
    <div class="header--logo-small" id="header--logo-small">
      <router-link :to="{ name: 'Home' }">
        <img
          alt="Legal Eagle logo"
          src="../assets/logo-small-legal-eagles-white.svg"
        />
      </router-link>
    </div>
    <button @click="openCloseMenu()">
      <img alt="Open menu" src="../assets/icon-hamburger.svg" />
    </button>
    <nav
      class="nav"
      id="nav"
      :class="{ mobileMenuOpen: mobileMenuOpen === true }"
    >
      <button class="close-menu" @click="openCloseMenu()">
        <img alt="Close menu" src="../assets/icon-plus-white.svg" />
      </button>
      <ul>
        <li>
          <router-link :to="{ name: 'Services' }" @click="closeMenu()">
            Services
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Clients' }" @click="closeMenu()">
            Clients
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'News' }" @click="closeMenu()">
            News
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" @click="closeMenu()">
            About
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }" @click="closeMenu()">
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileMenuOpen: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    openCloseMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMenu() {
      this.mobileMenuOpen = false;
    },
    onScroll() {
      var header = document.getElementById("header");
      var headerLogo = document.getElementById("header--logo-small");
      if (window.top.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
      if (window.top.scrollY > 100) {
        headerLogo.classList.add("logoScrolled");
      } else {
        headerLogo.classList.remove("logoScrolled");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.navScrolled {
  // height: 40px;
}

.header {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  height: 125px;
  z-index: 10;
  background-color: transparent;
  transition: background-color 0.5s, height 0.5s;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    transition: background-color 0.2s, height 0.2s;
  }

  button {
    display: none;
    position: fixed;
    height: 75px;
    width: 75px;
    margin-left: auto;

    @media only screen and (max-width: 767px) {
      display: block;
    }
  }

  nav {
    padding-bottom: 20px;

    @media only screen and (max-width: 767px) {
      position: absolute;
      right: -50%;
      transition: right 0.2s;
      flex-direction: column;
      height: 100vh;
      width: 50%;
      background-color: black;
      z-index: 20;
      padding-bottom: 0;
    }

    ul {
      list-style: none;
      display: flex;
      height: calc(100% + 5px);
      margin: 0;
      margin-right: 2.66rem;
      padding: 0;
      // position: relative;
      // top: -5px;

      @media only screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: space-around;
        height: 50%;
        margin-right: 0;
        margin-top: 40px;
      }
    }

    li {
      display: flex;
      align-items: flex-end;
      height: 100%;
      margin: 0 1.66rem;
      border-top: 5px solid transparent;
      -webkit-transition: border 200ms ease-out;
      -moz-transition: border 200ms ease-out;
      -o-transition: border 200ms ease-out;
      z-index: 10;

      &:hover {
        border-top: 5px solid grey;
      }

      @media only screen and (max-width: 767px) {
        border: none;

        &:hover {
          border: none;
        }
      }
    }

    a {
      text-decoration: none;
      font-size: 18px;
      line-height: 18px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #fff;
    }
  }

  .mobileMenuOpen {
    right: 0;
    transition: right 0.2s;
    height: 100vh;
  }

  .close-menu {
    position: relative;

    img {
      transform: rotate(45deg);
      width: 40px;
    }
  }

  &--logo-small {
    display: block;
    width: 1400px;
    position: fixed;
    margin: 0 auto;
    top: -100px;
    left: 0;
    right: 0;
    transition: top 1s;

    @media only screen and (max-width: 767px) {
      display: none;
    }
  }

  .logoScrolled {
    top: 10px;
    transition: top 1s;
  }
}

@media only screen and (min-width: 767px) {
  .header-scrolled {
    position: fixed;
    height: 80px;
    background-color: black;
    transition: background-color 0.5s, height 0.5s;
  }
}

.headerFull {
  height: 100vh;
  transition: height 0.01s;
}
</style>
