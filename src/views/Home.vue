<template>
    <section
        v-for="section in sections"
        :key="section.id"
        :id="section.id"
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        :class="{ 'pt-0': section.id === 'hero' }"
    >
        <component :is="section.component"></component>
    </section>
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
    computed: {
        sections() {
            return [
                {
                    id: "hero",
                    component: HeroSection,
                },
                {
                    id: "skills",
                    component: SkillsSection,
                },
                {
                    id: "experience",
                    component: ExperienceSection,
                },
                {
                    id: "education",
                    component: EducationSection,
                },
            ];
        },
    },
};
</script>
