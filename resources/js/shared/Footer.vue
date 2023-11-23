<template>
  <footer className="footer-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 pb-4">
          <h6>Site links</h6>
          <ul>
            <li>
              <AppLink
                v-if="$page.component.toLowerCase() != 'home'"
                linkUrl="/"
                className="header-nav-link"
              >
                <i class="fa fa-home"></i> Home</AppLink
              >
              <AppButton
                v-else
                customClass="header-nav-link"
                :btnFunc="() => handlePageNav('home')"
              >
                <i class="fa fa-home"></i> Home</AppButton
              >
            </li>
            <li v-show="$page.component.toLowerCase() == 'home'">
              <AppButton
                customClass="header-nav-link"
                :btnFunc="() => handlePageNav('about')"
              >
                <i class="fa fa-info-circle"></i> About</AppButton
              >
            </li>
            <li v-show="$page.component.toLowerCase() == 'home'">
              <AppButton
                customClass="header-nav-link"
                :btnFunc="() => handlePageNav('projects')"
              >
                <i class="fa fa-briefcase"></i> Projects
              </AppButton>
            </li>

            <li>
              <AppLink className="footer-links" linkUrl="/blog/post/latest"
                ><i class="fab fa-blogger"></i> Blog</AppLink
              >
            </li>
          </ul>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 pb-4">
          <h6>Get intouch</h6>
          <ul>
            <li v-show="$page.component.toLowerCase() == 'home'">
              <AppButton
                customClass="header-nav-link"
                :btnFunc="() => handlePageNav('contact')"
              >
                <i class="fas fa-sms"></i> Contact
              </AppButton>
            </li>
            <li>
              <AppLink className="footer-links" linkUrl="https://github.com/icblog" linkType="ext"
                ><i class="fab fa-github-square"></i> Github</AppLink
              >
            </li>
          </ul>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 pb-4">
          <h6>Useful links</h6>
          <ul>
            <li>
              <AppLink linkUrl="https://www.w3schools.com/" linkType="ext">
                <i class="fa fa-school"></i> W3C school</AppLink
              >
            </li>
            <li>
              <AppLink linkUrl="https://stackoverflow.com/" linkType="ext">
                <i class="fa fa-rocket"></i> Stack overflow</AppLink
              >
            </li>
            <li>
              <AppLink linkUrl="https://medium.com" linkType="ext"
                ><i class="fab fa-medium-m"></i> Medium.com</AppLink
              >
            </li>
            <li></li>
          </ul>
        </div>
        <div class="col-md-12 text-center">
          <i class="fa fa-copyright" aria-hidden="true"></i> {{ copyRightData }}
        </div>
      </div>
    </div>
  </footer>
  <transition name="fade">
    <div class="scroll-to-topbtn" v-show="scY > 300">
      <AppButton btnStyle="primary" :btnFunc="toTop"
        ><i class="fa fa-chevron-up"></i
      ></AppButton>
    </div>
  </transition>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppLink from "./AppLink.vue";
export default {
  components: {
    AppButton,
    AppLink,
  },
  data() {
    return {
      copyRightData: `${new Date().getFullYear()} icblog.com`,
      scTimer: 0,
      scY: 0,
    };
  },
  props: {
    handlePageNav: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleScrollToTopBtn: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScrollToTopBtn);
  },
};
</script>
