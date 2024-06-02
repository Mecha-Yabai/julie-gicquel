<template>
    <section
        class="max-h-full min-h-screen p-4 pt-0 container mx-auto sm:px-16"
        ref="hero"
        id="hero"
    >
        <Hero />
    </section>
    <section
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        ref="skills"
        id="skills"
    >
        <Skills />
    </section>
    <section
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        ref="experience"
        id="experience"
    >
        <Experience />
    </section>
    <section
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        ref="education"
        id="education"
    >
        <Education />
    </section>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Hero from "@/components/HeroSection.vue";
import Skills from "@/components/SkillsSection.vue";
import Experience from "@/components/ExperienceSection.vue";
import Education from "@/components/EducationSection.vue";

export default {
    components: {
        Hero,
        Skills,
        Experience,
        Education,
    },

    setup() {
        const hero = ref(null);
        const skills = ref(null);
        const experience = ref(null);
        const education = ref(null);
        const router = useRouter();

        const sections = [
            { id: "hero", ref: hero },
            { id: "skills", ref: skills },
            { id: "experience", ref: experience },
            { id: "education", ref: education },
        ];

        onMounted(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            router.replace({
                                path: "/",
                                hash: `#${entry.target.id}`,
                            });
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0.1,
                }
            );

            sections.forEach((section) => {
                if (section.ref.value) {
                    observer.observe(section.ref.value);
                }
            });
        });

        return {
            hero,
            skills,
            experience,
            education,
        };
    },
};
</script>
