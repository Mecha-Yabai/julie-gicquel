<template>
  <div :class="mainTheme">
    <MainHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :theme="mainTheme" />
      </transition>
    </router-view>
    <MainFooter />
    <MobileFooter />
  </div>
</template>

<script>
import MainHeader from "./components/main/MainHeader.vue";
import MainFooter from "./components/main/MainFooter.vue";
import MobileFooter from "./components/main/MobileFooter.vue";
import feather from "feather-icons";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
    MobileFooter,
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
