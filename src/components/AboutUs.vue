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
            <!-- <p
              style="color:black"
            ><strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius.</strong></p>-->
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
            <img
              src="https://media.licdn.com/dms/image/C5103AQHhNmsgJQFdzQ/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=PumAjoNklXMTgY6cTXwlZxE7gqry7AfidWJbo1m7mIo"
              width="150"
              class="rounded-circle img-fluid mt-4"
            />

            <h5 class="font-weight-bold mt-4 mb-3">Dylan See</h5>
            <p class="text-uppercase" style="color:black">Y2 Business Analytics</p>
            <!-- <p
              style="color:black"
            ><strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium doloremque rem laudantium totam aperiam.</strong></p>-->
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
            <img
              src="https://previews.dropbox.com/p/thumb/AAnlDICZCm9nU0AmTjx8sUtdccsAvD6efruK3um1S7jMLh0uj4bI-TIip7wWrV31In0MFgOSvfuaS8NkfP8GnoLYErLO3Cl2KM3xpi7E17LbegR0chd2oYPneKGoR3TSfs-H6Uyg1twadhFtLhxwYhfQ7vepjnHe4_08OYTvQT5rvK52os_7-pEg9HD9tzMt8UR1DyrHmYXjBHF_l4SPHS9kW0nUFbGowEGN_-NFHHBcLGvhcLXGssadad0JiaixxhJvo6V-Ch8owL1qqor2cGUZDRbHMpHM6ILb588Xrt6W6e3CKJh6MhXh9O2DZqXDqlOhCYiPAXuJvpAs0RSQPKLC/p.jpeg?fv_content=true&size_mode=5"
              width="150"
              class="rounded-circle img-fluid mt-4"
            />

            <h5 class="font-weight-bold mt-4 mb-3">Joshua Wang</h5>
            <p class="text-uppercase" style="color:black">Y4 Business Analytics</p>
            <!-- <p
              style="color:black"
            ><strong>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est fugiat nulla id eu laborum.</strong></p>-->
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
            <img
              src="https://storage.googleapis.com/kaggle-avatars/images/2852572-kg.jpg"
              width="150"
              class="rounded-circle img-fluid mt-4"
            />
            <h5 class="font-weight-bold mt-4 mb-3">Jordan Seow</h5>
            <p class="text-uppercase" style="color:black">Y2 Business Analytics</p>
            <!-- <p style="color:black"><strong>Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur totam officia voluptates perferendis voluptatibus aut.</strong></p> -->
          </mdb-col>
        </mdb-row>
      </section>
    </d-container>
  </v-container>
</template>