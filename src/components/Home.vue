<template>
  <v-container>
    <img class="pr-5 pt-3 float-left pl-4" src="@/assets/codetranslatelogo.png" height="90" />
    <d-container class="dr-example-container h-100">
      <d-row class="pt-5">
        <d-col cols="4">
          <router-link to="/landing">
            <d-button size="lg" class="font-weight-bold" theme="warning">Home</d-button>
          </router-link>
        </d-col>
        <d-col>
          <h1>CodeTranslate</h1>
        </d-col>
      </d-row>
      <br />
      <h4 align="center">Click on a module to get started!</h4>
      <d-row class="mt-5">
        <d-col cols="12" md="12" lg="12">
          <d-card class="mb-5 shadow-lg">
            <router-link :to="'/unitone'">
              <d-card-footer class="clearfix">
                <h4 class="float-left">
                  Module 1:
                  <strong>Printing, Commenting, Declaring Variables and If-Else</strong>
                </h4>
              </d-card-footer>
            </router-link>
          </d-card>
          <d-card class="mb-5 shadow-lg">
            <router-link :to="'/unittwo'">
              <d-card-footer class="clearfix">
                <h4 class="float-left">
                  Module 2:
                  <strong>While and For Loops</strong>
                </h4>
              </d-card-footer>
            </router-link>
          </d-card>
        </d-col>
      </d-row>
      <hr />
      <h5
        align="center"
      >You can choose to attempt the path on NUS ALSET Achievements, a learning platform for programmers.</h5>
      <div class="margin:auto" align="center">
        <button
          onClick="window.location.href = 'https://achievements-prod.firebaseapp.com/#/paths/-Lq5I-FK9hjbM7GmLFQi'"
          type="button"
          class="btn btn-lily btn-rounded"
          style="height:90px; width:300px"
        >Try it on Achievements!</button>
      </div>
      <hr />
    </d-container>
  </v-container>
</template>