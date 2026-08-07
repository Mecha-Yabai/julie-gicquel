import { computed, ref } from "vue";

const STORAGE_KEY = "theme";

function readStoredTheme() {
    try {
        return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
    } catch {
        return "light";
    }
}

function applyTheme(value) {
    document.documentElement.classList.toggle("dark", value === "dark");
}

const theme = ref(readStoredTheme());

applyTheme(theme.value);

export function useTheme() {
    function setTheme(value) {
        theme.value = value;
        applyTheme(value);
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch {
            return;
        }
    }

    return {
        theme,
        isDark: computed(() => theme.value === "dark"),
        toggleTheme: () => setTheme(theme.value === "dark" ? "light" : "dark"),
        setTheme,
    };
}
