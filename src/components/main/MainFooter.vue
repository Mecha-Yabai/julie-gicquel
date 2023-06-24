<template>
    <div class="container mx-auto">
        <div
            class="pt-16 pb-8 mt-20 border-t-2 border-grey-lighter dark:border-grey-darker"
        >
            <div class="pb-5 flex justify-center">
                <button
                    :class="theme === 'light' ? 'text-dark' : 'text-white'"
                    @click="goTop()"
                >
                    <div class="text text-dark dark:text-white">
                        <span
                            class="font-jiho-regular"
                            :class="{ 'ml-[4px]': $i18n.locale !== 'ja' }"
                            >{{ $t("footer.back_to_top_1") }}</span
                        >
                        <span
                            class="font-jiho-regular"
                            :class="{ 'ml-[4px]': $i18n.locale !== 'ja' }"
                            >{{ $t("footer.back_to_top_2") }}</span
                        >
                        <span
                            class="font-jiho-regular"
                            :class="{ 'ml-[4px]': $i18n.locale !== 'ja' }"
                            >{{ $t("footer.back_to_top_3") }}</span
                        >
                    </div>
                    <div class="clone text-dark dark:text-white">
                        <span
                            class="font-jiho-regular"
                            :class="{ 'ml-[4px]': $i18n.locale !== 'ja' }"
                            >{{ $t("footer.back_to_top_1") }}</span
                        >
                        <span
                            class="font-jiho-regular"
                            :class="{ 'ml-[4px]': $i18n.locale !== 'ja' }"
                            >{{ $t("footer.back_to_top_2") }}</span
                        >
                        <span
                            class="font-jiho-regular"
                            :class="{ 'ml-[4px]': $i18n.locale !== 'ja' }"
                            >{{ $t("footer.back_to_top_3") }}</span
                        >
                    </div>
                    <svg
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        :stroke="theme === 'light' ? '#030303' : 'white'"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                class="flex flex-col justify-center items-center mb-12 sm:mb-20"
            >
                <p
                    class="font-jiho-medium sm:text-3xl text-2xl text-dark dark:text-grey-lighter mb-5"
                >
                    {{ $t("footer.contact_me") }}
                </p>
                <ul class="flex gap-4 sm:gap-8">
                    <SocialButton />
                    <a
                        :href="`mailto:${mail}`"
                        target="__blank"
                        class="rounded-full h-11 w-11 sm:h-12 sm:w-12 inline-flex items-center justify-center mx-2 bg-white dark:bg-secondary shadow-lg border-dark dark:border-secondary border-2 hover:bg-dark text-dark dark:text-white dark:hover:bg-secondary dark:hover:text-primary hover:text-white text-center"
                    >
                        <i data-feather="mail" class="w-5 lg:w-16"></i>
                    </a>
                </ul>
            </div>

            <MainFooterCopyright :mail="mail" />
        </div>
    </div>
</template>
<script>
import SocialButton from "../reusable/SocialButton.vue";
import MainFooterCopyright from "./MainFooterCopyright.vue";

export default {
    components: { MainFooterCopyright, SocialButton },
    data() {
        return {
            mail: "julie.gcql@gmail.com",
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    methods: {
        goTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>
<style lang="scss" scoped>
button {
    width: 140px;
    height: 56px;
    overflow: hidden;
    border: none;
    background: none;
    position: relative;
    padding-bottom: 2em;
}

button > div,
button > svg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
}

button:before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: bottom right;
    background: currentColor;
    transition: transform 0.25s ease-out;
}

button:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
}

button .clone > *,
button .text > * {
    opacity: 1;
    font-size: 1.3rem;
    transition: 0.2s;
}

button .clone > * {
    transform: translateY(60px);
}

button:hover .clone > * {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

button:hover .text > * {
    opacity: 1;
    transform: translateY(-60px);
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

button:hover .clone > :nth-child(1) {
    transition-delay: 0.15s;
}

button:hover .clone > :nth-child(2) {
    transition-delay: 0.2s;
}

button:hover .clone > :nth-child(3) {
    transition-delay: 0.25s;
}

button:hover .clone > :nth-child(4) {
    transition-delay: 0.3s;
}
/* icon style and hover */
button svg {
    width: 20px;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(-50deg);
    transition: 0.2s ease-out;
}

button:hover svg {
    transform: translateY(-50%) rotate(-90deg);
}
</style>
