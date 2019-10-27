<template>
  <v-container>
    <v-layout justify-center align-center column pa-5>
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
      <div>
        <div class="d-flex flex-column justify-content-center align-items-center h-100 pt-5">
          <h1 class="heading display-3" style="text-align:center">Learn a New</h1>
          <h1 class="heading display-3" style="text-align:center">Language Syntax</h1>
          <h4 class="subheading font-weight-bold">Transfer your Coding Skills with CodeTranslate.</h4>
          <div class="margin:auto">
            <button
              onClick="location='home'"
              type="button"
              class="btn btn-lily btn-rounded"
              style="height:70px; width:250px"
            >Get Started</button>
          </div>
        </div>
      </div>

      <!-- Section: Testimonials v.1 -->
      <section class="text-center my-5 p-1">
        <!-- Section heading -->
        <h2 class="h1-responsive font-weight-bold mt-5 mb-5">Hear from our users</h2>
        <!-- Grid row -->
        <div class="row px-5 justify-content-md-center">
          <!--Grid column-->
          <div class="col-lg-3 col-md-12 mb-lg-0 mb-4">
            <!--Card-->
            <div class="card testimonial-card">
              <!--Background color-->
              <div class="card-up info-color"></div>
              <img
                src="https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-socialive.png"
                height="50"
              />
              <!--Avatar-->
              <div class="avatar mx-auto white">
                <img
                  src="https://media.licdn.com/dms/image/C5103AQHZnw8USw8VKA/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=G9kVVUAsXch8rcv40QinI5_-MUcPnysT1cOQS22E1Ps"
                  width="150"
                  class="rounded-circle img-fluid mt-4"
                />
              </div>
              <div class="card-body">
                <!--Name-->
                <h4 class="font-weight-bold mb-4">John Doe</h4>
                <hr />
                <!--Quotation-->
                <p class="dark-grey-text mt-4 font-italic">
                  "Lorem ipsum dolor sit amet eos
                  adipisci, consectetur adipisicing elit."
                </p>
              </div>
            </div>
            <!--Card-->
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-md-0 mb-4">
            <!--Card-->
            <div class="card testimonial-card">
              <img
                src="https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-endless-river.png"
                height="50"
              />

              <!--Background color-->
              <div class="card-up blue-gradient"></div>
              <!--Avatar-->
              <div class="avatar mx-auto white">
                <img
                  src="https://media.licdn.com/dms/image/C5103AQHZnw8USw8VKA/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=G9kVVUAsXch8rcv40QinI5_-MUcPnysT1cOQS22E1Ps"
                  width="150"
                  class="rounded-circle img-fluid mt-4"
                />
              </div>
              <div class="card-body">
                <!--Name-->
                <h4 class="font-weight-bold mb-4">Anna Aston</h4>
                <hr />
                <!--Quotation-->
                <p class="dark-grey-text mt-4 font-italic">
                  "Neque cupiditate assumenda in
                  maiores repudiandae mollitia architecto."
                </p>
              </div>
            </div>
            <!--Card-->
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6">
            <!--Card-->
            <div class="card testimonial-card">
              <!--Background color-->
              <div class="card-up indigo"></div>
              <img
                src="https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-sexy-blue.png"
                height="50"
              />
              <!--Avatar-->
              <div class="avatar mx-auto white">
                <img
                  src="https://media.licdn.com/dms/image/C5103AQHZnw8USw8VKA/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=G9kVVUAsXch8rcv40QinI5_-MUcPnysT1cOQS22E1Ps"
                  width="150"
                  class="rounded-circle img-fluid mt-4"
                />
              </div>
              <div class="card-body">
                <!--Name-->
                <h4 class="font-weight-bold mb-4">Maria Kate</h4>
                <hr />
                <!--Quotation-->
                <p class="dark-grey-text mt-4 font-italic">
                  "Delectus impedit saepe officiis
                  ab aliquam repellat rem unde ducimus."
                </p>
              </div>
            </div>
            <!--Card-->
          </div>
          <!--Grid column-->
        </div>
        <!-- Grid row -->
      </section>
      <!-- Section: Testimonials v.1 -->
      <!-- Section: Features v.1 -->
      <section class="text-center my-5 pt-5">
        <!-- Section heading -->
        <h2 class="h1-responsive font-weight-bold my-5">Why is it so great?</h2>
        <!-- Section description -->
        <p
          class="lead w-responsive mx-auto mb-5 px-5"
          style="color:white"
        >With CodeTranslate, students will be able to transfer the skills and logic they know in the first language they have learnt in a guided and interactive fashion into a new language.</p>

        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-4">
            <img src="https://image.flaticon.com/icons/svg/1535/1535019.svg" width="200" />
            <h5 class="font-weight-bold my-4" style="color:white">Progressive</h5>
            <p
              class="grey-text mb-md-0 mb-5"
              style="color:white"
            >Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4">
            <img src="https://image.flaticon.com/icons/svg/1541/1541416.svg" width="200" />
            <h5 class="font-weight-bold my-4" style="color:white">Flexibilty</h5>
            <p
              class="grey-text mb-md-0 mb-5"
              style="color:white"
            >Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4">
            <img src="https://image.flaticon.com/icons/svg/767/767388.svg" width="200" />
            <h5 class="font-weight-bold my-4" style="color:white">Support</h5>
            <p
              class="grey-text mb-0"
              style="color:white"
            >Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </section>
      <!-- Section: Features v.1 -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Landing"
};
</script>