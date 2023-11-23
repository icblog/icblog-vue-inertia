<template>
  <Head>
    <title>
      {{ appName + " | " + pageTitle }}
    </title>
  </Head>
  <Header :handlePageNav="handlePageNav" />
  <div class="content-wrapper">
    <slot />
  </div>
  <Footer :handlePageNav="handlePageNav" />
</template>
<script>
//appDataObj.appName variable comes from views/app.blade.php
const appName = appDataObj.appName;
</script>
<script setup>
import Header from "./Header";
import Footer from "./Footer";
import { Head } from "@inertiajs/vue3";

defineProps({
  pageTitle: {
    type: String,
    default: "",
  },
  handlePageNav: {
    type: Function,
    default: null,
  },
});
</script>
