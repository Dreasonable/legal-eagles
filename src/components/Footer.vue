<template>
  <footer>
    <div class="footer container">
      <div class="footer--top">
        <img class="logo-small" alt="Legal Eagle logo" src="../assets/logo-small-legal-eagles.svg" />
        <div class="footer--top__content container--narrow">
          <div class="address">
            <span class="bold">Legal Eagles Limited</span>
            <span>100 Quay Street</span>
            <span>Auckland 1010, New Zealand</span>
            <span>P: 09  300 0019</span>
          </div>
          <div class="footer--links">
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Complaints Process</li>
            </ul>
          </div>
          <div class="footer--links">
            <ul>
              <li>Vulnerable Client Policy</li>
              <li>Seek Professional Advice</li>
            </ul>
          </div>
          <div class="footer--copyright">
            © Copyright Legal Eagles
          </div>
        </div>
      </div>

      <div class="footer--bottom">
        <div class="social-media--links">
          <span class="extrabold">Follow us</span>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img alt="Facebook link" src="../assets/icon-facebook.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img alt="Linked In link" src="../assets/icon-linkedin.svg" />
              </a>
            </li>
            <!-- TODO: Youtube SVG incorrect from design. Will fix if have time -->
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img alt="Youtube link" src="../assets/icon-youtube.svg" />
              </a>
            </li>
          </ul>
        </div>
        <div class="contact-us">
          <router-link :to="{ name: 'Contact' }">
            <span class="extrabold">Get in touch</span>
            <span>Contact us</span>
            <img alt="Plus icon" src="../assets/icon-plus-white.svg" />
          </router-link>
        </div>
        <div class="news">
          <router-link :to="{ name: 'Contact' }">
            <span class="extrabold">News</span>
            <span>Subscribe for updates</span>
            <img alt="Plus icon" src="../assets/icon-plus-white.svg" />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">

footer {
  border-bottom: 5px solid black;
}

.footer {
  border-top: 1px solid #EBEBEB;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  a {
    display: flex;
    text-decoration: none;
    color: #ffffff;
  }

  &--top {
    position: relative;
    height: 140px;
    color: #2F2D2D;
    font-size: 12px;
    line-height: 1rem;
    font-weight: 300;

    &__content {
      display: flex;
      justify-content: space-between;
      padding: 2rem 0;
      margin: 0 auto;

      div {
        width: 25%;
      }
    }

    .logo-small {
      position: absolute;
      top: 37px;
      left: 37px;
    }

    .address {
      display: flex;
      flex-direction: column;
    }
  }

  &--links {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &--bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background-color: #2F2D2D;
    width: 100%;
    height: 50px;

    .social-media--links {
      display: flex;
      align-items: center;
      margin-left: 30px;

      span {
        font-weight: 800;
        font-size: 1rem;
        line-height: 1rem;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        margin-left: 0.66rem;
      }

      li {
        margin: 0 0.33rem;
      }
    }

    .contact-us {
      span {
        margin: 0 0.5rem;
      }
    }

    .news {
      margin-right: 1rem;

      span {
        margin: 0 0.5rem;
      }
    }
  }
}

</style>
