<template>
  <div class="relative text-lg w-12 md:w-18 lg:w-36">
    <button
      class="flex items-center justify-between px-3 py-2 bg-white dark:bg-blue-dark-secondary dark:text-white w-full border border-ternary-light dark:border-none rounded-lg"
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <span class="hidden lg:block">{{ selectedLocale.name }}</span>
      <img class="lg:hidden lg:w-auto lg:h-5 my-1" :src="selectedLocale.flag" />
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
        :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="isOptionsExpanded"
        class="absolute left-0 right-0 mb-4 bg-white dark:bg-blue-dark-secondary dark:border dark:border-blue-dark divide-y rounded-lg shadow-lg overflow-hidden"
      >
        <li
          v-for="locale in locales"
          :key="locale.id"
          class="px-3 py-3 transition-colors duration-300 hover:bg-gray-200 hover:dark:bg-primary-dark"
          @mousedown.prevent="setOption(locale)"
        >
          <div
            class="flex justify-center lg:justify-start lg:items-center lg:px-1"
          >
            <img
              class="w-12 lg:w-auto lg:h-5"
              :src="locale.flag"
              :alt="locale.name"
            />
            <span class="hidden lg:ml-2 lg:block lg:dark:text-white font-jiho-light">{{
              locale.name
            }}</span>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();

    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });

    return {
      t,
      locale,
    };
  },
  data() {
    return {
      isOptionsExpanded: false,
      locales: [
        {
          id: "fr",
          name: "Français",
          flag: require("@/assets/images/france.svg"),
        },
        { id: "en", name: "English", flag: require("@/assets/images/uk.svg") },
        {
          id: "ja",
          name: "日本語",
          flag: require("@/assets/images/japon.svg"),
        },
      ],
    };
  },
  methods: {
    setOption(locale) {
      this.$i18n.locale = locale.id;
      this.selectedLocale = locale.name;
      this.isOptionsExpanded = false;
    },
  },
  computed: {
    selectedLocale: {
      get() {
        let lang = {};
        const locale = this.$i18n.locale;
        switch (locale) {
          case "fr":
            lang = {
              name: "Français",
              flag: require("@/assets/images/france.svg"),
            };
            break;
          case "en":
            lang = { name: "English", flag: require("@/assets/images/uk.svg") };
            break;
          case "ja":
            lang = {
              name: "日本語",
              flag: require("@/assets/images/japon.svg"),
            };
            break;

          default:
            break;
        }
        return lang;
      },
      set(value) {
        return value;
      },
    },
  },
};
</script>
