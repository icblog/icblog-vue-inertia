<template>
  <li v-if="$page.component.toLowerCase() == 'blog/bloghome' && !$page.props.isLoggedIn">
    <AppLink linkUrl="/login" className="header-nav-link"> LOGIN/REGISTER</AppLink>
  </li>

  <li v-if="$page.component.toLowerCase() != 'blog/bloghome'">
    <AppLink linkUrl="/blog/post/all" className="header-nav-link"> BLOG </AppLink>
  </li>

  <li v-show="$page.component.toLowerCase() == 'home'">
    <AppButton
      customClass="header-nav-link"
      :btnFunc="
        () => {
          handlePageNav('contact');
          toggleMenu();
        }
      "
    >
      CONTACT
    </AppButton>
  </li>
  <li v-show="$page.component.toLowerCase() == 'home'">
    <AppButton
      customClass="header-nav-link"
      :btnFunc="
        () => {
          handlePageNav('projects');
          toggleMenu();
        }
      "
    >
      PROJECTS
    </AppButton>
  </li>
  <li v-show="$page.component.toLowerCase() == 'home'">
    <AppButton
      customClass="header-nav-link"
      :btnFunc="
        () => {
          handlePageNav('about');
          toggleMenu();
        }
      "
    >
      ABOUT</AppButton
    >
  </li>
  <li>
    <AppLink
      v-if="$page.component.toLowerCase() != 'home'"
      linkUrl="/"
      className="header-nav-link"
    >
      HOME</AppLink
    >
    <AppButton
      v-else
      customClass="header-nav-link"
      :btnFunc="
        () => {
          handlePageNav('home');
          toggleMenu();
        }
      "
    >
      HOME</AppButton
    >
  </li>
</template>

<script setup>
import AppLink from "../AppLink";
import AppButton from "../AppButton";
const props = defineProps({
  handlePageNav: {
    type: Function,
    default: null,
  },
  toggleMenu: {
    type: Function,
    default: null,
  },
});
</script>
