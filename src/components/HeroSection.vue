<template>
  <section class="h-full sm:h-screen flex content-center py-4">
    <div class="flex flex-col justify-around lg:justify-between">
      <div
        class="flex lg:flex-1 flex-col-reverse lg:flex-row items-center mt-20 sm:mt-12"
      >
        <div class="w-full lg:w-6/12 text-left lg:pr-8">
          <h1
            class="font-jiho-medium xl:text-6xl sm:text-5xl text-2xl text-center lg:text-left text-primary-dark dark:text-primary-light mb-4 lg:mb-0"
          >
            {{ $t("greetings") }}
            <span class="text-red-500 dark:text-red-dark font-jiho-bold">{{
              $t("name")
            }}</span
            >,
            <br />
            {{ $t("web_developer") }}
          </h1>
          <div class="mb-4 sm:mb-6 lg:mt-10">
            <p
              class="text-justify sm:text-center lg:text-justify font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
            >
              {{ $t("hero_1") }}
              <br />
              {{ $t("hero_2") }}
            </p>
          </div>
          <div
            class="flex items-center justify-evenly lg:justify-start mb-2 sm:mb-4"
          >
            <a
              download="Julie-Gicquel-CV.pdf"
              href="/julie-gicquel/files/Julie-Gicquel-CV.pdf"
              class="flex justify-center items-center px-4 w-auto sm:w-52 py-3 rounded-lg bg-red-600 dark:bg-red-dark border-red-600 dark:border-none border-2 text-white duration-500"
              aria-label="Télécharger mon CV"
            >
              <span class="text-sm sm:text-md font-jiho-medium duration-100">{{
                $t("download_resume")
              }}</span>
              <i
                data-feather="download"
                class="ml-2 w-4 sm:w-5 duration-100"
              ></i>
            </a>
            <a
              :href="`mailto:${mail}`"
              class="flex justify-center items-center lg:ml-4 px-4 w-auto sm:w-52 py-3 rounded-lg bg-white dark:bg-blue-dark border-primary-dark dark:border-none border-2 hover:bg-primary-dark text-primary-dark dark:text-white hover:text-white duration-500"
            >
              <span class="text-sm sm:text-md font-jiho-medium duration-100">
                {{ $t("get_in_touch") }}
              </span>
              <i data-feather="mail" class="ml-2 w-4 sm:w-5 duration-100"></i>
            </a>
          </div>
          <p
            class="mb-2 sm:mt-4 font-jiho-medium text-lg xl:text-xl text-center lg:text-left text-primay-dark dark:text-white"
          >
            {{ $t("follow_me") }}
          </p>
          <div class="flex justify-center lg:justify-start">
            <SocialButton />
          </div>
        </div>
        <div
          class="w-full lg:w-6/12 flex justify-center lg:justify-end mb-2 sm:mb-4 lg:mb-0"
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
      <div class="flex lg:flex-none items-center justify-center py-4 sm:py-2">
        <a href="#skills">
          <button
            class="relative inline-block cursor-pointer outline-none border-none align-middle no-underline bg-transparent p-0 w-48 h-auto learn-more-button"
          >
            <span
              class="relative block m-0 w-12 h-12 bg-primary-dark dark:bg-red-dark rounded-full transition-all ease-[cubic-bezier(0.65, 0, 0.076, 1)] duration-[450ms] circle"
              aria-hidden="true"
            >
              <span class="icon arrow"></span>
            </span>
            <span
              class="absolute text-primary-dark dark:text-red-dark font-jiho-regular uppercase text-cente button-text ml-10 leading-relaxed transition-all ease-[cubic-bezier(0.65, 0, 0.076, 1)] duration-[450ms] py-3 inset-0"
              >{{ $t("learn_more") }}</span
            >
          </button>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";
import SocialButton from "./reusable/SocialButton.vue";

export default {
  components: { SocialButton },
  data() {
    return {
      theme: "",
      mail: "julie.gcql@gmail.com",
      addMarginOnTop: false,
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    if (window.pageYOffset < 0) {
      this.addMarginOnTop = true;
    }
  },
  updated() {
    feather.replace();
  },
};
</script>
<style lang="css">
button.learn-more-button .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.learn-more-button .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more-button .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: #fff;
}
</style>
