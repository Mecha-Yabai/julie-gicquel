<template>
    <div class="container mx-auto px-4 sm:px-16">
        <section
            v-for="section in sections"
            :key="section.id"
            :id="section.id"
            class="max-h-full min-h-screen py-4"
        >
            <component :is="section.component"></component>
        </section>
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
