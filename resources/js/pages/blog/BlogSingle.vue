<template>
  <Layout :pageTitle="pageTitle">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto pt-4 pl-4">
          <div class="page-intro-wrapper">
            <h3 class="pt-2">{{ singlePostResult?.title }}</h3>

            <p v-if="singlePostResult?.createdby_name" class="single-post-author-p">
              By: {{ singlePostResult?.createdby_name }}
              <!-- <span
                v-if="singlePostResult != null"
                v-for="(categoryName, i) in singlePostResult.catNames"
                :key="i"
                class="post-entry-category-link-span pr-1"
              >
                <AppLink :linkUrl="`/blog/category/${singlePostResult.catSlugs[i]}`">{{
                  categoryName
                }}</AppLink>
              </span> -->
              on {{ singlePostResult?.created_at }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="errors.fail" class="row">
        <div class="col-md-10 mx-auto">
          <HandleMsg infotype="error" :msg="errors.fail" />
        </div>
      </div>
      <div v-else class="row">
        <div class="col-md-10 mt-2 mb-3 mx-auto">
          <div v-if="singlePostResult != null" class="post-wrapper pt-2">
            <Markdown :source="singlePostResult?.body" />
          </div>
          <div v-else class="post-wrapper pt-4">
            <HandleMsg
              infotype="info"
              msg="<p>
              Sorry, the post is either deleted or the link is invalid.
            </p>"
            />
          </div>

          <div class="col-md-12 no-padding next-prev-link-wrapper">
            <section>
              <div class="row mt-3">
                <!-- Previous post button -->
                <div class="col">
                  <div
                    v-if="previousPostResult != null"
                    class="next-prev-link-inner-wrapper text-left"
                  >
                    <AppLink :linkUrl="`/blog/${previousPostResult.slug}`">
                      <span
                        ><span class="small"
                          ><i class="fa fa-chevron-left"></i
                          ><i class="fa fa-chevron-left"></i
                        ></span>
                        Previous Post
                      </span>
                      <p>{{ limitString(40, previousPostResult.title) }}</p>
                    </AppLink>
                  </div>
                </div>
                <!-- Next post button -->
                <div class="col">
                  <div
                    v-if="nextPostResult != null"
                    class="next-prev-link-inner-wrapper text-left"
                  >
                    <AppLink :linkUrl="`/blog/${nextPostResult.slug}`">
                      <span
                        >Next Post
                        <span class="small"
                          ><i class="fa fa-chevron-right"></i
                          ><i class="fa fa-chevron-right"></i
                        ></span>
                      </span>
                      <p>{{ limitString(40, nextPostResult.title) }}</p>
                    </AppLink>
                  </div>
                </div>
              </div>
            </section>
            <section v-if="singlePostResult != null">
              <!-- Blog comment -->
              <BlogComment
                :postId="singlePostResult?.id"
                :requestSlug="urlSlug"
                :postCommentResult="postCommentResult"
                :previousUserCommentResult="previousUserCommentResult"
              />

              <!-- Blog comment replies -->
              <BlogReplies :commentEntry="postCommentResult" />
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Markdown from "vue3-markdown-it";
import Layout from "../../shared/Layout";
import AppLink from "../../shared/AppLink.vue";
import HandleMsg from "../../shared/HandleMsg.vue";
import BlogComment from "./comments-replies/Comments.vue";
import BlogReplies from "./comments-replies/Replies.vue";
import { limitString } from "../../helper/util";

const props = defineProps({
  errors: {
    type: Object,
    default: {},
  },
  pageIntro: {
    type: String,
    default: "",
  },
  pageTitle: {
    type: String,
    default: "",
  },

  singlePostResult: {
    type: Object,
    default: null,
  },
  urlSlug: {
    type: String,
    default: "",
  },

  defaultImgLink: {
    type: String,
    default: "",
  },
  nextPostResult: {
    type: Object,
    default: null,
  },

  previousPostResult: {
    type: Object,
    default: null,
  },

  postCommentResult: {
    type: Object,
    default: [],
  },
  previousUserCommentResult: {
    type: Boolean,
    default: false,
  },
});
</script>
