const OBS = Symbol("revele");

export const revele = {
    mounted(el) {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.classList.add("revele");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revele");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        el[OBS] = observer;
    },

    unmounted(el) {
        el[OBS]?.disconnect();
        delete el[OBS];
    },
};
