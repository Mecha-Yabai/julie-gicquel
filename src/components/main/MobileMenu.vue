<template>
    <nav
        class="footer fixed md:hidden bottom-0 inset-x-0 px-2 pt-2 bg-primary-darker dark:bg-dark dark:border-t-2 dark:border-secondary z-10 max-w-full"
        :class="{ 'is-hidden': !showFooter }"
        :aria-label="$t('header.main_navigation')"
    >
        <ul class="flex md:hidden w-full">
            <li v-for="item in items" :key="item.name" class="flex-1">
                <router-link
                    :to="item.to"
                    class="flex justify-center"
                    :aria-current="item.active ? 'page' : undefined"
                >
                    <MobileMenuItem
                        :selected-icon="item.icon"
                        :active="item.active"
                    >
                        {{ $t(item.label) }}
                    </MobileMenuItem>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import MobileMenuItem from "../reusable/MobileMenuItem.vue";
import { useActiveSection } from "@/composables/useActiveSection";

export default {
    components: { MobileMenuItem },
    setup() {
        const { activeSection } = useActiveSection();
        return { activeSection };
    },
    data() {
        return {
            showFooter: true,
            lastScrollPosition: 0,
            scrollOffset: 40,
            idleDelay: 200,
        };
    },
    computed: {
        onHome() {
            return this.$route.name === "Home";
        },
        items() {
            return [
                {
                    name: "skills",
                    label: "header.skills",
                    icon: "award",
                    to: { path: "/", hash: "#skills" },
                    active: this.onHome && this.activeSection === "skills",
                },
                {
                    name: "experience",
                    label: "header.experience",
                    icon: "briefcase",
                    to: { path: "/", hash: "#experience" },
                    active: this.onHome && this.activeSection === "experience",
                },
                {
                    name: "education",
                    label: "header.education",
                    icon: "book-open",
                    to: { path: "/", hash: "#education" },
                    active: this.onHome && this.activeSection === "education",
                },
                {
                    name: "about",
                    label: "header.about_me",
                    icon: "user",
                    to: "/about",
                    active: this.$route.name === "About",
                },
            ];
        },
    },
    mounted() {
        this.lastScrollPosition = window.pageYOffset;
        window.addEventListener("scroll", this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll);
        clearTimeout(this.idleTimer);
    },
    methods: {
        onScroll() {
            clearTimeout(this.idleTimer);
            this.idleTimer = setTimeout(() => {
                this.showFooter = true;
            }, this.idleDelay);

            if (window.pageYOffset < 0) {
                return;
            }
            if (
                Math.abs(window.pageYOffset - this.lastScrollPosition) <
                this.scrollOffset
            ) {
                return;
            }
            this.showFooter = window.pageYOffset < this.lastScrollPosition;
            this.lastScrollPosition = window.pageYOffset;
        },
    },
};
</script>
<style>
.footer {
    transform: translateY(0);
    transition: transform 300ms linear;
    padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
}
.footer.is-hidden {
    transform: translateY(100%);
}
</style>
