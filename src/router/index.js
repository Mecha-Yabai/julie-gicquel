import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
    {
        path: "/",
        redirect: { name: "Home" },
    },
    {
        path: "/julie-gicquel/",
        name: "Home",
        component: Home,
    },
    {
        path: "/julie-gicquel/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        let position = {};
        if (to.hash) {
            position = {
                el: to.hash,
                behavior: "smooth",
            };
        } else {
            position = { left: 0, top: 0 };
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(position);
            }, 100);
        });
    },
});

export default router;
