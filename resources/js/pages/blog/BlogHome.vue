<template>
  <Layout :pageTitle="pageTitle">
    <div class="container">
      <div class="row mt-5">
        <div
          :class="{
            'blog-categories-wrapper': true,
            'hide-categories-wrapper': is_search_on,
          }"
        >
          <BlogCategories
            :categories_res="categoriesResult"
            @updateSelectedCategory="updateSelectedCategory"
          />
        </div>
        <div
          :class="{
            'sort-wrapper': true,
            'hide-sort-wrapper': is_search_on,
          }"
        >
          <OptionElementInput
            :resultObj="sort_array"
            :labelPrepend="true"
            arrType="arr"
            :allowSearch="false"
            :disabledInput="true"
            customWrapperClass="sort-blog-post-wrapper"
            :defaultOptionSelected="sort"
            @updateSelectedOptionInput="updateSortSelected"
          />
        </div>
        <div
          :class="{
            'blog-search-wrapper': true,
            'show-search-bar': is_search_on,
          }"
        >
          <BlogSearch
            v-show="
              $page.component.toLowerCase() == 'blog/bloghome' ||
              $page.component.toLowerCase() == 'blog/blogsingle'
            "
            :isSearchOn="true"
            @updateSelectedCategory="updateSelectedCategory"
          />
        </div>
        <div class="blog-search-btn-wrapper">
          <AppButton
            :btnTitle="is_search_on ? 'Close search' : 'Search'"
            btnStyle="primary"
            :btnFunc="toggleSearch"
          >
            <span><i :class="is_search_on ? 'fa fa-times' : 'fa fa-search'"></i></span>
          </AppButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 pt-3">
          <div class="page-intro-wrapper pb-4">
            <h3 class="pt-2">{{ pageIntro }}</h3>
          </div>
        </div>
        <div class="col-md-12 mt-2 mb-3">
          <div class="post-wrapper box-shadow">
            <section v-if="is_sorting" class="mt-5 pt-5"><LoadingIndicator /></section>

            <section v-else>
              <HandleMsg v-if="errors.fail" infotype="error" :msg="errors.fail" />
              <div class="row pt-1 display-flex">
                <div v-if="mainPostResult.length === 0" class="col-md-12 pt-5 mt-5">
                  <HandleMsg
                    infotype="info"
                    :msg="`Sorry no post found in <strong>${urlSlug}</strong>, please try again some other time thank you`"
                  />
                </div>

                <div
                  v-else
                  v-for="(postEntry, index) in mainPostResult"
                  class="col-xs-12 col-sm-12 col-md-4 col-lg-4 pb-3 pt-3"
                  :key="index"
                >
                  <div class="post-entry-wrapper">
                    <AppLink :linkUrl="`/blog/${postEntry.slug}`">
                      <img
                        class="card-img no-border-radius"
                        :src="
                          postEntry.imgUrls === null ? defaultImgLink : postEntry.imgUrls
                        "
                        alt=""
                      />
                    </AppLink>
                    <div class="post-entry-detail-wrapper">
                      <p class="post-entry-title">
                        <AppLink :linkUrl="`/blog/${postEntry.slug}`">
                          {{ limitString(40, postEntry.title) }}
                        </AppLink>
                      </p>

                      <p class="post-entry-detail-p">
                        <strong>By:</strong> {{ postEntry.createdby_name }}<br />
                        <strong>Date: </strong
                        >{{ returnFormattedDate(postEntry.created_at) }}<br />
                        <strong>Category: </strong>

                        <span v-if="urlAction == 'category'">
                          <span
                            v-for="(categoryEntry, i) in returnPostEntryCatLinkArray(
                              postEntry
                            ).catNameArray"
                            class="post-entry-category-link-span"
                            :key="i"
                          >
                            {{ categoryEntry }}
                          </span>
                        </span>

                        <span
                          v-else
                          v-for="(categoryEntry, i) in returnPostEntryCatLinkArray(
                            postEntry
                          ).catNameArray"
                          :key="i"
                          class="post-entry-category-link-span"
                        >
                          <span
                            class="blog-details-span-link"
                            @click="() => updateSelectedCategory(categoryEntry)"
                          >
                            {{ categoryEntry }}
                          </span>
                          <!-- <AppLink
                            :linkUrl="`/blog/category/${
                              returnPostEntryCatLinkArray(postEntry).catSlugArray[i]
                            }/latest`"
                            >{{ categoryEntry }}</AppLink
                          >--> </span
                        ><br />
                        <strong>Views:</strong> {{ postEntry.views }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-show="mainResult?.next_page_url != null"
                class="text-center pt-4 pb-4"
              >
                <AppButton btnStyle="primary" :btnFunc="loadMorePosts">
                  {{ isPaginating ? "Please wait...." : "Load more" }}
                </AppButton>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { router } from "@inertiajs/vue3";
import AppLink from "../../shared/AppLink";
import AppButton from "../../shared/AppButton";
import Layout from "../../shared/Layout";
import HandleMsg from "../../shared/HandleMsg";
import LoadingIndicator from "../../shared/LoadingIndicator";
import OptionElementInput from "../../shared/OptionElementInput";
import BlogCategories from "./BlogCategories";
import BlogSearch from "./BlogSearch";
import { limitString, returnFormattedDate } from "../../helper/util";
export default {
  components: {
    Layout,
    HandleMsg,
    LoadingIndicator,
    AppLink,
    BlogCategories,
    BlogSearch,
    AppButton,
    OptionElementInput,
  },

  props: {
    errors: {
      type: Object,
      default: [],
    },
    pageIntro: {
      type: String,
      default: "",
    },
    pageTitle: {
      type: String,
      default: "",
    },
    categoriesResult: {
      type: Array,
      default: [],
    },
    mainResult: {
      type: Object,
      default: [],
    },
    urlSlug: {
      type: String,
      default: "",
    },
    urlAction: {
      type: String,
      default: "",
    },
    defaultImgLink: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      sort_array: ["latest", "popular"],
      is_search_on: false,
      isPaginating: false,
      is_sorting: false,
      action: "post",
      slug: "all",
      sort: "latest",
      mainPostResult: this.mainResult?.data,
      initialUrl: this.$page.url,
    };
  },
  methods: {
    limitString,
    returnFormattedDate,
    toggleSearch() {
      this.is_search_on = !this.is_search_on;
    },

    sortPost() {
      router.post(
        `/blog/${this.action}/${this.slug}`,
        { action: this.action, slug: this.slug, sort: this.sort },
        {
          onStart: () => {
            this.is_sorting = true;
          },
          onFinish: () => {
            this.is_sorting = false;
          },
          onSuccess: () => {
            this.mainPostResult = this.mainResult?.data;
            window.history.replaceState(
              {},
              this.$page.title,
              `/blog/${this.action}/${this.slug}`
            );
          },
        }
      );
    },
    loadMorePosts() {
      if (this.mainResult?.next_page_url === null) {
        return;
      }

      router.get(
        this.mainResult?.next_page_url,
        {},
        {
          preserveState: true,
          preserveScroll: true,
          only: ["mainResult"],
          onStart: () => {
            this.isPaginating = true;
          },
          onFinish: () => {
            this.isPaginating = false;
          },
          onSuccess: () => {
            this.mainPostResult = [...this.mainPostResult, ...this.mainResult?.data];
            window.history.replaceState({}, this.$page.title, this.initialUrl);
          },
        }
      );
    },
    updateSelectedCategory(selected_category) {
      this.action = "category";
      this.sort = "latest";
      this.slug = selected_category;
      this.sortPost();
    },
    updateSortSelected(selected_sort) {
      this.sort = selected_sort;
      this.sortPost();
    },
    returnPostEntryCatLinkArray(postEntry) {
      let catNameArray = postEntry.catNames.split(","),
        catSlugArray = postEntry.catSlugs.split(",");
      return {
        catNameArray: catNameArray,
        catSlugArray: catSlugArray,
      };
    },
  },
};
</script>
