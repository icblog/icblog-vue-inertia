<template>
  <header :class="isHeaderFixed ? 'header-fix' : ''">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="header-content-wrapper">
            <div class="left-content-wrapper">
              <Logo />
            </div>
            <!-- End left-content-wrapper -->
            <div
              :class="
                isMenuOn
                  ? 'middle-content-wrapper menu-on'
                  : 'middle-content-wrapper menu-off'
              "
            >
              <ul>
                <AdminNav v-if="$page.props.isLoggedIn && $page.props.isAdmin" />
                <UserNav v-else :handlePageNav="handlePageNav" :toggleMenu="toggleMenu" />
              </ul>
            </div>
            <!-- End middle-content-wrapper -->
            <div class="right-content-wrapper">
              <ul>
                <li>
                  <AppButton
                    :btnTitle="isMenuOn ? 'Close menu' : 'Open menu'"
                    customClass="menu-btn show-on-mobile hide-on-desktop"
                    :btnFunc="toggleMenu"
                  >
                    <span><i :class="isMenuOn ? 'fas fa-times' : 'fa fa-bars'"></i></span>
                  </AppButton>
                </li>

                <li
                  v-if="
                    $page.props.isLoggedIn &&
                    $page.component.toLowerCase() != 'auth/logout'
                  "
                >
                  <span class="account-link">
                    <div class="dropdown mt-2">
                      <a href="/user/profile" title="Account" class="hello-user">
                        <i class="fa fa-user"></i>
                      </a>
                      <div class="dropdown-content">
                        <span class="span-user-name hello-user"
                          >Hi, {{ $page.props.username }}</span
                        >

                        <AppLink v-if="$page.props.isAdmin" linkUrl="/admin/dashboard">
                          Admin
                        </AppLink>

                        <AppLink linkUrl="/user/profile"> Profile </AppLink>

                        <AppLink linkUrl="/logout"> Log Out </AppLink>
                      </div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            <!-- End right-content-wrapper -->
          </div>
          <!-- END COL-MD-12 -->
        </div>
        <!-- END HEADER CONTENT WRAPPER -->
      </div>
      <!-- END ROW -->
    </div>
    <!-- END CONTAINER -->
  </header>
</template>
<script>
import AppLink from "./AppLink";
import Logo from "./Logo";
import UserNav from "./nav/UserNav";
import AdminNav from "./nav/AdminNav";
import AppButton from "./AppButton";

export default {
  components: {
    AppLink,
    Logo,
    UserNav,
    AdminNav,
    AppButton,
  },
  data() {
    return {
      isMenuOn: false,
      isHeaderFixed: false,
    };
  },
  props: {
    handlePageNav: {
      type: Function,
      default: null,
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOn = !this.isMenuOn;
    },
    handleHeaderFixed() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.isHeaderFixed = true;
      } else {
        this.isHeaderFixed = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleHeaderFixed);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleHeaderFixed);
  },
};
</script>
