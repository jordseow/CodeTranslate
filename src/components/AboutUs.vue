<template>
  <v-container>
    <d-navbar toggleable="md" type="dark" class="pb-5">
      <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
      <d-navbar-brand>
        <img class="pr-5 pt-2" src="@/assets/codetranslatelogo.png" height="80" />
      </d-navbar-brand>

      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav>
          <d-nav-item href="aboutus">About Us</d-nav-item>
          <d-nav-item href="resources">Resources</d-nav-item>
          <d-dropdown text="Get Started" is-nav>
            <d-dropdown-item href="home">View all modules</d-dropdown-item>
            <d-dropdown-item
              href="unitone"
            >Module 1: Printing, Commenting, Declaring Variables and If-Else</d-dropdown-item>
            <d-dropdown-item href="unittwo">Module 2: While and For Loops</d-dropdown-item>
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
      <section class="text-center">
        <h2 class="h1-responsive font-weight-bold my-5">Our amazing team</h2>
        <p class="w-responsive mx-auto mb-5" style="color:black">
          <strong>We are students from NUS School of Computing who want to help future batches of students learn better.</strong>
        </p>
        <mdb-row>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
            <div class="avatar mx-auto white">
              <img
                src="https://media.licdn.com/dms/image/C5103AQHZnw8USw8VKA/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=G9kVVUAsXch8rcv40QinI5_-MUcPnysT1cOQS22E1Ps"
                width="150"
                class="rounded-circle img-fluid mt-4"
              />
            </div>
            <h5 class="font-weight-bold mt-4 mb-3">Lee Boon Howe</h5>
            <p class="text-uppercase" style="color:black">Y4 Business Analytics</p>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
            <img
              src="https://media.licdn.com/dms/image/C5103AQHhNmsgJQFdzQ/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=PumAjoNklXMTgY6cTXwlZxE7gqry7AfidWJbo1m7mIo"
              width="150"
              class="rounded-circle img-fluid mt-4"
            />

            <h5 class="font-weight-bold mt-4 mb-3">Dylan See</h5>
            <p class="text-uppercase" style="color:black">Y2 Business Analytics</p>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
            <img
              src="@/assets/photo_2016-09-04_00-25-10.jpg"
              width="150"
              class="rounded-circle img-fluid mt-4"
            />

            <h5 class="font-weight-bold mt-4 mb-3">Joshua Wang</h5>
            <p class="text-uppercase" style="color:black">Y4 Business Analytics</p>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
            <img
              src="https://storage.googleapis.com/kaggle-avatars/images/2852572-kg.jpg"
              width="150"
              class="rounded-circle img-fluid mt-4"
            />
            <h5 class="font-weight-bold mt-4 mb-3">Jordan Seow</h5>
            <p class="text-uppercase" style="color:black">Y2 Business Analytics</p>
          </mdb-col>
        </mdb-row>
      </section>
    </d-container>
  </v-container>
</template>