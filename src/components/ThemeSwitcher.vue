<template>
    <button
        type="button"
        @click.prevent="toggleTheme"
        aria-label="Theme Switcher"
        class="w-12 text-red-600 hover:text-white dark:text-gray-200 dark:hover:text-primary bg-grey-light hover:bg-red-600 dark:bg-secondary-darker rounded-xl inline-flex justify-center items-center"
    >
        <i v-if="theme === 'light'" data-feather="moon"></i>
        <i v-else data-feather="sun"></i>
    </button>
</template>
<script>
export default {
    props: {
        theme: {
            type: String,
            required: true,
        },
    },
    methods: {
        toggleTheme() {
            const newTheme = this.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            this.$emit("themeChanged", newTheme);
            this.$router.go();
        },
    },
};
</script>
