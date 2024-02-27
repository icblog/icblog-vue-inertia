<template>
  <Layout :pageTitle="pageTitle">
    <div class="container">
      <PageIntro intro="Logout" />
      <div class="row">
        <div class="col-md-7 mx-auto">
          <div class="form-wrapper">
            <section v-if="processing"><LoadingIndicator /></section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../../shared/Layout";
import PageIntro from "../../shared/PageIntro";
import LoadingIndicator from "../../shared/LoadingIndicator";

let processing = ref(true);

defineProps({ 
  errors: Object, 
  pageTitle:{
  type: String,
  default: "",
  } 
});

const handleLogout = () => {
  setTimeout(() => {
    router.post(
      "/handle-logout",
      {},
      {
        onFinish: () => {
          processing.value = false;
        },
      }
    );
  }, 1000);
};

onMounted(() => {
  handleLogout();
});
</script>
