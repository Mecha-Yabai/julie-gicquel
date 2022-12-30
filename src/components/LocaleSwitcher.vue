<template>
  <select v-model="$i18n.locale">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>
<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();

    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });

    return {
      t,
      locale,
    };
  },
  data() {
    return { locales: ["fr", "en", "ja"] };
  },
};
</script>
