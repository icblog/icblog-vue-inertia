<template>
  <Layout :pageTitle="pageTitle" :handlePageNav="handlePageNav">
    <section ref="homeSectionRef" class="home-section-wrapper section-wrapper">
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-9 mx-auto text-center pt-5">
            <div class="row">
              <!-- <div class="col-md-6 mx-auto">
                <img
                  src="../../../public/images/ic-avatar.jpg"
                  class="ic-avatar-img"
                  alt="Isaac profile image"
                />
              </div> -->
            </div>
            <h2>Hi, I'm Isaac Cobbinah.</h2>
            <p class="mb-4">
              I'm self-taught full-stack php web developer with genuine passion for
              coding.
            </p>
            <AppButton
              customClass="primary-btn pl-5 pr-5"
              :btnFunc="() => handlePageNav('projects')"
              >Projects</AppButton
            >
          </div>
        </div>
      </div>
    </section>

    <section ref="aboutSectionRef" class="about-section-wrapper section-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-9 mx-auto text-center">
            <h2 class="section-h2 pb-5">About me</h2>
          </div>
          <div class="col-md-6 pr-4">
            <h5 class="pb-3 pt-2">How I started</h5>
            <p>
              Around 2015 my interest in web tech grew and therefore decided to take my
              first coding lessions in Html & Javascript on
              <a
                class="w3c-link"
                href="https://www.w3schools.com/"
                rel="noreferrer"
                target="_blank"
                >w3schools website</a
              >
              and ever since I produced the famous <strong>"Hello World"</strong> to the
              console of my first application I knew I have found a new hobby.
            </p>
            <p>
              What started as hobby and a simple
              <strong>"Hello World"</strong> application has become a full blown passion
              of mine as years gone by and has offered me opportunity to constantly learn
              and further develope my skills in solving web application problems.
            </p>
            <AppButton
              customClass="primary-btn pl-5 pr-5"
              :btnFunc="() => handlePageNav('contact')"
              >Contact me</AppButton
            >
          </div>
          <div class="col-md-6 pl-4">
            <h5 class="pb-3 pt-2">My Skills</h5>
            <p>
              Web stack evolves therefore I'm constantly learning and improving my skills,
              below are what I'm currently familiar with.
            </p>

            <div class="skill-detail">
              <p class="skills-heading">Languages</p>
              <div class="all-skill-wrapper">
                <span>Html/Html5</span>
                <span>Css/Css3/Scss</span>
                <span>JavaScript</span>
                <span>Php</span>
              </div>
            </div>
            <!-- end languages -->
            <div class="skill-detail">
              <p class="skills-heading">Frameworks</p>
              <div class="all-skill-wrapper">
                <span>Laravel/Blade</span>
                <span>Bootstrap</span>
                <span> JQuery/Ajax</span>
                <!-- <span>React Js</span> -->
                <span>Vue Js</span>
                <span>Inertia Js</span>
              </div>
            </div>
            <!-- end Frameworks -->
            <div class="skill-detail">
              <p class="skills-heading">Database &amp; Drivers</p>
              <div class="all-skill-wrapper">
                <span>Mysql</span>
                <span>PhpMyAdmin</span>
                <!-- <span>MongoDB</span> -->
              </div>
            </div>
            <!-- end Database &amp; Drivers -->
          </div>
        </div>
      </div>
    </section>

    <section ref="projectsSectionRef" class="project-section-wrapper section-wrapper">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-9 mx-auto text-center mb-3">
            <h2 class="section-h2">Projects</h2>
            <p>
              Below are a few personal projects I have completed over the course of my
              coding journey.
            </p>
          </div>
        </div>
        <carousel class="story-carousel story-carousel--colors" :hideArrowsOnBound="true">
          <slide class="story-carousel__slide">
            <div class="row pb-4">
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
                  I volunteered and built this application to help small business that
                  offer event decoration services. Not only it did help improve my web
                  development skills but made a real difference also to the start up.
                </p>
                <span class="mr-4"
                  ><AppLink linkType="ext" linkUrl="https://adomballoons.icblog.uk/"
                    >Live</AppLink
                  ></span
                >
                <span
                  ><AppLink
                    linkType="ext"
                    linkUrl="https://github.com/icblog/Adom-laravel"
                    >Source code</AppLink
                  ></span
                >
              </div>
            </div>
            <!-- end project -->
          </slide>

          <slide class="story-carousel__slide">
            <div class="row pb-4">
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
                  This application was inspired by a visitors sign in and out system in my
                  current work place that needed some improvements. I created a demo
                  version from scratch to show the development team and my line manager
                  how to improve it.
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
            <!-- end project -->
          </slide>
          <slide class="story-carousel__slide">
            <div class="row pb-4">
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
                  This is a demo admin system I created to manage all applications for a
                  fictional Ic company app.
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
            <!-- end project -->
          </slide>
          <slide class="story-carousel__slide">
            <div class="row pb-4">
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
                  This is the site you're currently browsing. Here, I showcase my skills
                  and what I know so far with a blog section to give something back to the
                  online community that has been a huge part of my coding journey.
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
            <!-- end project -->
          </slide>
        </carousel>
        <hr />
      </div>
    </section>

    <section ref="contactSectionRef" class="contact-section-wrapper section-wrapper">
      <div class="container pt-4 pb-4">
        <div class="row">
          <div class="col-md-9 mx-auto">
            <div class="text-center">
              <h2 class="section-h2">Contact</h2>
              <p>
                Use the form below to message me and I will get back to you as soon as I
                can thank you.
              </p>
            </div>
            <div class="form-wrapper mb-5">
              <section v-show="contactForm.processing"><LoadingIndicator /></section>

              <section
                v-show="contactForm.systemErrMsg != '' || contactForm.successMsg != ''"
              >
                <span v-show="contactForm.infoType == 'error'">
                  <HandleMsg infotype="error" :msg="contactForm.systemErrMsg" />
                </span>
                <span v-show="contactForm.infoType == 'success'">
                  <HandleMsg infotype="success" :msg="contactForm.successMsg" />
                </span>
              </section>

              <section
                v-show="
                  !contactForm.processing &&
                  contactForm.systemErrMsg == '' &&
                  contactForm.successMsg == ''
                "
              >
                <form @submit.prevent="handleContactForm">
                  <div class="form-group">
                    <label class="form-label" for="username">Name*</label>
                    <div class="text-danger small" v-show="contactForm.errors.name != ''">
                      {{ contactForm.errors.name }}
                    </div>
                    <input
                      v-model="contactForm.formData.name"
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      maxlength="255"
                      autocomplete="off"
                      @focus="() => removeError('name')"
                    />
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="email">Email*</label>
                    <div
                      class="text-danger small"
                      v-show="contactForm.errors.email != ''"
                    >
                      {{ contactForm.errors.email }}
                    </div>
                    <input
                      v-model="contactForm.formData.email"
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      maxlength="255"
                      autocomplete="off"
                      @focus="() => removeError('email')"
                    />
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="message">Message *</label>
                    <div
                      class="text-danger small"
                      v-show="contactForm.errors.message != ''"
                    >
                      {{ contactForm.errors.message }}
                    </div>
                    <textarea
                      v-model="contactForm.formData.message"
                      class="form-control"
                      id="message"
                      maxlength="6000"
                      autocomplete="off"
                      @focus="() => removeError('message')"
                    >
                    </textarea>
                  </div>

                  <input
                    v-model="contactForm.formData.myhouse"
                    type="text"
                    maxlength="2"
                    name="myhouse"
                    class="not_in_my_house"
                  />
                  <p class="small">All fields marked with a * are mandatory</p>

                  <div class="pt-3 text-center">
                    <AppButton btnType="submit" btnStyle="primary">Submit</AppButton>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Carousel, Slide } from "vue-snap";
