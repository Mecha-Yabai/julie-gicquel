<template>
    <button
        type="button"
        @click.prevent="toggleTheme"
        :aria-label="$t('theme_switcher')"
        :aria-pressed="isDark"
        class="w-12 text-red-600 hover:text-white dark:text-gray-200 dark:hover:text-primary bg-grey-light hover:bg-red-600 dark:bg-secondary-darker rounded-xl inline-flex justify-center items-center"
    >
        <FeatherIcon :name="isDark ? 'sun' : 'moon'" />
    </button>
</template>
<script>
import FeatherIcon from "./reusable/FeatherIcon.vue";
import { useTheme } from "@/composables/useTheme";

export default {
    components: { FeatherIcon },
    setup() {
        const { isDark, toggleTheme } = useTheme();
        return { isDark, toggleTheme };
    },
};
</script>
