<template>
  <nav
    class="header fixed z-10 top-0 w-screen dark:border-b-2 dark:border-secondary md:shadow-xs lg:shadow-none"
    :class="{ 'is-hidden': !showHeader }"
    ref="myHeader"
  >
    <div
      class="flex w-full justify-between items-center p-4 lg:px-16 bg-white dark:bg-dark"
    >
      <router-link to="/"
        ><img
          v-if="!isDark"
          src="@/assets/images/logo-dark.svg"
          class="w-36"
          alt="Julie Gicquel"
        />
        <img
          v-else
          src="@/assets/images/logo-light.svg"
          class="w-36"
          alt="Julie Gicquel"
        />
      </router-link>

      <div class="hidden md:flex">
        <router-link :to="{ path: '/', hash: '#skills' }">
          <MenuItem class="mx-4">
            {{ $t("header.skills") }}
          </MenuItem>
        </router-link>
        <router-link :to="{ path: '/', hash: '#experience' }">
          <MenuItem class="mx-4">
            {{ $t("header.experience") }}
          </MenuItem>
        </router-link>
        <router-link :to="{ path: '/', hash: '#education' }">
          <MenuItem class="mx-4">
            {{ $t("header.education") }}
          </MenuItem>
        </router-link>
        <router-link to="/about">
          <MenuItem class="mx-4">
            {{ $t("header.about_me") }}
          </MenuItem></router-link
        >
      </div>

      <div class="flex">
        <LocaleSwitcher class="mr-4" />
        <ThemeSwitcher />
      </div>
    </div>
  </nav>
</template>
<script>
  import ThemeSwitcher from "../ThemeSwitcher.vue";
  import LocaleSwitcher from "../LocaleSwitcher.vue";
  import MenuItem from "../reusable/MenuItem.vue";
  import { useTheme } from "@/composables/useTheme";

  export default {
    components: {
      ThemeSwitcher,
      LocaleSwitcher,
      MenuItem,
    },
    setup() {
      const { isDark } = useTheme();
      return { isDark };
    },
    data() {
      return {
        showHeader: true,
        lastScrollPosition: 0,
        scrollOffset: 40,
      };
    },
    mounted() {
      this.lastScrollPosition = window.pageYOffset;
      window.addEventListener("scroll", this.onScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
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
