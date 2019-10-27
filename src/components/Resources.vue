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
            src="https://previews.dropbox.com/p/thumb/AAme1ImAVdcARjzHqgW4sHayT1TIuJtfuo2IzCIuBa568piT1MRGTbjSykZeH0MS232ugid4c4W17tRocdK1ygsC83F39mf_uIZSLKn-v80tC75qQIhuyX9RFjlukQ7VIrYeuvfbIxZTQtyeD3-n2EfEBuV82bZeCfbaHRCb85JlXtS7idQzritt2q06H5OhkApUqGRWw3HZXkU9a0jC18CR8jtz1ENTGFex3B-yYwpcMlX-AzgqCWDu6KbR6fEqr-0xFjO1H6gi4a-Co9-O60-0kAFVgG-NMXXr5cne9J7YlOei9sy6FcnTrrWyvRt2zwfqexyk_P6HNcuzzCLaAjri/p.png?fv_content=true&size_mode=5"
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