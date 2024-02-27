<template>
  <Layout :pageTitle="pageTitle">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto pt-5">
          <div class="page-intro-wrapper pb-3">
            <div class="row">
              <div class="col-md-7">
                <h3>Admin create post</h3>
              </div>
              <div class="col-md-4 admin-page-intro-btn-wrapper">
                <AppLink
                  linkUrl="/admin/allpost"
                  className="btn btn-primary no-border-radius"
                >
                  All post <i class="fas fas fa-eye"></i>
                </AppLink>
              </div>
            </div>
          </div>

          <div class="form-wrapper">
            <section v-if="createPostFormData.processing"><LoadingIndicator /></section>
            <section v-if="!createPostFormData.processing">
              <HandleMsg v-if="errors.fail" infotype="error" :msg="errors.fail" />
              <form @submit.prevent="handleCreatePost">
                <!-- File upload componenet -->
                <FileUpload
                  @updateimages="updateImages"
                  :postImages="createPostFormData.images"
                />

                <div class="form-group">
                  <hr />
                  <label class="form-label" for="title">Title*</label>
                  <div class="text-danger small" v-if="errors.title">
                    {{ errors.title }}
                  </div>
                  <input
                    ref="firstInput"
                    v-model="createPostFormData.title"
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    maxlength="255"
                    autocomplete="off"
                  />
                </div>

                <!-- Multi Select componenet -->
                <MultiSelect
                  @addorremove="updateCategoryIds"
                  :categoriesResult="categoriesResult"
                  :selectError="errors.selectedCategories"
                  :categoryIds="createPostFormData.selectedCategories"
                />

                <!-- Post body componenet -->
                <PostBody
                  v-model="createPostFormData.postbody"
                  :postBodyError="errors.postbody"
                />

                <div className="text-center saveorpublish">
                  <div class="text-danger small" v-if="errors.saveorpublish">
                    {{ errors.saveorpublish }}
                  </div>
                  <label className="label-container"
                    >Save post
                    <input
                      v-model="createPostFormData.saveorpublish"
                      type="radio"
                      name="saveorpublish"
                      value="saved"
                      :checked="
                        createPostFormData.saveorpublish === 'saved' ? true : false
                      "
                    /> </label
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="label-container"
                    >Publish post
                    <input
                      v-model="createPostFormData.saveorpublish"
                      type="radio"
                      name="saveorpublish"
                      value="published"
                      :checked="
                        createPostFormData.saveorpublish === 'published' ? true : false
                      "
                    />
                  </label>
                </div>

                <p class="small">All fields marked with a * are mandatory</p>

                <div class="pt-3 text-center">
                  <AppButton btnType="submit" btnStyle="primary">Submit</AppButton>
                </div>
              </form>
            </section>
          </div>
        </div>
        <!-- end row div -->
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { router } from "@inertiajs/vue3";
import AppButton from "../../shared/AppButton";
import AppLink from "../../shared/AppLink";
import Layout from "../../shared/Layout";
import LoadingIndicator from "../../shared/LoadingIndicator.vue";
import HandleMsg from "../../shared/HandleMsg";
import PostBody from "./PostBody";
import MultiSelect from "./MultiSelect";
import FileUpload from "./FileUpload";
import { focusOnFirstInput } from "../../helper/util";

let firstInput = ref(null);

const props = defineProps({
  errors: Object,
  categoriesResult: {
    type: Object,
    default: {},
  },
  pageTitle:{
    type: String,
    default: "",
  }
});

const createPostFormData = reactive({
  processing: false,
  title: "",
  postbody: "",
  selectedCategories: [],
  images: [],
  saveorpublish: "",
  totalFiles: 0,
});

const updateCategoryIds = (newSelectedValue) => {
  createPostFormData.selectedCategories = newSelectedValue;
};

const updateImages = (newImagesArray) => {
  createPostFormData.images = newImagesArray;
  createPostFormData.totalFiles = createPostFormData.images.length;
};

const handleCreatePost = () => {
  router.post("/admin/create-post-save", createPostFormData, {
    onStart: () => {
      createPostFormData.processing = true;
    },
    onFinish: () => {
      createPostFormData.processing = false;
    },
  });
};

onMounted(() => {
  focusOnFirstInput(firstInput);
});
</script>
