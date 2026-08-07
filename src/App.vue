<template>
    <div id="app">
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

export default {
    name: "App",
    components: {
        MainHeader,
        MainFooter,
        MobileMenu,
    },
};
</script>
