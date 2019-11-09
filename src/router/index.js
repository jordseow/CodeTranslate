import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import UnitOne from "@/components/UnitOne";
import UnitTwo from "@/components/UnitTwo";
import Landing from "@/components/Landing";
import PressRelease from "@/components/PressRelease";
import AboutUs from "@/components/AboutUs";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/landing"
    },
    {
      path: "/landing",
      name: "Landing",
      component: Landing
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/unitone",
      name: "UnitOne",
      component: UnitOne
    },
    {
      path: "/unittwo",
      name: "UnitTwo",
      component: UnitTwo
    },
    {
      path: "/pressrelease",
      name: "PressRelease",
      component: PressRelease
    },
    {
      path: "/aboutus",
      name: "AboutUs",
      component: AboutUs
    },
    {
      path: "/resources",
      name: "Resources",
      component: Resources
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    }
  ]
});

export default router;
