<template>
  <div class="blog-searh-inner-wrapper">
    <span class="local-search-icon">
      <i class="fas fa-search"></i>
    </span>
    <input
      ref="blogSearchInput"
      v-model="searchedWord"
      type="text"
      class="form-control main-search-input"
      placeholder="Search for post..."
    />
    <span
      v-show="searchedWord != ''"
      class="local-search-icon-clear"
      @click="clearSearchInput"
    >
      <i class="fas fa-times"></i>
    </span>
    <div class="blog-search-result" v-show="searchedWord != ''">
      <section v-show="searchData.isSearching">
        <LoadingIndicator />
      </section>
      <section
        v-show="
          searchData.isSearchComplete &&
          !searchData.isSearching &&
          searchData.postResData.length > 0
        "
      >
        <p className="text-center number-result-found-p">
          {{
            searchData.postResData.length > 1
              ? "(" + searchData.postResData.length + ") post results "
              : "(" + searchData.postResData.length + ") post result "
          }}
          found
        </p>

        <div v-for="(postEntry, index) in searchData.postResData" :key="index">
          <p class="post-entry-title">
            <AppLink :linkUrl="`/blog/${postEntry.slug}`">
              {{ limitString(60, postEntry.title) }}
            </AppLink>
          </p>
        </div>
      </section>

      <section
        v-show="
          searchData.isSearchComplete &&
          !searchData.isSearching &&
          searchData.categoryResData.length > 0
        "
      >
        <p className="text-center number-result-found-p">
          {{
            searchData.categoryResData.length > 1
              ? "(" + searchData.categoryResData.length + ") category results "
              : "(" + searchData.categoryResData.length + ") category result "
          }}
          found
        </p>

        <div v-for="(categoryEntry, index) in searchData.categoryResData" :key="index">
          <p class="post-entry-title">
            <span
              class="search-res-category-span"
              @click="() => handleSearchResCategory(categoryEntry.slug)"
            >
              {{ limitString(60, categoryEntry.name) }}
            </span>
          </p>
        </div>
      </section>

      <section
        v-show="
          searchData.isSearchComplete &&
          !searchData.isSearching &&
          searchData.postResData.length <= 0 &&
          searchData.categoryResData.length <= 0 &&
          searchedWord != ''
        "
      >
        <div className="text-center pt-3">
          <HandleMsg
            infotype="info"
            :msg="`Sorry no result found for (${searchedWord}) search, please try again thank you.`"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, reactive } from "vue";
import { focusOnFirstInput, returnSystemErrorMsg, limitString } from "../../helper/util";
import LoadingIndicator from "../../shared/LoadingIndicator";
import AppLink from "../../shared/AppLink";
import HandleMsg from "../../shared/HandleMsg";
import axios from "../../api/axios";
import { debounce } from "lodash";

let blogSearchInput = ref(null),
  searchedWord = ref("");

const emit = defineEmits(["updateSelectedCategory"]);

const props = defineProps({
  isSearchOn: {
    type: Boolean,
    default: false,
  },
  focusOnInput: {
    type: Boolean,
    default: false,
  },
});

const searchData = reactive({
  isSearching: false,
  isSearchComplete: false,
  customErr: "",
  defaultImgLink: "",
  postResData: [],
  categoryResData: [],
});
const clearSearchInput = () => {
  searchedWord.value = "";
};
const handleSearchResCategory = (category_name) => {
  clearSearchInput();
  emit("updateSelectedCategory", category_name);
};

const handleSearchForm = async (searchedWordValue) => {
  if (searchedWordValue != "") {
    searchData.isSearching = true;

    if (searchData.isSearchComplete) {
      searchData.isSearchComplete = false;
    }

    try {
      const res = await axios.post("/blog/search-post", {
        searchedword: searchedWordValue,
      });

      if (res?.data?.error != "") {
        searchData.customErr = res.data.error;
      } else {
        searchData.categoryResData = res?.data?.categoryResData;
        searchData.postResData = res?.data?.postResData;
        searchData.defaultImgLink = res?.data?.defaultImgLink;
      }
    } catch (err) {
      searchData.customErr = returnSystemErrorMsg();
      console.log(err);
    } finally {
      searchData.isSearching = false;
      searchData.isSearchComplete = true;
    }
  } //End if search text is greater than 2
};

watchEffect(() => {
  //Keep an eye on the search bar to see if it visible
  if (props.isSearchOn && props.focusOnInput) {
    //Wait afew seconds for the input to become ready
    //before focusing on it.
    setTimeout(() => {
      focusOnFirstInput(blogSearchInput);
    }, 50);
  } else {
    searchedWord.value = "";
    searchData.postResData = [];
  }
});

//Watch the search input value for changes.
watch(
  searchedWord,
  debounce((value) => {
    handleSearchForm(value);
  }, 400)
);
</script>
