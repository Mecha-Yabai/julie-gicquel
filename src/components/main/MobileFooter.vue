<template>
  <nav
    class="footer fixed md:hidden bottom-0 inset-x-0 px-3 py-3 bg-red-600 dark:bg-primary-dark dark:border-t-[2px] dark:border-blue-dark z-10 max-w-full"
    :class="{ 'is-hidden': !showFooter }"
  >
    <div class="flex md:hidden w-full justify-evenly">
      <router-link :to="{ path: '/', hash: '#experience' }">
        <div class="flex flex-col items-center">
          <i data-feather="briefcase" class="w-5 lg:w-16 text-white"></i>
          <span class="font-jiho-medium text-white">{{
            $t("header.experience")
          }}</span>
        </div>
      </router-link>
      <router-link :to="{ path: '/', hash: '#education' }">
        <div class="flex flex-col items-center">
          <i data-feather="book-open" class="w-5 lg:w-16 text-white"></i>
          <span class="font-jiho-medium text-white">{{
            $t("header.education")
          }}</span>
        </div>
      </router-link>
      <router-link to="/about">
        <div class="flex flex-col items-center">
          <i data-feather="user" class="w-5 lg:w-16 text-white"></i>
          <span class="font-jiho-medium text-white">{{
            $t("header.about_me")
          }}</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>
<script>
import feather from "feather-icons";

export default {
  data() {
    return {
      theme: "",
      showFooter: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return;
      }
      this.showFooter = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
<style>
.footer {
  transform: translateY(0);
  transition: transform 300ms linear;
}
.footer.is-hidden {
  transform: translateY(100%);
}
</style>
