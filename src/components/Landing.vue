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
            <d-nav-item href="#">About Us</d-nav-item>
            <d-nav-item href="#" disabled>Resources</d-nav-item>
            <d-dropdown text="Get Started" is-nav>
              <d-dropdown-item href="home">View all modules</d-dropdown-item>                
              <d-dropdown-item href="unit/11">Module 1</d-dropdown-item>
              <d-dropdown-item href="unit/12">Module 2</d-dropdown-item>
              <d-dropdown-item href="unit/13">Module 3</d-dropdown-item>
              <d-dropdown-item href="unit/14">Module 4</d-dropdown-item>
              <d-dropdown-item href="unit/15">Module 5</d-dropdown-item>
            </d-dropdown>
            <d-nav-item href="#">Contact Us</d-nav-item>
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
      <div
        class="display-4 text-light font-weight-black white--text text-xs-center mt-5"
        style="text-align:center"
      >Transfer Your Coding Skills</div>
      <div
        class="display-1 text-dark font-weight-bold white--text text-xs-center"
        style="text-align:center"
      >Start Now</div>

      <d-col style="text-align:center" class="mt-5">
        <router-link to="/home">
          <d-button size="lg" theme="warning">Get Started</d-button>
        </router-link>
      </d-col>

      <!-- Section: Testimonials v.1 -->
      <section class="text-center my-5 p-1">
        <!-- Section heading -->
        <h2 class="h1-responsive font-weight-bold mt-5 mb-5">Hear from our Users</h2>
        <!-- Section description
  <p class="dark-grey-text w-responsive mx-auto mb-5">"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
        eum porro a pariatur veniam."</p>-->

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
                <p class="dark-grey-text mt-4">
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
              <div class="card-up blue-gradient">
              </div>
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
                <p class="dark-grey-text mt-4">
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
                <p class="dark-grey-text mt-4">
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Landing"
};
</script>