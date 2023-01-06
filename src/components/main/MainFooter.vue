<template>
  <div class="container mx-auto">
    <div
      class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    >
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-jiho-bold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
        >
          Contactez-moi sur
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <SocialButton />
          <a
            :href="`mailto:${mail}`"
            target="__blank"
            class="rounded-full h-11 w-11 sm:h-12 sm:w-12 inline-flex items-center justify-center mx-2 bg-white dark:bg-blue-dark shadow-lg border-primary-dark dark:border-blue-dark border-2 hover:bg-primary-dark text-primary-dark dark:text-white dark:hover:bg-blue-dark dark:hover:text-red-dark hover:text-white text-center"
          >
            <i data-feather="mail" class="w-5 lg:w-16"></i>
          </a>
        </ul>
      </div>

      <MainFooterCopyright :mail="mail" />
    </div>
  </div>
</template>
<script>
import SocialButton from "../reusable/SocialButton.vue";
import MainFooterCopyright from "./MainFooterCopyright.vue";

export default {
  components: { MainFooterCopyright, SocialButton },
  data() {
    return {
      mail: "julie.gcql@gmail.com",
    };
  },
};
</script>
