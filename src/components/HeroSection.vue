<template>
  <section class="flex content-center">
    <div class="flex flex-col justify-around lg:justify-between">
      <div class="flex lg:flex-1 flex-col-reverse lg:flex-row items-center">
        <div class="w-full lg:w-6/12 text-left lg:pr-8">
          <h1
            class="font-jiho-medium xl:text-6xl sm:text-5xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light mb-4 lg:mb-0"
          >
            {{ $t("greetings") }}
            <span class="text-red-500 dark:text-red-dark font-jiho-bold">{{
              $t("name")
            }}</span
            >,
            <br />
            {{ $t("web_developer") }}
          </h1>
          <div class="mb-6 lg:mt-10">
            <p
              class="text-justify sm:text-center lg:text-justify font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
            >
              {{ $t("hero_1") }}
              <br />
              {{ $t("hero_2") }}
            </p>
          </div>
          <div
            class="flex items-center justify-evenly lg:justify-start mt-4 sm:mt-6 lg:mt-8"
          >
            <a
              download="Julie-Gicquel-CV.pdf"
              href="/files/Julie-Gicquel-CV.pdf"
              class="flex justify-center items-center px-4 w-auto py-3 rounded-lg bg-red-600 dark:bg-red-dark text-white duration-500"
              aria-label="Télécharger mon CV"
            >
              <span class="text-md font-jiho-medium duration-100">{{
                $t("download_resume")
              }}</span>
              <i data-feather="download" class="ml-2 m:w-5 duration-100"></i>
            </a>
            <a
              :href="`mailto:${mail}`"
              class="lg:ml-4 px-4 w-auto py-3 rounded-lg bg-white dark:bg-blue-dark border-primary-dark dark:border-none border-2 hover:bg-primary-dark text-primary-dark dark:text-white hover:text-white duration-500"
              ><span class="text-md font-jiho-medium duration-100">
                {{ $t("get_in_touch") }}</span
              >
            </a>
          </div>
          <p
            class="mt-6 font-jiho-medium text-lg xl:text-xl text-center lg:text-left text-primay-dark dark:text-white"
          >
            {{ $t("follow_me") }}
          </p>
          <div class="flex justify-center lg:justify-start mt-4">
            <SocialButton />
          </div>
        </div>
        <div
          class="w-full lg:w-6/12 flex justify-center lg:justify-end mb-4 lg:mb-0"
        >
          <img
            v-if="theme === 'light'"
            src="@/assets/images/heroJG_v1.png"
            alt="Developer"
            class="w-3/5 md:w-2/5 lg:w-10/12 lg:max-w-lg"
          />
          <img
            v-else
            src="@/assets/images/heroJG_v1_BW.png"
            alt="Developer"
            class="w-3/5 md:w-2/5 lg:w-10/12 lg:max-w-lg"
          />
        </div>
      </div>
      <div class="flex lg:flex-none items-center justify-center">
        <a id="scrollButton" href="#skills">
          <lottie-player
            :src="scrolldown"
            background="transparent"
            speed="1"
            style="width: 70px; height: 70px"
            loop
            autoplay
          ></lottie-player>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";
import scrolldown from "../assets/animation/scrolldown.json";
import SocialButton from "./reusable/SocialButton.vue";

export default {
  components: { SocialButton },
  data() {
    return {
      scrolldown,
      theme: "",
      mail: "julie.gcql@gmail.com",
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
    scrollToNexSection() {
      document.getElementById("#Skills").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
