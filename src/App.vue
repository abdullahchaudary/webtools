<script>
import Navbar from "./components/Navbar.vue";
import {RouterView} from 'vue-router'

export default {
  components: { Navbar },
  data() {
    return {
      darkMode: true,
      sideNav: false,
    }
  },
  methods: {
    toggleDark() {
      this.darkMode = !this.darkMode;
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    },
  }
}

</script>

<template>
  <div :class="{dark: darkMode}" class="main">
    <div class="bg-grey-900 dark:bg-neutral-900 py-4 px-4 h-full">
      <nav class="rounded-xl relative w-full flex flex-wrap items-center justify-between py-3 bg-neutral-100 dark:bg-neutral-800 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-md">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div class="container-fluid">
            <a class="text-xl text-black dark:text-white" href="#" @click="toggleSideNav">...</a>
          </div>
          <div class="container-fluid">
            <a class="text-xl text-black dark:text-white" href="#">webtools.</a>
          </div>
          <div class="container-fluid">
            <a class="text-xl text-black dark:text-white" href="#" @click="toggleDark">{{this.darkMode}}</a>
          </div>
        </div>
      </nav>
      <div class="mainInner">
        <div :class="{hideNav: sideNav}" class="navContainer rounded-xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white">
          <Navbar :class="{hidden: sideNav}"/>
        </div>
        <div class="routerContainer rounded-xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
