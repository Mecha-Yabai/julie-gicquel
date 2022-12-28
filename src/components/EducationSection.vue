<template>
  <section class="h-screen">
    <div class="flex flex-col lg:justify-between lg:flex-row h-full">
      <div
        class="w-full lg:pr-8 lg:w-6/12 xl:pl-0 xl:w-5/12 h-full flex flex-col"
      >
        <h1
          class="font-jiho-medium xl:text-6xl sm:text-4xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light"
        >
          Éducation
          <span class="text-red-500 dark:text-red-dark">&</span> formations
        </h1>
        <div class="hidden h-full lg:flex items-center">
          <img
            v-if="theme === 'light'"
            src="@/assets/images/heroJG_v3.png"
            alt="Developer"
            class="lg:w-full"
          />
          <img
            v-else
            src="@/assets/images/heroJG_v3_BW.png"
            alt="Developer"
            class="lg:w-full"
          />
        </div>
      </div>
      <div
        class="w-full lg:pt-10 lg:w-7/12 flex flex-col items-baseline h-full lg:items-end"
      >
        <ol
          class="relative border-l border-primary-dark dark:border-ternary-light"
        >
          <template v-for="formation in formations" :key="formation.id">
            <li class="mb-3 lg:mb-4 ml-4">
              <div
                class="absolute w-3 h-3 bg-primary-dark rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-dark dark:bg-blue-dark"
              ></div>
              <time
                class="text-sm font-jiho-regular leading-none text-gray-500 dark:text-ternary-light"
                >{{ formation.date }}</time
              >
              <h3
                class="lg:mt-1 text-md xl:text-lg font-jiho-medium text-primay-dark dark:text-red-dark"
              >
                {{ formation.name }}
              </h3>
              <h5
                class="lg:mt-1 text-sm font-jiho-medium text-primay-dark dark:text-white"
              >
                {{ formation.school }}
              </h5>
            </li>
          </template>
        </ol>
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
