<template>
  <Layout pageTitle="user-logout">
    <div class="container">
      <div class="row">
        <div class="col-md-12 pt-5 text-center">
          <div class="page-intro-wrapper pb-4">
            <h3 class="pt-2">Logout</h3>
          </div>
        </div>
      </div>
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
import LoadingIndicator from "../../shared/LoadingIndicator";

let processing = ref(true);

defineProps({ errors: Object });

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
