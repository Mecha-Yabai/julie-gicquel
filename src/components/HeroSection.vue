<template>
  <section>
    <div class="flex flex-col justify-around lg:justify-between">
      <!-- Hero Content -->
      <div class="flex lg:flex-1 flex-col-reverse lg:flex-row items-center">
        <!-- Banner left contents -->
        <div class="w-full lg:w-6/12 text-left lg:pr-8">
          <h1
            class="font-jiho-bold lg:text-6xl sm:text-5xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light mb-4 lg:mb-0"
          >
            <span class="font-jiho-bold-italic">Hello there,</span>
            <br />
            Je suis
            <span class="text-red-500">Julie</span> !
          </h1>
          <div class="mb-8 lg:mb-0 lg:mt-2">
            <p
              class="text-justify sm:text-center lg:text-left font-jiho-regular text-lg lg:text-xl leading-none text-gray-500"
            >
              Développeuse web, anciennement dans le marketing digital, j'ai un
              gros attrait pour l'UI et l'UX et j'aime offrir la meilleure
              expérience utilisateur. 👩🏻‍💻
              <br />
              Pour me résumer, prenez une bonne dose de créativité, une
              curiosité accrue et de la spontanéité et ça donne un mélange
              dynamique où se mêlent compétences techniques, linguistiques et de
              communication ! 🎯
            </p>
          </div>
          <div class="flex justify-center lg:block mt-4 sm:mt-6">
            <a
              download="Julie-Gicquel-CV.pdf"
              href="/files/Stoman-Resume.pdf"
              class="flex justify-center items-center px-4 w-auto py-3 shadow-lg rounded-lg bg-red-600 text-white duration-500"
              aria-label="Télécharger mon CV"
            >
              <span class="text-md font-jiho-medium duration-100"
                >Télécharger mon CV</span
              >
              <i
                data-feather="download"
                class="ml-2 m:w-5 duration-100"
              ></i>
            </a>
          </div>
          <p
            class="mt-6 font-jiho-medium text-lg xl:text-xl text-center lg:text-left text-primay-dark dark:text-white"
          >
            Retrouvez-moi sur :
          </p>
          <div class="flex justify-center lg:block mt-4">
            <a
              v-for="social in socials"
              :key="social.id"
              :href="social.url"
              target="__blank"
              class="mx-2 bg-white dark:bg-primary-dark border-primary-dark dark:border-white border-2 hover:bg-primary-dark text-primary-dark dark:text-white hover:text-white text-center py-2 px-2 rounded-full h-9 w-9 sm:h-13 sm:w-13 inline-flex items-center"
            >
              <i :data-feather="social.icon" class="w-4 sm:w-5"></i>
            </a>
          </div>
        </div>

        <!-- Banner right illustration -->
        <div
          class="w-full lg:w-6/12 flex justify-center lg:justify-end mb-4 lg:mb-0"
        >
          <img
            src="@/assets/images/herov2.png"
            alt="Developer"
            class="w-3/5 md:w-2/5 lg:w-10/12 lg:max-w-lg"
          />
        </div>
      </div>
      <!-- Scroll part -->
      <div class="flex lg:flex-none items-center justify-center">
        <div class="font-jiho-light">Pour en découvrir plus</div>
        <div @click="scrollToNexSection()" class="cursor-pointer">
          <lottie-player
            :src="scrolldown"
            background="transparent"
            speed="1"
            style="width: 70px; height: 70px"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";
import scrolldown from "../assets/animation/scrolldown.json";

export default {
  components: {},
  data() {
    return {
      scrolldown,
      theme: "",
      socials: [
        {
          id: 1,
          name: "Linkedin",
          icon: "linkedin",
          url: "",
        },
        {
          id: 2,
          name: "GitHub",
          icon: "github",
          url: "",
        },
        {
          id: 3,
          name: "Twitter",
          icon: "twitter",
          url: "",
        },
      ],
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
      console.log("eeee");
      document.getElementById("#Skills").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
