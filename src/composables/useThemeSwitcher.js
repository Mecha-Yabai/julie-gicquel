import { ref } from "vue";

export default function useThemeSwitcher() {
    const currentTheme = ref("light");

    function toggleTheme() {
        if (currentTheme.value == "dark") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    // Light Theme Function
    function setLightTheme() {
        currentTheme.value = "light";

        localStorage.setItem("theme", "light");
    }

    // Dark Theme Function
    function setDarkTheme() {
        currentTheme.value = "dark";

        localStorage.setItem("theme", "dark");
    }

    return {
        toggleTheme,
    };
}
