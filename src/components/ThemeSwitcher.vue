<template>
  <a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
    <i
      v-if="theme === 'light'"
      data-feather="moon"
      class="w-5"
    ></i>
    <i
      v-else
      data-feather="sun"
      class="text-gray-200 hover:text-red-dark w-5"
    ></i>
  </a>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      this.$emit("themeChanged", newTheme);
      this.$router.go();
    },
  },
};
</script>