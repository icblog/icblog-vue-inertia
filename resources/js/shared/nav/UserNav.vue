<template>
  <li v-if="$page.component.toLowerCase() == 'blog/bloghome' && !$page.props.isLoggedIn">
    <AppLink linkUrl="/login" className="header-nav-link"> Login/Register </AppLink>
  </li>

  <li v-if="$page.component.toLowerCase() != 'blog/bloghome'">
    <AppLink linkUrl="/blog/post/all" className="header-nav-link"> Blog </AppLink>
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
      Contact
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
      Projects
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
      About</AppButton
    >
  </li>
  <li>
    <AppLink
      v-if="$page.component.toLowerCase() != 'home'"
      linkUrl="/"
      className="header-nav-link"
    >
      Home</AppLink
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
      Home</AppButton
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
