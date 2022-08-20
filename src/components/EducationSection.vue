<template>
  <section>
    <div class="flex flex-col">
      <div class="h-screen flex flex-col lg:flex-row">
        <div class="w-full lg:w-8/12 text-left lg:pr-8">
          <h1
            class="font-jiho-bold lg:text-6xl sm:text-5xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light"
          >
            Mes formations
          </h1>
          <div class="w-full imageContainer flex justify-center items-center">
            <img
              src="@/assets/images/heronumber2.png"
              alt="Developer"
              class="w-2/4 md:w-2/5 lg:w-full sm:max-w-xl"
            />
          </div>
        </div>
        <div class="w-full h-full flex items-center lg:w-4/12 text-left">
          <ol class="relative border-l border-primary-dark dark:border-white">
            <template v-for="formation in formations" :key="formation.id">
              <li class="mb-1 md:mb-3 lg:mb-4 ml-4">
                <div
                  class="absolute w-3 h-3 bg-primary-dark rounded-full mt-1.5 -left-1.5 border border-white dark:border-primay-dark dark:bg-gray-700"
                ></div>
                <time
                  class="text-sm font-jiho-light leading-none text-gray-500 dark:text-gray-200"
                  >{{ formation.date }}</time
                >
                <h3
                  class="lg:mt-1 text-md sm:text-lg font-jiho-medium text-primay-dark dark:text-white"
                >
                  {{ formation.name }}
                </h3>
                <h5
                  class="lg:mt-1 text-sm font-jiho-regular text-primay-dark dark:text-white"
                >
                  {{ formation.school }}
                </h5>
              </li>
            </template>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";
import formations from "../data/formations";

export default {
  data() {
    return {
      theme: "",
      formations,
    };
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
<style lang="scss" scoped>
.imageContainer {
  @media (min-width: 1024px) {
    min-height: calc(100vh - 60px) !important;
    max-height: calc(100vh - 60px) !important;
  }
}
</style>
