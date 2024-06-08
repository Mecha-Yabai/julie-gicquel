<template>
    <section
        class="max-h-full min-h-screen p-4 pt-0 container mx-auto sm:px-16"
        id="hero"
    >
        <Hero />
    </section>
    <section
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        id="skills"
    >
        <Skills />
    </section>
    <section
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        id="experience"
    >
        <Experience />
    </section>
    <section
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        id="education"
    >
        <Education />
    </section>
</template>
<script>
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

    mounted() {
        this.observeSections();
    },

    methods: {
        observeSections() {
            const sections = document.querySelectorAll("section[id]");
            const options = {
                root: null, // viewport
                rootMargin: "0px",
                threshold: 0.5, // Observer au moins 50% visible
            };

            const callback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        this.updateUrlHash(`#${id}`);
                    }
                });
            };

            const observer = new IntersectionObserver(callback, options);

            sections.forEach((section) => {
                observer.observe(section);
            });
        },
        updateUrlHash(hash) {
            if (window.location.hash !== hash) {
                history.replaceState(null, null, hash);
            }
        },
    },
};
</script>
