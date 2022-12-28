<template>
  <div :class="mainTheme">
    <!-- App header -->
    <MainHeader class="container mx-auto px-4 sm:px-16 py-4" />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :theme="mainTheme" />
      </transition>
    </router-view>

    <!-- App footer -->
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./components/main/MainHeader.vue";
import MainFooter from "./components/main/MainFooter.vue";
import feather from "feather-icons";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
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
