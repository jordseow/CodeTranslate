<template>
  <v-container>
    <v-layout justify-center align-center column pa-5>
      <d-navbar toggleable="md" type="dark" class="pb-5">
        <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
        <d-navbar-brand>
          <img class="pr-5 pt-2" src="@/assets/codetranslatelogo.png" height="80" />
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
                  src="https://media.licdn.com/dms/image/C5103AQGRPZexVF5lhA/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=8ISDN8I0825wCFN0LC86lZIAgZSdOs_-HN4xcksklTk"
                  width="150"
                  height="150"
                  class="rounded-circle img-fluid mt-4"
                />
              </div>
              <div class="card-body">
                <!--Name-->
                <h4 class="font-weight-bold mb-4">Jeremy Ng</h4>
                <h7>Year 2 Business Analytics Undergraduate</h7>
                <hr />
                <!--Quotation-->
                <p class="dark-grey-text mt-4 font-italic">
                  "I can still remember how much I struggled in the first 2 weeks of school when I first took CS2040. The transition from Python to Java was not easy and having such a platform which focuses on syntax would be helpful for students like me. I believe that future batches of undergraduates would be able to learn much more efficiently through the app."
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
                  src="https://previews.dropbox.com/p/thumb/AAkShKhEGsZuxjx3YF5NvYtuhB2jifKSdjUR2bWgqkcVhhIXezoLGGjoLozc9l1-uefGXWUJIOJCdJDJ4D1kVfQChi-pDrFhHXq52Y1fBjXwxJkOs07cJrFhnlJ8kmZi7UzgVCpmTdoJbdpkvl-WKgnESC2paVjPZ8s-epk703U-iWHpbdrCKL4d2VQOc7WUk6hyPGo7zB89JLo5qG1OR6R3toxpo6sDiJMdPWkThvG2_gc_TOIcS32wNwP7zDvG--fkeY8lMerxoMgziFWmDFUOItLYvTxmVHMwHhWNRnYQ7DbbId-dHUAzdd71wqsRKASb3guOuNYDZtsX2j2ty4e5/p.jpeg?fv_content=true&size_mode=5"
                  width="150"
                  height="150"
                  class="rounded-circle img-fluid mt-4"
                />
              </div>
              <div class="card-body">
                <!--Name-->
                <h4 class="font-weight-bold mb-4">Chan Cheah Cha</h4>
                <h7>Year 2 Business Analytics Undergraduate</h7>
                <div>
                <h7>(former Life Science Undergraduate)</h7></div>
                <hr />
                <!--Quotation-->
                <p class="dark-grey-text mt-4 font-italic">
                  "The past semester was tough for me as I had to learn several programming languages at the same time. With this app, I would have been able to revise on the differences in syntax for the different languages; I would not have to spend so much time on Google!"
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
                  src="https://lawncegoh.github.io/img/dp.jpg"
                  width="150"
                  class="rounded-circle img-fluid mt-4"
                />
              </div>
              <div class="card-body">
                <!--Name-->
                <h4 class="font-weight-bold mb-4">Lawnce Goh</h4>
                <h7>Year 2 Computer Science Undergraduate</h7>
                <hr />
                <!--Quotation-->
                <p class="dark-grey-text mt-4 font-italic">
                  "Though I have only learnt JavaScript and Java in school so far, I had to pick up Python during my internship. I have spent a lot of time debugging basic syntax mistakes and it would have been great if this app was introduced to me earlier. It is a one-stop learning platform for students to focus on learning the syntaxes of different languages."
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
              class="grey-text mb-md-0 mb-5 px-5"
              style="color:white"
            >Questions for each topic are broken down into 5 parts for users to attempt. 5 different modules are currently available for users to practise on different types of syntax.</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4">
            <img src="https://image.flaticon.com/icons/svg/1541/1541416.svg" width="200" />
            <h5 class="font-weight-bold my-4" style="color:white">Flexibilty</h5>
            <p
              class="grey-text mb-md-0 mb-5 px-5"
              style="color:white"
            >Users can choose what language they want to practise on for each questions. Languages available are Python, Java, JavaScript and C++.</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4">
            <img src="https://image.flaticon.com/icons/svg/767/767388.svg" width="200" />
            <h5 class="font-weight-bold my-4" style="color:white">Support</h5>
            <p
              class="grey-text mb-0 px-5"
              style="color:white"
            >Hints are provided to assist users who are stuck at any particular question. Users can also get help from the discussion page where all users can interact and help one another.</p>
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