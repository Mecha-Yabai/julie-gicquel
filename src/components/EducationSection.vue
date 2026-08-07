<template>
  <div class="flex flex-col lg:justify-between lg:flex-row inherit-height">
    <div class="w-full lg:pr-6 lg:w-6/12 flex flex-col">
      <h2
        v-revele
        class="trame decale font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-dark dark:text-grey-lighter my-4"
      >
        <span class="sceau-place" aria-hidden="true"
          ><span class="sceau">学</span></span
        >
        <span class="devoile"
          >{{ $t("education.title_1") }}{{ $t("ws")
          }}<span class="text-red-500 dark:text-primary">{{
            $t("education.title_2")
          }}</span
          >{{ $t("ws") }}{{ $t("education.title_3") }}</span
        >
      </h2>
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
          v-if="!isDark"
          src="@/assets/images/hero2_LIGHT.webp"
          :alt="$t('alt_education')"
          width="695"
          height="695"
          loading="lazy"
          class="lg:w-full"
        />
        <img
          v-else
          src="@/assets/images/hero2_LIGHT_darkmode.webp"
          :alt="$t('alt_education')"
          width="695"
          height="695"
          loading="lazy"
          class="lg:w-full"
        />
      </div>
    </div>
    <div class="relative w-full lg:w-6/12 mx-auto">
      <div class="mt-12 lg:mt-24">
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
              class="tampon bg-red-100 text-primary-darker dark:bg-secondary-darker dark:text-white text-sm font-jiho-regular px-3 py-1 rounded-full whitespace-nowrap"
            >
              {{ formation.date }}
            </time>
          </div>

          <div
            class="w-6 self-stretch pt-2 flex items-start justify-center relative jalon"
            :class="{
              'jalon--debut': index === 0,
              'jalon--fin': index === formations.length - 1,
            }"
          >
            <div
              class="relative w-3 h-3 bg-primary dark:bg-primary-darker rounded-full"
            ></div>
          </div>

          <div class="flex-1 pl-4">
            <h3
              class="text-md lg:text-lg font-jiho-medium text-dark dark:text-white wrap-break-word"
            >
              {{ formation.name }}
            </h3>
            <p
              class="text-sm font-jiho-regular text-grey-darker dark:text-grey-light mt-1 wrap-break-word"
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
  import { useTheme } from "@/composables/useTheme";

  export default {
    setup() {
      const { isDark } = useTheme();
      return { isDark };
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
