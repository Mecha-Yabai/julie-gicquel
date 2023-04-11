<template>
    <div class="container mx-auto px-4 sm:px-16">
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
};
</script>