import "vue-snap/dist/vue-snap.css";
import axios from "../api/axios";
import Layout from "../shared/Layout";
import AppButton from "../shared/AppButton";
import AppLink from "../shared/AppLink";
import HandleMsg from "../shared/HandleMsg";
import LoadingIndicator from "../shared/LoadingIndicator";
import { scrollToElement, returnSystemErrorMsg } from "../helper/util";

const homeSectionRef = ref(null);
const aboutSectionRef = ref(null);
const projectsSectionRef = ref(null);
const contactSectionRef = ref(null);
defineProps({
  pageTitle: {
    type: String,
    default: "",
  },
});
const contactForm = reactive({
  formData: {
    name: "",
    email: "",
    message: "",
    myhouse: "",
  },

  errors: {
    name: "",
    email: "",
    message: "",
  },
  systemErrMsg: "",
  successMsg: "",
  infoType: "",
  processing: false,
});

const handlePageNav = (clickedNavLink) => {
  switch (clickedNavLink) {
    case "home":
      scrollToElement(homeSectionRef);
      break;
    case "about":
      scrollToElement(aboutSectionRef);
      break;
    case "projects":
      scrollToElement(projectsSectionRef);
      break;
    case "contact":
      scrollToElement(contactSectionRef);
      break;

    default:
      scrollToElement(homeSectionRef);
      break;
  }
};

