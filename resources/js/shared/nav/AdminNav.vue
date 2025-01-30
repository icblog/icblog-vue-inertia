<template>
  <li v-if="$page.component.toLowerCase() != 'admin/admindashboard'">
    <AppLink linkUrl="/admin/dashboard" className="header-nav-link"> DASHBOARD </AppLink>
  </li>
  <li v-if="$page.component.toLowerCase() != 'blog/bloghome'">
    <AppLink linkUrl="/blog/post/all" className="header-nav-link"> BLOG HOME </AppLink>
  </li>
  <li v-if="$page.component.toLowerCase() != 'home'">
    <AppLink linkUrl="/" className="header-nav-link"> SITE HOME </AppLink>
  </li>
</template>
<script setup>
import AppLink from "../AppLink";
</script>
