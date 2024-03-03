<template>
  <div>
    <OptionElementInput
      :resultObj="blog_categories_data.categories_res"
      :labelPrepend="true"
      :disabledInput="true"
      :defaultOptionSelected="blog_categories_data.default_selected_category"
      countProperty="categoryPostTotal"
      @updateSelectedOptionInput="handleCategorySelected"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { router } from "@inertiajs/vue3";
import OptionElementInput from "../../shared/OptionElementInput";
const emit = defineEmits(["updateSelectedCategory"]);
const props = defineProps({
  categories_res: {
    type: Object,
    default: {},
  },
});

const blog_categories_data = reactive({
  categories_res: props.categories_res,
  default_selected_category: "Categories",
});

const handleCategorySelected = (category_selected) => {
  emit("updateSelectedCategory", category_selected);
};
</script>