const removeError = (focusedInput) => {
  if (focusedInput == "name") {
    if (contactForm.errors.name != "") {
      contactForm.errors.name = "";
    }
  }
  if (focusedInput == "email") {
    if (contactForm.errors.email != "") {
      contactForm.errors.email = "";
    }
  }

  if (focusedInput == "message") {
    if (contactForm.errors.message != "") {
      contactForm.errors.message = "";
    }
  }
};

const assignErrorMsg = (errorsArr) => {
  // console.log(errorsArr);
  errorsArr.forEach((error) => {
    if (error.indexOf("name") > -1) {
      contactForm.errors.name = error;
    }
    if (error.indexOf("email") > -1) {
      contactForm.errors.email = error;
    }
    if (error.indexOf("message") > -1) {
      contactForm.errors.message = error;
    }
  });
};

const handleContactForm = () => {
  let abort = false,
    errorsArr = [];
  if (contactForm.formData.name == "") {
    abort = true;
    errorsArr.push("The name field is required");
  }
  if (contactForm.formData.email == "") {
    abort = true;
    errorsArr.push("The email field is required");
  }

  if (contactForm.formData.message == "") {
    abort = true;
    errorsArr.push("The message field is required");
  }

  if (abort) {
    handlePageNav("contact");
    assignErrorMsg(errorsArr);
  } else {
    contactForm.processing = true;
    handlePageNav("contact");

    setTimeout(async () => {
      try {
        const res = await axios.post("/handle-contact", contactForm.formData);

        if (res?.data?.errors.length > 0) {
          //console.log(res?.data?.errors);
          assignErrorMsg(res?.data?.errors);
        } else {
          contactForm.infoType = "success";
          contactForm.successMsg =
            "Message sent successfully, I'll get back to you as soon as I can thank you";

          setTimeout(() => {
            contactForm.infoType = "";
            contactForm.successMsg = "";
            contactForm.formData.name = "";
            contactForm.formData.email = "";
            contactForm.formData.message = "";
          }, 6000);
        }
      } catch (e) {
        //console.log(e);
        contactForm.infoType = "error";
        contactForm.systemErrMsg = returnSystemErrorMsg();
      } finally {
        contactForm.processing = false;
      }
    }, 800);
  } // end if abort

  // router.post("/handle-contact", contactForm, {
  //   onStart: () => {
  //     processing.value = true;
  //   },
  //   onFinish: () => {
  //     processing.value = false;
  //   },
  // });
};
</script>
