import { ref } from "vue";

const activeSection = ref("hero");

export function useActiveSection() {
    return {
        activeSection,
        setActiveSection: (id) => {
            activeSection.value = id;
        },
    };
}
