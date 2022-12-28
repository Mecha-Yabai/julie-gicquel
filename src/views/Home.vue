<template>
  <div class="container mx-auto px-4 sm:px-16 min-h-screen">
    <HeroSection id="hero" class="py-4" />
    <SkillsSection id="skills" class="py-4" />
    <ExperienceSection id="experience" class="py-4" />
    <EducationSection id="education" class="py-4" />
  </div>
</template>
<script>
import HeroSection from "@/components/HeroSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
  },
};
</script>
<style lang="scss" scoped>
#hero {
  min-height: calc(100vh - 72px);
  max-height: calc(100vh - 72px);
}
</style>
