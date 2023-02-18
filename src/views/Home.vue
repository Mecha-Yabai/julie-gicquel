<template>
  <div class="container mx-auto px-4 sm:px-16 min-h-screen">
    <HeroSection id="hero" />
    <SkillsSection id="skills" />
    <ExperienceSection id="experience" />
    <EducationSection id="education" />
  </div>
</template>
<script>
import HeroSection from "@/components/HeroSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";

export default {
  components: {
    HeroSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
  },
  // mounted() {
  //   // From testing, without a brief timeout, it won't work.
  //   if (this.$route.hash) {
  //     setTimeout(() => this.scrollTo(this.$route.hash), 500);
  //   }
  // },
  // methods: {
  //   scrollTo: function (hashtag) {
  //     setTimeout(() => {
  //       location.href = hashtag;
  //     }, 500);
  //   },
  // },
};
</script>
