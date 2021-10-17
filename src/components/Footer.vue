<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="logo-small"></div>
      <div class="address">
        <span>Legal Eagles Limited</span>
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
        Copyright
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-media">
        <span>Follow us</span>
        <ul>
          <li>FB</li>
          <li>ln</li>
          <li>YT</li>
        </ul>
      </div>
      <div class="contact-us">
        <span>Get in touch</span>
        <span>Contact us +</span>
      </div>
      <div class="news">
        <span>News</span>
        <span>Subscribe for updates</span>
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

.footer {
  border-top: 1px solid #EBEBEB;
  display: flex;
  flex-direction: column;
  width: 1400px;
  margin: 0 auto;

  &-top {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    padding: 2rem 0;

    .logo-small {
      position: absolute;
      left: 0;
      padding: 1rem;
    }

    .address {
      display: flex;
      flex-direction: column;
    }
  }

  &--links {
    ul {
      margin: 0;
      list-style: none;
    }
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    background-color: #2F2D2D;
    width: 100%;
    height: 50px;

    .social-media {
      display: flex;
      margin-left: 30px;

      ul {
        margin: 0;
        display: flex;
        list-style: none;
      }

      li {
        margin: 0 0.33rem;
      }
    }

    .news {
      margin-right: 39px;
    }
  }
}

</style>
