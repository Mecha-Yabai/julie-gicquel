<template>
  <div class="flex flex-col lg:justify-between lg:flex-row inherit-height">
    <div class="w-full lg:pr-6 lg:w-6/12 flex flex-col">
      <h1
        class="font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-dark dark:text-grey-lighter my-4"
      >
        {{ $t("education.title_1") }}
        <span class="text-red-500 dark:text-primary">{{
          $t("education.title_2")
        }}</span>
        {{ $t("education.title_3") }}
      </h1>
      <div class="space-y-4 my-4">
        <p
          v-for="paragraph in formationsParagraphs"
          :key="paragraph.id"
          class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
        >
          {{ $t(paragraph.text) }}
        </p>
      </div>
      <div class="hidden h-full lg:flex items-center">
        <img
          v-if="theme === 'light'"
          src="@/assets/images/hero2_LIGHT.png"
          alt="Developer"
          class="lg:w-full"
        />
        <img
          v-else
          src="@/assets/images/hero2_LIGHT_darkmode.png"
          alt="Developer"
          class="lg:w-full"
        />
      </div>
    </div>
    <div class="relative w-full lg:w-6/12 mx-auto">
      <div
        class="absolute bg-grey-light dark:bg-secondary line-vertical"
        :style="{ '--line-height': lineHeight + 'px' }"
      ></div>

      <div class="mt-12 lg:mt-24" ref="formationsWrapper">
        <div
          v-for="(formation, index) in formations"
          :key="formation.id"
          :class="[
            'flex items-baseline mb-0',
            index === formations.length - 1 ? 'mb-0' : 'mb-8',
          ]"
        >
          <div class="w-32 pr-4 flex justify-start items-center">
            <time
              class="bg-red-100 text-primary dark:bg-secondary-darker dark:text-white text-sm font-jiho-regular px-3 py-1 rounded-full whitespace-nowrap"
            >
              {{ formation.date }}
            </time>
          </div>

          <div class="w-6 flex items-center justify-center relative">
            <div
              class="w-3 h-3 bg-primary dark:bg-primary-darker rounded-full"
            ></div>
          </div>

          <div class="flex-1 pl-4">
            <h3
              class="text-md lg:text-lg font-jiho-medium text-dark dark:text-white break-words"
            >
              {{ formation.name }}
            </h3>
            <p
              class="text-sm font-jiho-regular text-grey-darker dark:text-grey-light mt-1 break-words"
            >
              {{ formation.school }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { getFormations } from "../data/formations";

  export default {
    data() {
      return {
        lineHeight: 0,
        theme: "",
      };
    },
    created() {
      this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
      this.$nextTick(() => {
        const wrapper = this.$refs.formationsWrapper;
        if (wrapper) {
          this.lineHeight = wrapper.offsetHeight;
        }
      });
    },
    computed: {
      formations() {
        return getFormations().map((formations) => ({
          ...formations,
          name: this.$t(formations.name),
          school: this.$t(formations.school),
          date: this.$t(formations.date),
        }));
      },
      formationsParagraphs() {
        return [
          { id: 1, text: "education.description_1" },
          { id: 2, text: "education.description_2" },
          { id: 3, text: "education.description_3" },
        ];
      },
    },
  };
</script>

<style style="css" scoped>
  .line-vertical {
    left: calc(8rem + 0.75rem);
    width: 1px;
    top: 3rem;
    height: var(--line-height);
  }

  @media (min-width: 1024px) {
    .line-vertical {
      top: 6rem;
    }
  }
</style>
