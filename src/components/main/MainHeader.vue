<template>
  <nav id="nav">
    <div
      class="z-10 max-w-full block md:flex md:justify-between md:items-center"
    >
      <div class="flex justify-between items-center">
        <div>
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
        </div>
        <div class="flex items-end">
          <locale-switcher class="block md:hidden mr-2" />
          <theme-switcher
            :theme="theme"
            @themeChanged="updateTheme"
            class="block md:hidden bg-ternary-light text-red-600 dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 mr-2 rounded-lg"
          />
        </div>
      </div>

      <div
        class="hidden md:flex justify-between items-center flex-col md:flex-row"
      >
        <LocaleSwitcher />
        <ThemeSwitcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="ml-4 bg-ternary-light hover:bg-red-600 text-red-600 hover:text-white dark:bg-blue-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
        />
      </div>
    </div>
  </nav>
</template>
<script>
import ThemeSwitcher from "../ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";
import feather from "feather-icons";

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
    };
  },

  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
  },
  updated() {
    feather.replace();
  },
};
</script>
