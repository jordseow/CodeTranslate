import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Unit from '@/components/Unit'
import Landing from '@/components/Landing'
import PressRelease from '@/components/PressRelease'
import AboutUs from '@/components/AboutUs'
import Resources from '@/components/Resources'
import FAQ from '@/components/FAQ'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/landing',
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/unit/:code',
      name: 'Unit',
      component: Unit,
    },
    {
      path: '/pressrelease',
      name: 'PressRelease',
      component: PressRelease,
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    }
  ]
})

export default router