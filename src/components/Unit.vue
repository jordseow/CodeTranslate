<template>
  <d-container class="dr-example-container h-100">
    <d-row class="pt-5">
      <d-col>
        <router-link to="/home">
          <d-button size="lg" theme="warning" class="font-weight-bold">HOME</d-button>
        </router-link>
      </d-col>
      <d-col>
        <h1 class="text-white">CodeTranslate</h1>
      </d-col>
      <d-col class="text-right">
        <popper
          trigger="clickToToggle"
          :options="{
            placement: 'bottom',
            modifiers: { offset: { offset: '0,10px' } }
            }"
        >
          <div class="popper text-left">
            <p class="font-weight-bold">To print in Python, we use</p>
            <p>print(“your string here”)</p>

            <p class="font-weight-bold">To print in Java, we use</p>
            <p class="lead">System.out.println(“your string here”)</p>
          </div>
          <d-button size="lg" theme="info" class="font-weight-bold" slot="reference">DISCUSS</d-button>
        </popper>
      </d-col>
    </d-row>
    <d-row class="mt-5">
      <d-col class="text-center" v-for="index in 5" :key="index">
        <d-button block-level size="lg" theme="light">
          <span class="font-weight-bold">Question {{ index }}</span>
        </d-button>
      </d-col>
    </d-row>
    <d-row class="mt-5">
      <d-col>
        <d-row>
          <d-col>
            <h5 class="text-white">From</h5>
            <d-input-group class="mb-2">
              <d-form-select v-model="translateFrom" :options="languages" />
            </d-input-group>
          </d-col>
          <d-col>
            <h5 class="text-white">To</h5>
            <d-input-group class="mb-2">
              <d-form-select v-model="translateTo" :options="languages" />
            </d-input-group>
          </d-col>
        </d-row>

        <d-row>
          <d-col class="mt-5 pt-5">
            <h4 class="text-white">Task</h4>
            <h5 class="text-white">Print “Hello, world!”</h5>
          </d-col>
        </d-row>

        <d-row class="mt-5 pt-5">
          <d-col>
            <popper
              trigger="clickToToggle"
              :options="{
                        placement: 'top',
                        modifiers: { offset: { offset: '0,10px' } }
                        }"
            >
              <div class="popper text-left">
                <p class="font-weight-bold">To print in Python, we use</p>
                <p>print(“your string here”)</p>
                <p class="font-weight-bold">To print in Java, we use</p>
                <p class="lead">System.out.println(“your string here”)</p>
              </div>
              <d-button
                size="lg"
                theme="info"
                class="font-weight-bold"
                slot="reference"
              >HINTS</d-button>
            </popper>
          </d-col>
          <d-col>
            <d-button size="lg" theme="info" class="font-weight-bold">RUN</d-button>
          </d-col>
        </d-row>
      </d-col>
    </d-row>
  </d-container>
</template>
<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
export default {
  data() {
    return {};
  },
  components: {
    popper: Popper,
  },
  methods: {},
  created() {
    this.getUnit();
  }
};
</script>