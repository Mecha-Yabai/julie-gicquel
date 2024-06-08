<template>
    <nav
        class="footer fixed md:hidden bottom-0 inset-x-0 px-3 py-3 bg-red-600 dark:bg-dark dark:border-t-[2px] dark:border-secondary z-10 max-w-full"
        :class="{ 'is-hidden': !showFooter }"
    >
        <div class="flex md:hidden w-full justify-evenly">
            <router-link :to="{ path: '/julie-gicquel/', hash: '#experience' }">
                <MobileMenuItem :selected-icon="'briefcase'">
                    {{ $t("header.experience") }}
                </MobileMenuItem>
            </router-link>
            <router-link :to="{ path: '/julie-gicquel/', hash: '#education' }">
                <MobileMenuItem :selected-icon="'book-open'">
                    {{ $t("header.education") }}
                </MobileMenuItem>
            </router-link>
            <router-link to="/about">
                <MobileMenuItem :selected-icon="'user'">
                    {{ $t("header.about_me") }}
                </MobileMenuItem></router-link
            >
        </div>
    </nav>
</template>
<script>
import feather from "feather-icons";

import MobileMenuItem from "../reusable/MobileMenuItem.vue";

export default {
    components: { MobileMenuItem },
    data() {
        return {
            theme: "",
            showFooter: true,
            lastScrollPosition: 0,
            scrollOffset: 40,
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
        feather.replace();
        this.lastScrollPosition = window.pageYOffset;
        window.addEventListener("scroll", this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        updateTheme(theme) {
            this.theme = theme;
        },
        onScroll() {
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
}
.footer.is-hidden {
    transform: translateY(100%);
}
</style>
