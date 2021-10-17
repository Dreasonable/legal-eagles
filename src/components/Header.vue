<template>
  <header class="header">
    <div class="header__brand">
      <router-link :to="{ name: 'Home' }">
        <img alt="Legal Eagle logo" src="../assets/logo-large-legal-eagles.svg" />
      </router-link>
    </div>
    <nav
      class="nav" id="nav"
    >
      <ul>
        <li><router-link :to="{ name: 'Services' }">Services</router-link></li>
        <li><router-link :to="{ name: 'Clients' }">Clients</router-link></li>
        <li><router-link :to="{ name: 'News' }">News</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">

.header {
  // position: sticky;
  // top: -3rem;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;

  &__brand {
    margin-top: 1.77rem;
    margin-left: 9.44rem;
  }
}

.nav {
  ul {
    list-style: none;
    display: flex;
    height: 100%;
    margin: 0;
    margin-right: 2.66rem;
    padding: 0;
    position: relative;
    top: -5px;
  }

  li {
    display: flex;
    align-items: flex-end;
    height: 100%;
    margin: 0 1rem;
    border-top: 5px solid black;
    -webkit-transition : border 200ms ease-out;
    -moz-transition : border 200ms ease-out;
    -o-transition : border 200ms ease-out;

    &:hover {
      border-top: 5px solid grey;
    }
  }

  a {
    text-decoration: none;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
    padding: 0.66rem;
  }
}

</style>
