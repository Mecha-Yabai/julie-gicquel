import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

function headerOffset() {
    const header = document.querySelector(".header");
    return (header ? header.offsetHeight : 78) + 24;
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: headerOffset(),
                behavior: "smooth",
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
