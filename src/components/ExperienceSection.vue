<template>
  <section class="h-screen">
    <div class="flex flex-col h-full">
      <div class="lg:flex-none w-full text-left lg:pr-8">
        <h1
          class="font-jiho-bold lg:text-6xl sm:text-5xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light"
        >
          Mes expériences
        </h1>
      </div>
      <div class="flex flex-col-reverse lg:flex-row lg:flex-1 justify-center">
        <div class="flex items-center w-full lg:w-4/12 text-left">
          <ol class="relative border-l border-primary-dark dark:border-white">
            <template v-for="experience in experiences" :key="experience.id">
              <li class="mb-1 md:mb-3 lg:mb-4 ml-6">
                <div
                  class="absolute w-3 h-3 bg-primary-dark rounded-full mt-1.5 -left-1.5 border border-white dark:border-primay-dark dark:bg-gray-700"
                ></div>
                <time
                  class="text-sm font-jiho-regular leading-none text-gray-500 dark:text-gray-200"
                  >{{ experience.date }}</time
                >
                <h3
                  class="lg:mt-1 text-md sm:text-lg font-jiho-medium text-primay-dark dark:text-white"
                >
                  {{ experience.name }}
                </h3>
                <h5
                  class="lg:mt-1 text-sm font-jiho-medium text-primay-dark dark:text-white"
                >
                  {{ experience.company }}
                </h5>
                <Button
                  title="Plus d'informations"
                  class="mt-1 sm:mt-2 text-sm font-jiho-regular text-primay-dark hover:text-red-500 dark:text-white bg-white dark:bg-primary-dark hover:bg-ternary-light dark:border-white shadow-sm rounded-md px-3 sm:px-5 py-1.5 sm:py-2.5 duration-300"
                  @click="showModal(experience.id)"
                  aria-label="Hire Me Button"
                />
              </li>
            </template>
          </ol>
        </div>
        <div class="flex w-full lg:w-8/12 justify-center items-center">
          <img
            src="@/assets/images/hero2_v2.png"
            alt="Developer"
            class="w-3/5 md:w-2/5 lg:w-full lg:max-w-2xl"
          />
        </div>
      </div>
    </div>
    <!-- <ExperienceModal
      :showModal="showModal()"
      :modal="modal"
      :currentExperience="currentExperience"
    /> -->
  </section>
</template>
<script>
import feather from "feather-icons";
import experiences from "../data/experiences";
import ExperienceModal from "./ExperienceModal.vue";
import Button from "./reusable/Button.vue";

export default {
  components: { ExperienceModal, Button },
  data() {
    return {
      theme: "",
      experiences,
      modal: false,
      currentExperience: null,
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
  methods: {
    showModal(data) {
      console.log(data);
      this.currentExperience = data;
      // if (this.modal) {
      //   // Stop screen scrolling
      //   document
      //     .getElementsByTagName("html")[0]
      //     .classList.remove("overflow-y-hidden");
      //   this.modal = false;
      // } else {
      //   document
      //     .getElementsByTagName("html")[0]
      //     .classList.add("overflow-y-hidden");
      //   this.modal = true;
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  border: 1px solid theme("colors.primary-dark");
  &:hover {
    border: 1px solid theme("colors.red.500");
  }
}
</style>
