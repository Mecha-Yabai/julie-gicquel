<template>
    <div id="app" :class="mainTheme">
        <MainHeader />
        <router-view />
        <MainFooter />
        <MobileMenu />
    </div>
</template>

<script>
import MainHeader from "./components/main/MainHeader.vue";
import MainFooter from "./components/main/MainFooter.vue";
import MobileMenu from "./components/main/MobileMenu.vue";
import feather from "feather-icons";

export default {
    name: "App",
    components: {
        MainHeader,
        MainFooter,
        MobileMenu,
    },
    data: () => {
        return {
            mainTheme: localStorage.getItem("theme"),
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>
