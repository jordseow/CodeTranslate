<template>
  <v-container>
    <d-navbar toggleable="md" type="dark" class="pb-5">
      <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
      <d-navbar-brand>
        <h6 class="text-white my-auto mr-4">CodeTranslate</h6>
      </d-navbar-brand>

      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav>
          <d-nav-item href="aboutus">About Us</d-nav-item>
          <d-nav-item href="resources">Resources</d-nav-item>
          <d-dropdown text="Get Started" is-nav>
            <d-dropdown-item href="home">View all modules</d-dropdown-item>
            <d-dropdown-item href="unit/11">Module 1: Print Statements and Commenting</d-dropdown-item>
            <d-dropdown-item href="unit/12">Module 2: Declaring Variables</d-dropdown-item>
            <d-dropdown-item href="unit/13">Module 3: If-Else Statements</d-dropdown-item>
            <d-dropdown-item href="unit/14">Module 4: While Statements</d-dropdown-item>
            <d-dropdown-item href="unit/15">Module 5: For Statements</d-dropdown-item>
          </d-dropdown>
          <d-nav-item href="pressrelease">Press Release</d-nav-item>
          <d-nav-item href="faq">FAQ</d-nav-item>
        </d-navbar-nav>

        <d-navbar-nav class="ml-auto">
          <d-input-group seamless>
            <d-input-group-text slot="prepend">
              <fa :icon="['fas', 'search']" />
            </d-input-group-text>
            <d-input size="sm" placeholder="Search..." />
          </d-input-group>
        </d-navbar-nav>
      </d-collapse>
    </d-navbar>
    <div class="float-left pl-5">
      <router-link to="/landing">
        <d-button size="lg" class="font-weight-bold" theme="warning">Home</d-button>
      </router-link>
    </div>
    <d-container>
      <v-layout justify-center align-center column pa-5>
        <div class="d-flex flex-column justify-content-center align-items-center h-100 pt-5">
          <h2 class="h1-responsive font-weight-bold">Frequently Asked Questions</h2>
        </div>
      </v-layout>
    </d-container>
    <div id="faq" class="pb-5">
      <VueFaqAccordion :items="myItems" />
    </div>
  </v-container>
</template>

<script>
import VueFaqAccordion from "vue-faq-accordion";

export default {
  name: "faq",
  components: {
    VueFaqAccordion
  },
  data() {
    return {
      myItems: [
        {
          title: "Is there help and assistance if I need it?",
          value:
            "The CodeTranslate App is designed to be straightforward and intuitive. If you need more help click the hint button or ask the community in the discussion button!"
          //   category: "Tab-1"
        },
        {
          title: "What languages are currently available?",
          value:
            "We are launching this as a Python to Java App translator to begin with but we hope to add on more languages as we develop. But languages we are looking to push out currently include Python, Java, Javascript and C++."
          //   category: "Tab-2"
        },
        {
          title: "How do I contribute?",
          value:
            "You can contribute in both funding or in helping build and bring the application forward. Contact us at translateapp@comp.nus.edu.sg and let us know your interests and we’ll help you with that."
          //   category: "Tab-2"
        },
        {
          title: "What if I am not currently an SOC student?",
          value:
            "Currently, this is a service that is currently offered to NUS students. If we ever have good news - we’ll be sure to post it up."
          //   category: "Tab-2"
        },
        {
          title: "How can I recommend this to my friend?",
          value:
            "If they’re a student with an SOC account - get them to head to the SOC website, login and download it or direct them straight to https://www.translateapp.soc.nus.edu.sg"
          //   category: "Tab-2"
        },
        {
          title: "Can I take the source code?",
          value:
            "Nope, unfortunately the source code belongs to NUS as intellectual property - however you can add to the source code and contribute to it if you want."
          //   category: "Tab-2"
        },
        {
          title: "Will there be new levels and topics being covered?",
          value:
            "Of course we are always looking to roll out more features and levels - but our greatest wish that this can be a community effort. If you loved the levels of Code Translate App - code a level and send it to us - we would love to add it in!"
          //   category: "Tab-2"
        },
        {
          title: "Can I save and continue where I left off?",
          value:
            "Nope - but we have designed CodeTranslate App to be done in short bite-sized exercises that can be finished in a seating. There shouldn’t be a need to save to continue later. In any case you can just select and skip back to the question you left off with if you really have to go."
          //   category: "Tab-2"
        },
        {
          title: "Can this App Translate Code?",
          value:
            "Nope, not yet! This App was designed to help students be able to translate their coding skills in one application to another. Perhaps an app that translates code is something you can help code!"
          //   category: "Tab-2"
        },
        {
          title: "What if students cheat and hard code?",
          value:
            "If a person hard codes and gets the right output, the CodeTranslate App would count it as correct. CodeTranslate App was not designed as an application for assessment or testing - but a guide to help struggling students who want a faster way to transfer their skills to another language."
          //   category: "Tab-2"
        }
      ]
    };
  }
};
</script>

<style>
#faq {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
