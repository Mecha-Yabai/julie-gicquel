<template>
    <section
        v-for="section in sections"
        :key="section.name"
        class="max-h-full min-h-screen p-4 container mx-auto sm:px-16"
        :class="{ 'pt-0': section.name === 'hero' }"
        :id="section.name"
    >
        <component :is="section.component" />
    </section>
</template>
<script>
import Hero from "@/components/HeroSection.vue";
import Skills from "@/components/SkillsSection.vue";
import Experience from "@/components/ExperienceSection.vue";
import Education from "@/components/EducationSection.vue";

export default {
    mounted() {
        this.observeSections();
    },

    computed: {
        sections() {
            return [
                {
                    name: "hero",
                    component: Hero,
                },
                {
                    name: "skills",
                    component: Skills,
                },
                {
                    name: "experience",
                    component: Experience,
                },
                {
                    name: "education",
                    component: Education,
                },
            ];
        },
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
