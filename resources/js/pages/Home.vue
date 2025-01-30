<template>
  <Layout :pageTitle="pageTitle" :handlePageNav="handlePageNav">
    <section ref="homeSectionRef" class="home-section-wrapper">

            <div class="hero-text-div">
            <h2 class="hero-text-h2">Hello, I'm Isaac Cobbinah.</h2>
            <p class="mb-6">
              A full-stack software developer with genuine passion for coding.
            </p>
            <AppButton
              customClass="primary-btn pl-5 pr-5"
              :btnFunc="() => handlePageNav('projects')"
              >Projects</AppButton
            >
          </div>
        
    </section>

    <section ref="aboutSectionRef" class="about-section-wrapper pt-5">
      <div class="container pt-2">
        <div class="row">
          <div class="col-md-9 mx-auto text-center">
            <h2 class="section-h2 pb-5">ABOUT ME</h2>
          </div>
          <div class="col-md-6 pr-4">
            <h6 class="pb-3 pt-2">How I started</h6>
            <p>
              In 2020, my interest in software development grew, prompting me to take my first coding lessons in HTML and JavaScript on the
              <a
                class="w3c-link"
                href="https://www.w3schools.com/"
                rel="noreferrer"
                target="_blank"
                >w3schools website</a
              >.
              The moment I produced the famous <strong>"Hello World"</strong> in the console of my first application, I knew I had discovered a new hobby.
            </p>
            <p>
              What began as a simple hobby and a basic <strong>"Hello World"</strong> app has since evolved into a full-blown passion. Over the years, this journey has not only fueled my continuous learning but has also provided me with the opportunity to develop real-world solutions through software applications.
              
            </p>
            <AppButton
              customClass="primary-btn pl-5 pr-5"
              :btnFunc="() => handlePageNav('contact')"
              >Get in touch</AppButton
            >
          </div>
          <div class="col-md-6 pl-4">
            <h6 class="pb-3 pt-2">My skills</h6>
            <p>
              Technology evolves constantly, so I am always learning and refining my skills. Below are the areas I am currently proficient in.
            </p>

            <div class="skill-detail">
              <p class="skills-heading">Languages</p>
              <div class="all-skill-wrapper">
                <span>Html, Html5</span>
                <span>Css, Css3, Scss</span>
                <span>JavaScript</span>
                <span>Php</span>
                <span>Python (currently learning)</span>
              </div>
            </div>
            <!-- end languages -->
            <div class="skill-detail">
              <p class="skills-heading">Frameworks</p>
              <div class="all-skill-wrapper">
                <span>Laravel, Blade</span>
                <span>Bootstrap</span>
                <span> JQuery, Ajax</span>
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

    <section ref="projectsSectionRef" class="project-section-wrapper pt-5">
      <div class="container pb-0 mb-0 pt-3">
        <div class="row pb-0 mb-0">
          <div class="col-md-9 mx-auto text-center mb-3">
            <h2 class="section-h2 pb-3">PROJECTS</h2>
            <p>
              Here are a few projects I've completed throughout my coding journey.
            </p>
          </div>
        </div>
      </div>
      <MainCarousel />
    </section>

    <section ref="contactSectionRef" class="contact-section-wrapper section-wrapper">
      <div class="container pt-0 mt-0 pb-5">
        <div class="row pt-0 mt-0 pb-5">
          <div class="col-md-12 pt-0 mt-0">
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-md-9 mx-auto">
            <div class="text-center">
              <h2 class="section-h2">GET IN TOUCH</h2>
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
                      maxlength="2000"
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
import axios from "../api/axios";
import Layout from "../shared/Layout";
import MainCarousel from "./MainCarousel";
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
