<template>
    <div id="app">
        <a
            href="#main"
            class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-dark focus:px-4 focus:py-2 focus:text-white dark:focus:bg-secondary"
        >
            {{ $t("skip_to_content") }}
        </a>
        <header>
            <MainHeader />
        </header>
        <main id="main">
            <router-view />
        </main>
        <footer>
            <MainFooter />
        </footer>
        <MobileMenu />
    </div>
</template>

<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";

import MainHeader from "./components/main/MainHeader.vue";
import MainFooter from "./components/main/MainFooter.vue";
import MobileMenu from "./components/main/MobileMenu.vue";

export default {
    name: "App",
    components: {
        MainHeader,
        MainFooter,
        MobileMenu,
    },
    setup() {
        const { locale } = useI18n();

        watch(
            locale,
            (value) => {
                document.documentElement.setAttribute("lang", value);
            },
            { immediate: true }
        );
    },
};
</script>
