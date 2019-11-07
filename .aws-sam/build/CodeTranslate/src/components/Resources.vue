<template>
  <v-container>
    <d-navbar toggleable="md" type="dark" class="pb-5">
        <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
        <d-navbar-brand>
            
            <img class="pr-5 pt-2"
                src="@/assets/codetranslatelogo.png"
                height="80"
              />
          <!-- <h6 class="text-white my-auto mr-4">CodeTranslate</h6> -->
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
          <h2 class="h1-responsive font-weight-bold my-5">Python vs Java Code Comparison</h2>
          <iframe
            class="pb-5"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MWfLtajBmAY"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <h2 class="h1-responsive font-weight-bold my-5 pt-5">Summary</h2>
          <img
            class="pb-5"
            src="@/assets/python-java-syntax.png"
          />
        </div>
      </v-layout>
    </d-container>
  </v-container>
</template>

<script>
export default {
  name: "Resources"
};
</script>