<template>
  <section id="skills" class="h-screen">
    <div class="flex flex-col lg:flex-row h-full lg:items-center justify-center">
      <div class="w-full lg:w-6/12 h-1/2 lg:text-left lg:pr-8 mt-4 lg:mt-0">
        <h1
          class="h-1/3 lg:h-fit lg:mb-10 font-jiho-bold lg:text-6xl sm:text-5xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light"
        >
          Un <span class="text-red-500 dark:text-red-dark">profil</span>,<br />
          Triple <span class="text-red-500 dark:text-red-dark">compétences</span>.
        </h1>
        <div class="h-2/3 lg:h-fit space-y-4 lg:space-y-8">
          <div>
            <p
              class="text-center md:text-left font-jiho-regular text-lg xl:text-xl leading-none text-gray-500 dark:text-ternary-light"
            >
              J’ai commencé ma carrière dans le web marketing et la
              communication numérique où j’ai pu mettre à profit ma créativité
              et découvrir comment mettre en place des stratégies en ligne
              d’acquisition et fidélisation.
            </p>
          </div>
          <div>
            <p
              class="text-center md:text-left font-jiho-regular text-lg xl:text-xl leading-none text-gray-500 dark:text-ternary-light"
            >
              Après quelques expériences, j’ai décidé de me ré-orienter dans le
              développement web pour apprendre la technique nécessaire pour me
              permettre de concevoir de manière plus concrète mes idées.
            </p>
          </div>
          <div>
            <p
              class="text-center md:text-left font-jiho-regular text-lg xl:text-xl leading-none text-gray-500 dark:text-ternary-light"
            >
              Curieuse et force de proposition, j’apporte une attention
              particulière à l’UI/UX pour offrir la meilleure expérience
              utilisateur à travers un design attractif et intuitif.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-6/12 h-1/2">
        <div class="space-y-4 sm:space-y-10">
          <div class="mt-6 sm:mt-0">
            <hr class="mb-4 sm:mb-10" />
            <div class="flex items-top sm:mb-10">
              <p
                class="mr-4 text-xl sm:text-3xl text-red-500 dark:text-red-dark font-jiho-regular"
              >
                01 /
              </p>
              <h1
                class="text-left text-xl md:text-3xl lg:text-4xl font-jiho-medium text-primary-dark dark:text-primary-light"
              >
                Développement<br />
                Full-Stack
              </h1>
            </div>
          </div>
          <div>
            <hr class="mb-4 sm:mb-10" />
            <div class="flex items-top sm:mb-10">
              <p
                class="mr-4 text-xl sm:text-3xl text-red-500 dark:text-red-dark font-jiho-regular"
              >
                02 /
              </p>
              <h1
                class="text-left text-xl md:text-3xl lg:text-4xl font-jiho-medium text-primary-dark dark:text-primary-light"
              >
                Web UI/UX<br />
                Design
              </h1>
            </div>
          </div>
          <div>
            <hr class="mb-4 sm:mb-10" />
            <div class="flex items-top sm:mb-10">
              <p
                class="mr-4 text-xl sm:text-3xl text-red-500 dark:text-red-dark font-jiho-regular"
              >
                03 /
              </p>
              <h1
                class="text-left text-xl md:text-3xl lg:text-4xl font-jiho-medium text-primary-dark dark:text-primary-light"
              >
                Web marketing &<br />
                Communication numérique
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import feather from "feather-icons";

export default {
  data() {
    return {
      theme: "",
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
<style lang="css" scoped>
hr {
  height: 2px;
  color: #404040;
}
</style>
