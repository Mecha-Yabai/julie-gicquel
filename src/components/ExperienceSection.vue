<template>
  <section class="h-screen">
    <div class="flex flex-col lg:justify-between lg:flex-row h-full pt-10">
      <div class="w-full lg:pr-8 lg:w-6/12 xl:pl-0 xl:w-5/12">
        <h1
          class="font-jiho-medium xl:text-6xl sm:text-4xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light"
        >
          Compétences & expériences
        </h1>
        <div class="flex items-baseline justify-center lg:justify-start mt-6">
          <hr
            class="w-10 mr-2 border rounded-md border-primary-dark dark:border-primary-light"
          />
          <p
            class="text-left font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
          >
            Développeuse web full-stack spécialisée dans le design UI/UX.<br />
            J'aime challenger l'existant et imaginer le futur. 🚀
          </p>
        </div>
        <img
          v-if="theme === 'light'"
          src="@/assets/images/heroJG_v2.png"
          alt="Developer"
          class="hidden lg:block lg:w-full"
        />
        <img
          v-else
          src="@/assets/images/heroJG_v2_BW.png"
          alt="Developer"
          class="hidden lg:block lg:w-full"
        />
      </div>
      <div class="w-full pt-10 lg:w-6/12">
        <div class="flex flex-col items-baseline mt-6">
          <template v-for="experience in experiences" :key="experience.id">
            <!-- <hr
              class="w-full border rounded-md border-primary-dark dark:border-primary-light"
            /> -->
            <div
              class="flex items-baseline w-full justify-between h-[110px] lg:h-[140px] border-t border-primary-dark dark:border-blue-dark"
            >
              <div class="my-auto min-w-[100px]">
                <time
                  class="text-sm font-jiho-regular leading-none text-gray-500 dark:text-ternary-light"
                  >{{ experience.date }}</time
                >
              </div>
              <div class="my-auto flex-1 pr-4">
                <h3
                  class="text-md lg:text-lg font-jiho-medium text-primary-dark dark:text-red-dark"
                >
                  {{ experience.name }}
                </h3>
                <h5
                  class="mt-2 text-md font-jiho-regular text-primay-dark dark:text-white"
                >
                  {{ experience.company }}
                </h5>
              </div>
              <div class="my-auto">
                <button
                  type="button"
                  @click="openExperienceInfosPanel(experience)"
                >
                  <i
                    data-feather="plus-circle"
                    stroke-width="1.5"
                    class="text-red-dark"
                  ></i>
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <transition
      name="panel-fade"
      ref="experienceInfosPanel"
      tabindex="-1"
      v-show="isExperienceInfosPanelOpen"
      @keydown.escape="closeExperienceInfosPanel()"
      class="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-secondary-light dark:bg-primary-dark shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
    >
      <div>
        <!-- Panel content -->
        <div class="flex flex-col h-screen">
          <!-- Panel header -->
          <div
            class="flex tems-center justify-center px-4 py-6 border-b dark:border-blue-dark"
          >
            <h3
              class="flex-1 text-md lg:text-lg font-jiho-medium text-primay-dark dark:text-red-dark"
            >
              {{ currentExperience.name }}
            </h3>
            <button
              @click="closeExperienceInfosPanel()"
              class="flex-none text-primay-dark ml-2"
            >
              <i data-feather="x" class="text-red-dark"></i>
            </button>
          </div>
          <!-- Content -->
          <div class="flex-1 overflow-hidden hover:overflow-y-auto">
            <div class="px-6 py-2">
              <h5
                class="mt-2 font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
              >
                {{ currentExperience.description }}
              </h5>
            </div>
            <div
              v-if="currentExperience.duties"
              class="px-6 py-2 font-jiho-medium text-primay-dark dark:text-white"
            >
              Missions :
            </div>
            <template v-for="duty in currentExperience.duties" :key="duty.id">
              <div
                class="px-6 py-2 font-jiho-regular text-primay-dark dark:text-white"
              >
                {{ duty }}
              </div>
            </template>
            <div
              v-if="currentExperience.stacks"
              class="px-6 py-2 font-jiho-medium text-primay-dark dark:text-white"
            >
              Stacks :
            </div>
            <template v-for="stack in currentExperience.stacks" :key="stack.id">
              <div
                class="px-6 py-2 font-jiho-regular text-primay-dark dark:text-white"
              >
                {{ stack }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
import feather from "feather-icons";
import experiences from "../data/experiences";

export default {
  data() {
    return {
      theme: "",
      experiences,
      modal: false,
      currentExperience: {},
      isExperienceInfosPanelOpen: false,
    };
  },
  watch: {
    isExperienceInfosPanelOpen: function () {
      if (this.isExperienceInfosPanelOpen) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
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
  methods: {
    closeExperienceInfosPanel() {
      this.isExperienceInfosPanelOpen = false;
    },
    openExperienceInfosPanel(experience) {
      this.currentExperience = experience;
      this.isExperienceInfosPanelOpen = true;
      this.$nextTick(() => {
        this.$refs.experienceInfosPanel.focus();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.panel-fade-enter-active {
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.panel-fade-enter-from {
  transform: translateX(100%);
}
.panel-fade-enter-to {
  transform: translateX(0px);
}
.panel-fade-leave-active {
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.panel-fade-leave-from {
  transform: translateX(0px);
}
.panel-fade-leave-to {
  transform: translateX(100%);
}
</style>
