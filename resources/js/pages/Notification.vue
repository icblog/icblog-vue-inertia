<template>
  <Layout :pageTitle="pageTitle">
    <div class="container">
      <div class="row">
        <div class="col-md-7 mx-auto pt-5">
          <div class="page-intro-wrapper text-center pb-3">
            <h3>Information</h3>
          </div>
          <div class="form-wrapper">
            <section>
              <HandleMsg
                v-if="msgData.type && msgData.type == 'error'"
                infotype="error"
                :msg="msgData.msg"
              />
              <HandleMsg
                v-if="msgData.type && msgData.type == 'success'"
                infotype="success"
                :msg="msgData.msg"
              />

              <HandleMsg
                v-if="msgData.type && msgData.type == 'info'"
                infotype="info"
                :msg="msgData.msg"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { onMounted } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../shared/Layout";
import HandleMsg from "../shared/HandleMsg";

const props = defineProps({ 
  msgData: Object,
  pageTitle: {
      type: String,
      default: "",
    },

 });

onMounted(() => {
  if (props.msgData.redirectLink != "") {
    setTimeout(() => {
      router.visit(props.msgData.redirectLink);
    }, props.msgData.redirectTime);
  }
});
</script>
