<template>
  <a
    v-for="social in socials"
    :key="social.id"
    :href="social.url"
    target="__blank"
    class="rounded-full h-11 w-11 sm:h-12 sm:w-12 inline-flex items-center justify-center mx-2 bg-white dark:bg-blue-dark shadow-lg border-primary-dark dark:border-blue-dark border-2 hover:bg-primary-dark text-primary-dark dark:text-white dark:hover:bg-blue-dark dark:hover:text-red-dark hover:text-white text-center"
  >
    <i :data-feather="social.icon" class="w-5 lg:w-16"></i>
  </a>
</template>
<script>
import feather from "feather-icons";
import socials from "../../data/socials";

export default {
  data() {
    return {
      socials,
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
