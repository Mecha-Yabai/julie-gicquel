<template>
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 md:ml-4 mt-5 md:mt-3 md:flex p-5 md:p-0 justify-center items-center shadow-lg md:shadow-none max-h-64px"
  >
    <router-link
      to="/projects"
      class="font-jiho-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 md:mx-4 mb-2 md:py-2"
      aria-label="Projets"
      >Projets</router-link
    >
    <router-link
      to="/about"
      class="font-jiho-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 md:mx-4 mb-2 md:py-2 border-t-2 pt-3 md:pt-2 md:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="À propos de moi"
      >À propos</router-link
    >
    <router-link
      to="/contact"
      class="font-jiho-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-red-600 dark:hover:text-red-300 md:mx-4 mb-2 md:py-2 border-t-2 pt-3 md:pt-2 md:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >Contact</router-link
    >
  </div>
</template>
<script>
export default {
  props: ["isOpen"],
};
</script>
