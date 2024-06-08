// const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./src/**/*.vue",
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./src/**/*.html",
        "./src/**/*.md",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "grey-lighter": "#F7F8FC",
                "grey-light": "#DBE2E6",
                dark: "#030303",
                "grey-darker": "#535353",
                "grey-dark": "#666666",
                primary: "#DC1510",
                "primary-darker": "#9c2016",
                secondary: "#233763",
                "secondary-darker": "#141f38",
            },
            container: {
                center: true,
            },
        },
    },
    variants: {
        extend: { opacity: ["disabled"] },
    },
    safelist: [
        {
            pattern: /./,
        },
    ],
};
