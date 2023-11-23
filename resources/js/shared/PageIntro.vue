<template>
  <div class="row">
    <div class="col-md-12 pt-5 text-center">
      <div class="page-intro-wrapper pb-4">
        <h3 class="pt-2">{{ intro }}</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  intro: {
    type: String,
    default: "",
  },
});
</script>
