<template>
    <nav
        class="header fixed top-0 w-screen dark:border-b-[2px] dark:border-secondary md:shadow-sm lg:shadow-none"
        :class="{ 'is-hidden': !showHeader }"
        ref="myHeader"
    >
        <div
            class="container flex w-full justify-between items-center p-4 sm:px-16 bg-white dark:bg-dark"
        >
            <router-link to="/julie-gicquel/"
                ><img
                    v-if="theme === 'light'"
                    src="@/assets/images/logo-dark.svg"
                    class="w-36"
                    alt="Dark Logo"
                />
                <img
                    v-else
                    src="@/assets/images/logo-light.svg"
                    class="w-36"
                    alt="Light Logo"
                />
            </router-link>

            <div class="hidden md:flex">
                <router-link :to="{ name: 'Home', hash: '#experience' }">
                    <MenuItem class="mx-4">
                        {{ $t("header.experience") }}
                    </MenuItem>
                </router-link>
                <router-link :to="{ name: 'Home', hash: '#education' }">
                    <MenuItem class="mx-4">
                        {{ $t("header.education") }}
                    </MenuItem>
                </router-link>
                <router-link :to="{ name: 'About' }">
                    <MenuItem class="mx-4">
                        {{ $t("header.about_me") }}
                    </MenuItem></router-link
                >
            </div>

            <div class="flex">
                <LocaleSwitcher class="mr-4" />
                <ThemeSwitcher :theme="theme" @themeChanged="updateTheme" />
            </div>
        </div>
    </nav>
</template>
<script>
import ThemeSwitcher from "../ThemeSwitcher.vue";
import LocaleSwitcher from "../LocaleSwitcher.vue";
import MenuItem from "../reusable/MenuItem.vue";

export default {
    components: {
        ThemeSwitcher,
        LocaleSwitcher,
        MenuItem,
    },
    data() {
        return {
            theme: "",
            showHeader: true,
            lastScrollPosition: 0,
            scrollOffset: 40,
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
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
            this.showHeader = window.pageYOffset < this.lastScrollPosition;
            this.lastScrollPosition = window.pageYOffset;
        },
    },
};
</script>
<style lang="scss">
.header {
    transform: translateY(0);
    transition: transform 300ms linear;
}
.header.is-hidden {
    transform: translateY(-100%);
}
</style>
