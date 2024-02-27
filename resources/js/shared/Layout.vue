<template>
  <Head>
    <title>
      {{pageTitle}}
    </title>
  </Head>
  <Header :handlePageNav="handlePageNav" />
  <div class="content-wrapper">
    <slot />
  </div>
  <Footer :handlePageNav="handlePageNav" />
</template>

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
