<template>
  <div class="container mx-auto">
    <div
      class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    >
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-jiho-bold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
        >
          Suivez-moi
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <SocialButton />
        </ul>
      </div>

      <MainFooterCopyright />
    </div>
  </div>
</template>
<script>
import SocialButton from "../reusable/SocialButton.vue";
import MainFooterCopyright from "./MainFooterCopyright.vue";

export default {
  components: { MainFooterCopyright, SocialButton },
};
</script>
