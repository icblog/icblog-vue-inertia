<template>
  <Layout pageTitle="home" :handlePageNav="handlePageNav">
    <section ref="homeSectionRef" class="home-section-wrapper section-wrapper">
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-12 text-center pt-5">Sorry site offline</div>
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
