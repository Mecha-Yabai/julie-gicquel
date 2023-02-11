<template>
  <section class="h-screen py-4">
    <div
      class="flex flex-col lg:flex-row h-full lg:items-center justify-center"
    >
      <div
        class="w-full lg:w-6/12 h-2/3 sm:h-1/2 md:h-2/5 lg:h-fit lg:text-left lg:pr-8 mt-4 lg:mt-0"
      >
        <h1
          class="h-1/4 md:h-1/3 lg:h-fit lg:mb-10 font-jiho-bold xl:text-6xl sm:text-4xl text-2xl text-center lg:text-left text-primary-dark dark:text-primary-light"
        >
          {{ $t("skills.title_1") }}
          <span class="text-red-500 dark:text-red-dark">{{
            $t("skills.title_2")
          }}</span
          >,<br />
          {{ $t("skills.title_3") }}
          <span class="text-red-500 dark:text-red-dark">{{
            $t("skills.title_4")
          }}</span
          >.
        </h1>
        <div
          class="h-2/4 md:h-2/3 lg:h-fit space-y-4 lg:space-y-6 xl:space-y-8"
        >
          <div>
            <p
              class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
            >
              {{ $t("skills.description_1") }} <br />
              {{ $t("skills.description_2") }}
            </p>
          </div>
          <div>
            <p
              class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
            >
              {{ $t("skills.description_3") }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-full lg:w-6/12 h-1/3 sm:h-1/2 md:h-3/5 flex items-start md:items-center"
      >
        <div class="space-y-4 sm:space-y-10">
          <div
            v-for="(skill, id) in generalSkills"
            :key="id"
            class="mt-6 sm:mt-0"
          >
            <hr class="mb-4 sm:mb-10 dark:border-blue-dark" />
            <div class="flex items-top sm:mb-10">
              <p
                class="mr-4 text-xl sm:text-3xl text-red-500 dark:text-red-dark font-jiho-regular whitespace-nowrap"
              >
                {{ skill.id }} /
              </p>
              <h1
                class="text-left text-xl md:text-3xl xl:text-4xl font-jiho-medium text-primary-dark dark:text-primary-light"
              >
                {{ skill.title }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";

export default {
  data() {
    return {
      theme: "",
    };
  },
  computed: {
    generalSkills() {
      return [
        { id: 1, title: this.$t("skills.web_development") },
        { id: 2, title: this.$t("skills.ui_ux_design") },
        { id: 3, title: this.$t("skills.web_marketing") },
      ];
    },
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
};
</script>
<style lang="css" scoped>
hr {
  height: 2px;
  color: #404040;
}
</style>
