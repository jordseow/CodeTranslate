<template>
<d-container class="dr-example-container h-100">
    <d-row class="pt-5">
        <d-col cols="4">
            <router-link to="/landing">
            <d-button size="lg" class="font-weight-bold" theme="warning">
                    Home
            </d-button>
            </router-link>
        </d-col>
        <d-col>
            <h1 >CodeTranslate</h1>
        </d-col>
    </d-row>
    <d-row class="mt-5">
        <d-col cols="12" md="12" lg="12">
          <d-card class="mb-5 shadow-lg" v-for="(unit, idx) in units" :key="idx">
          <router-link :to="'/unit/'+unit.code">
            <d-card-footer class="clearfix" :class="unit.bgcolor">
              <h4 class="float-left" :class="unit.color">{{ unit.unit }}</h4>
              <h4 class="float-right" :class="unit.color"> 
                <span v-if="unit.status === 'complete'">COMPLETE </span>
                <span v-if="unit.status === 'inprogress'">IN PROGRESS </span>
                <span v-if="unit.status === 'incomplete'">INCOMPLETE </span>
                <span>{{unit.done}}/{{unit.total}}</span>
              </h4>
            </d-card-footer>
          </router-link>
        </d-card>
        </d-col>
    </d-row>
</d-container>
</template>
<script>
export default {
  data(){
    return {
      units: {
        0 : {
          unit: 'Print Statements and Commenting',
          code: 11,
          bgcolor: '',
          color: '',
          status: '',
          done: 0,
          total: 5,
        },
        1 : {
          unit: 'Declaring Variables',
          code: 12,
          bgcolor: '',
          color: '',
          status: '',
          done: 1,
          total: 5
        },
        2 : {
          unit: 'If-Else Statements',
          code: 13,
          bgcolor: '',
          color: '',
          status: '',
          done: 0,
          total: 5
        },
        3 : {
          unit: 'While Statements',
          code: 14,
          bgcolor: '',
          color: '',
          status: '',
          done: 5,
          total: 5
        },
        4 : {
          unit: 'For Statements',
          code: 15,
          bgcolor: '',
          color: '',
          status: '',
          done: 1,
          total: 5
        },
      },
    }
  },
  methods: {
    
    unitData(){
      const units = this.units
      for(const unit in units){
        let done = units[unit].done
        let total = units[unit].total        
        if(done > 0 && done < total){
          units[unit].bgcolor = 'bg-info'
          units[unit].color = 'text-white'
          units[unit].status = 'inprogress'
        }else if(done === total){
          units[unit].bgcolor = 'bg-success'
          units[unit].color = 'text-white'
          units[unit].status = 'complete'
        }else{
          units[unit].bgcolor = 'bg-light'
          units[unit].status = 'incomplete'
        }
      }
    }
  },
  created() {
    this.unitData()
  },
}
</script>