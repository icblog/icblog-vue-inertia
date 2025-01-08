<template>
  <carousel
    class="story-carousel story-carousel--colors"
    :hideArrows="false"
    :hideArrowsOnBound="true"
  >
  <slide class="story-carousel__slide">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <img
              src="../../../public/images/adom-balloons.png"
              class="projects__row-img"
              alt="Adom balloons project image"
            />
          </div>
          <div class="col-md-4">
            <h5 class="pb-3 pt-2">Adom balloons</h5>
            <p>
              I volunteered to create an application for a small business that provide event decoration services. This project not only enhanced my web development skills but also made a meaningful impact for the startup.
            </p>
            <span class="mr-4"
              ><AppLink linkType="ext" linkUrl="https://adomballoons.icblog.uk/"
                >Live</AppLink
              ></span
            >
            <span
              ><AppLink linkType="ext" linkUrl="https://github.com/icblog/Adom-laravel"
                >Source code</AppLink
              ></span
            >
          </div>
        </div>
      </div>
    </slide>

    <slide class="story-carousel__slide">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <img
              src="../../../public/images/xyz-admin.png"
              class="projects__row-img"
              alt="Icblog project image"
            />
          </div>
          <div class="col-md-4">
            <h5 class="pb-3 pt-2">IC-admin</h5>
            <p>
              At my workplace, reliance on paper and Excel sheets has led to significant challenges in managing records, including difficulties in searching, creating, reading, updating, and deleting data. To address these issues, I developed IC-ADMIN, a comprehensive application suite. I presented this solution to my line manager demonstrating how it can effectively resolve the current problems.
            </p>
            <span class="mr-4"
              ><AppLink linkType="ext" linkUrl="https://icadmin.icblog.uk/"
                >Live</AppLink
              ></span
            >
            <span
              ><AppLink linkType="ext" linkUrl="https://github.com/icblog/xyzadmin"
                >Source code</AppLink
              ></span
            >
          </div>
        </div>
      </div>
    </slide>

    <slide class="story-carousel__slide">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <img
              src="../../../public/images/ivisitor.png"
              class="projects__row-img"
              alt="Icblog project image"
            />
          </div>
          <div class="col-md-4">
            <h5 class="pb-3 pt-2">Ic visitors</h5>
            <p>
              The application was inspired by the need to  improve a visitor sign-in and out system at my current work place. A demo version was created from scratch to demonstrate potential improvements to my line manager.
            </p>
            <span class="mr-4"
              ><AppLink linkType="ext" linkUrl="https://iv.icblog.uk/"
                >Live</AppLink
              ></span
            >
            <span
              ><AppLink linkType="ext" linkUrl="https://github.com/icblog/ivisitor"
                >Source code</AppLink
              ></span
            >
          </div>
        </div>
      </div>
    </slide>
  <slide class="story-carousel__slide">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <img
              src="../../../public/images/icblog-portfolio-img.png"
              class="projects__row-img"
              alt="Icblog project image"
            />
          </div>
          <div class="col-md-4">
            <h5 class="pb-3 pt-2">Icblog</h5>
            <p>
              This is the site you're currently browsing. I created it to showcase the projects I've completed during my coding journey and to store code snippets. It features a dedicated blog section as well.
            </p>
            <!-- <span class="mr-4">
                  <AppButton :btnFunc="() => handlePageNav('home')">Live</AppButton></span
                > -->
            <span
              ><AppLink
                linkType="ext"
                linkUrl="https://github.com/icblog/icblog-vue-inertia"
                >Source code</AppLink
              ></span
            >
          </div>
        </div>
      </div>
    </slide>
    
    
    

  </carousel>
</template>

<script setup>
import { Carousel, Slide } from "vue-snap";
import "vue-snap/dist/vue-snap.css";
import AppLink from "../shared/AppLink";
</script>
