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
    <d-container class="bv-example-row">
      <d-row class="justify-content-md-center">
        <d-col col lg="2"></d-col>
        <d-col cols="12" md="auto">
          <h2 class="font-weight-bold text-center">
            <a>NUS Launches Application to Allow Students Easy Transfer of Coding Skills Across Languages</a>
          </h2>
          <h3 class="font-weight-bold text-center pt-5">
            <a>A Student-launched Initiative</a>
          </h3>
          <p class="text-center" style="color:black">
            Written by
            <a style="color:black">
              <strong>Singapore -- (NUS Times)</strong>
            </a>, 31/11/2019
          </p>
          <p style="color:black" align="justify">
            <strong>
              The National University of Singapore officially integrates CodeTranslator into introductory coding lessons across the
              faculty of computing. This cross platform language, covering a range of topics and levels allows students to make the techniques
              and logic they learned in one language to be transferable to other languages - an efficient way to pick up a new coding language
              as though it was your old one - and is expected to save students time and frustration of learning a new coding language.
            </strong>
          </p>
          <p style="color:black" align="justify">
            <strong>
              The path to learning a new coding language is never easy. A student will have to pick up not just the new language but also a new
              logic. With limited resources readily available in the form that students need, students have to spend hours scouring through API
              and manuals in order to learn and pick up a new language - in the process making mistakes, stumbles and going through much trial
              and error and frustration. Moreover, students in the School of Computing usually need to pick up a series of different languages
              throughout their course of study - C, C++, C#, Java, Python, SQL, R - and they go through the same arduous process of learning all
              of these skills from scratch. This is often discouraging and frustrating process for students who oftentimes decide that they would
              rather stick with a single language despite the school’s efforts to introduce them to new languages that would prepare them for the
              workplace.
            </strong>
          </p>
          <p style="color:black" align="justify">
            <strong>
              With CodeTranslate App students will be able to transfer the skills and logic they know in the first language they have
              learned in a guided and interactive fashion into a new language - making the transition of basic skills needed simpler, faster,
              and more intuitive.
            </strong>
          </p>
          <p style="color:black" align="justify">
            <strong>
              The CodeTranslate App is interactive. Not only will you be taught the theory, but right away you can put it into practice with
              a guided practice question that will produce an output and feedback whether you are correct or wrong.
            </strong>
          </p>
          <p style="color:black" align="justify">
            <strong>
              Equipped with a varying level of difficulty, students would be able to choose their topics from basic programming to advanced
              programming to Object Oriented Programming and Data Structures - letting every student skip to and enter the level that they need.
            </strong>
          </p>
          <p style="color:black" align="justify">
            <strong>
              On top of that, for those who struggle at first - there is a hint button with a bit more guided question to provide the student
              with tips that will aid their understanding and propel them through the levels. There will even be a discussion page for those who
              struggle to interact with other users to leave posts or ask questions.
            </strong>
          </p>
          <img
            class="pb-5"
            src="https://previews.dropbox.com/p/thumb/AAl16jBXfSVKX9fFS4AQ96gimoILiGv8Nx4Iq1gp9pfIoKUUCDtZRiE3fnea2WhejDkV8h2IZ2jizC2i_YFjIauWV9nCQi2xOQlH6vThxDquwQVskK_64KTalCORVoJ18o3YXwYAR0z46GWwVK_E4__hVcsswigbFS5w1JvKuXNSobbywLyqbppxXARTJaklmPB8c0oWrQEKcfcv6f8n-yjmC8DEpfKQ8EgW9hPY9PTLXl4RBmqwIMEuzRQtS4QnMcRk3uxQVLgAU-ZM8gjcJKYvJGJLKrZq4kWvN_-PVQbCpWZ-q3U5zOHLLYbBAsGGJEs-f4waiwUUiUBkgohkgStI/p.png?fv_content=true&size_mode=5"
            height="150"
          />
          <img
            class="pl-5"
            src="https://previews.dropbox.com/p/thumb/AAnO8o9Yj5cPkE5titW_KMkFYNFqQGSoYScTMqupWc485y0BhJ2cW9WIWU1PfJA6NiYn-6Rbrn7ES8OHLr1vDGE-mdQ-xiriW7ODGq7ZdZGpF5Hnlck91af__tmqYN1OxFvYKSFnOCSlVHEiHAD-dmzSClOwcalgeQdQv7OGHRFAp9heo4PUeV9nIcAae5B4RgcPYNNtEXJnPyI78z4KY1w0VmaaTmkf3GvJhQKgGIAJvXidKuGltb1xw9wApIrxNT2alfwFhZn8o8ZK319Ve3oWEswCyu1tvC3Tegjmq0RXow_uZKd9BJY7Nh7gbaKIcKyhpe0_XsGH8LIEEYQVkEad/p.png?fv_content=true&size_mode=5"
            height="200"
          />
          <p class="pt-5" style="color:black" align="justify">
            <strong>
              CodeTranslate App is now available for download on NUS SOC website for any students with a NUS SOC account - or available
              online for any professors or tutors to use through the Firebase platform. It is free to use as an act of service to the community.
              All that the developers ask is that students who benefit can contribute and develop this code together to include more languages
              and features.
            </strong>
          </p>
          <p style="color:black" align="justify">
            <strong>
              “This is the application we have been wanting throughout our school term - we are so thankful that we finally get to use it.”
              said a group of Y1 NUS students. Professor Tan Chuan Hoo, Deputy Head of the Department of Information Systems and Analytics, also
              weighed in to give the developers feedback.
            </strong>
          </p>
          <p style="color:black" align="justify">
            <strong>
              CodeTranslate App is free, and available today for all SOC students. To learn more or to download the App,
              visit https://translateapp.soc.nus.edu.sg.
            </strong>
          </p>
        </d-col>
        <d-col col lg="2"></d-col>
      </d-row>
    </d-container>
  </v-container>
</template>