<template>
  <div class="container mx-auto px-4 sm:px-16 min-h-screen">
    <HeroSection id="hero" class="py-4" />
    <SkillsSection id="skills" class="py-4" />
    <ExperienceSection id="experience" class="py-4" />
    <EducationSection id="education" class="py-4" />
    <!-- <ProjectsGrid class="snap-center"/> -->
  </div>

  <div class="mt-10 sm:mt-20 flex justify-center">
    <router-link
      to="/projects"
      class="font-jiho-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-red-500 hover:bg-red-600 focus:ring-1 focus:ring-red-800 text-white text-lg sm:text-xl duration-300"
      aria-label="More Projects"
    >
      <Button title="Voir plus de projets" />
    </router-link>
  </div>
</template>
<script>
import HeroSection from "@/components/HeroSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
import Button from "../components/reusable/Button.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    SkillsSection,
    ExperienceSection,
    EducationSection,
    ProjectsGrid,
    Button,
  },
};
</script>
<style lang="scss" scoped>
#hero {
  min-height: calc(100vh - 72px);
  max-height: calc(100vh - 72px);
  @media (min-width: 768px) {
    min-height: calc(100vh - 64px);
    max-height: calc(100vh - 64px);
  }
}
</style>
