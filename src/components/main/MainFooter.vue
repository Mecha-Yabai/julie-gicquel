<template>
  <div class="container mx-auto">
    <div
      class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="font-jiho-bold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
        >
          Suivez-moi
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="text-red-600 hover:text-white dark:hover:text-red-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-red-600 shadow-sm p-4 duration-500"
          >
            <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <MainFooterCopyright />
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";
import MainFooterCopyright from "./MainFooterCopyright.vue";
export default {
  components: { MainFooterCopyright },
  data() {
    return {
      socials: [
        {
          id: 1,
          name: "GitHub",
          icon: "github",
          url: "https://github.com/realstoman",
        },
        {
          id: 2,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: 3,
          name: "Medium",
          icon: "book",
          url: "https://stoman.medium.com",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://instagram.com/realstoman",
        },
      ],
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
