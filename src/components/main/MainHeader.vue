<template>
  <nav
    class="header fixed top-0 inset-x-0 px-4 sm:px-16 py-4 bg-white dark:bg-primary-dark shadow-md z-10 max-w-full block md:flex md:justify-between md:items-center dark:border-b-[2px] dark:border-blue-dark"
    :class="{ 'is-hidden': !showHeader }"
  >
    <div class="flex items-center justify-between">
      <router-link to="/"
        ><img
          v-if="theme === 'light'"
          src="@/assets/images/logo-dark.svg"
          class="w-36"
          alt="Dark Logo"
        />
        <img
          v-else
          src="@/assets/images/logo-light.svg"
          class="w-36"
          alt="Light Logo"
        />
      </router-link>

      <div class="flex">
        <locale-switcher class="block md:hidden mr-2" />
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="block md:hidden bg-ternary-light text-red-600 dark:bg-blue-dark-secondary hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 mr-2 rounded-lg"
        />
      </div>
    </div>

    <div class="hidden md:flex w-full justify-evenly">
      <a href="#experience">
        <span
          class="font-jiho-medium hover:text-red-600 dark:text-white dark:hover:text-red-dark"
          >{{ $t("header.experience") }}</span
        >
      </a>
      <a href="#education">
        <span
          class="font-jiho-medium hover:text-red-600 dark:text-white dark:hover:text-red-dark"
          >{{ $t("header.education") }}</span
        >
      </a>
      <router-link to="/about"
        ><span
          class="font-jiho-medium hover:text-red-600 dark:text-white dark:hover:text-red-dark"
          >{{ $t("header.about_me") }}</span
        ></router-link
      >
    </div>

    <div
      class="hidden md:flex justify-between items-center flex-col md:flex-row"
    >
      <LocaleSwitcher />
      <ThemeSwitcher
        :theme="theme"
        @themeChanged="updateTheme"
        class="ml-4 bg-ternary-light hover:bg-red-600 text-red-600 hover:text-white dark:bg-blue-dark-secondary px-3 py-2 shadow-sm rounded-xl cursor-pointer"
      />
    </div>
  </nav>
</template>
<script>
import ThemeSwitcher from "../ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";

export default {
  components: {
    ThemeSwitcher,
    LocaleSwitcher,
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application",
        },
        {
          id: 2,
          value: "mobile",
          name: "Mobile Application",
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: 4,
          value: "branding",
          name: "Branding & Anim",
        },
      ],
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },

  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
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
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
<style>
.header {
  transform: translateY(0);
  transition: transform 300ms linear;
}
.header.is-hidden {
  transform: translateY(-100%);
}
</style>
