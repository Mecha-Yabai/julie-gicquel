<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
        src="@/assets/images/JG.png"
        class="rounded-xl w-96"
        alt="Julie Gicquel"
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-jiho-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "Passionnée par l’univers du digital, j’ai commencé ma carrière dans le web marketing puis j’ai évolué dans le développement web. Cette double compétence me permets de pouvoir participer activement à l’élaboration de nouveaux produits tout en les développant de manière plus concrète par la suite. Curieuse et créative, j’aime être force de proposition et j'apporte une attention particulière à l’UI/UX des produits sur lesquels je travaille. Enfin, je suis une grande adepte de musique et de jeux vidéos et ma devise préférée est celle de mon club de coeur : « Droit au but ».",
        },
      ],
    };
  },
};
</script>
