<template>
    <div
        class="flex flex-col inherit-height pt-[72.66px] md:pt-[78px] lg:justify-between"
    >
        <div
            class="flex flex-1 flex-col-reverse lg:flex-row justify-evenly lg:items-center"
        >
            <div class="w-full lg:w-6/12 text-left lg:pr-8">
                <h1
                    class="font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-dark dark:text-grey-lighter my-4 md:my-8"
                >
                    {{ $t("greetings") }}
                    <span
                        class="text-red-500 dark:text-primary font-jiho-bold"
                        >{{ $t("name") }}</span
                    >,
                    <br />
                    {{ $t("web_developer") }}
                </h1>
                <div class="flex flex-col space-y-4">
                    <p
                        class="text-center lg:text-justify font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                    >
                        {{ $t("hero_1") }}
                    </p>
                    <p
                        class="text-center lg:text-justify font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                    >
                        {{ $t("hero_2") }}
                    </p>
                </div>
                <div
                    class="flex items-center justify-evenly lg:justify-start my-4 sm:my-6 md:my-8"
                >
                    <div class="w-8/12 sm:w-1/2">
                        <CTAButton
                            :selectedIcon="'download'"
                            :link="'/julie-gicquel/files/Julie-Gicquel-CV.pdf'"
                            :download="'Julie-Gicquel-CV.pdf'"
                            label="'CV'"
                            class="bg-red-600 dark:bg-primary hover:bg-red-700 dark:hover:bg-primary-darker text-white"
                        >
                            {{ $t("download_resume") }}
                        </CTAButton>
                    </div>
                    <div class="hidden sm:block sm:w-1/2 sm:ml-4">
                        <CTAButton
                            :selectedIcon="'mail'"
                            :link="`mailto:${mail}`"
                            label="'Contact'"
                            class="bg-white dark:bg-secondary dark:hover:bg-secondary-darker border-dark dark:border-secondary dark:hover:border-secondary-darker border-2 hover:bg-dark text-dark dark:text-white dark:hover:text-primary hover:text-white"
                        >
                            {{ $t("get_in_touch") }}
                        </CTAButton>
                    </div>
                </div>
                <div class="flex flex-col space-y-2">
                    <p
                        class="font-jiho-medium text-lg xl:text-xl text-center lg:text-left text-primay-dark dark:text-white"
                    >
                        {{ $t("follow_me") }}
                    </p>
                    <div class="flex justify-center lg:justify-start">
                        <SocialButton />
                        <a
                            :href="`mailto:${mail}`"
                            class="inline-flex sm:hidden rounded-full h-11 w-11 sm:h-12 sm:w-12 items-center justify-center mx-2 bg-white dark:bg-secondary dark:hover:bg-secondary-darker border-dark dark:border-secondary dark:hover:border-secondary-darker border-2 hover:bg-dark text-dark dark:text-white dark:hover:text-primary hover:text-white text-center"
                        >
                            <i data-feather="mail" class="w-5 lg:w-16"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-6/12 flex justify-center lg:justify-end">
                <img
                    v-if="theme === 'light'"
                    src="@/assets/images/hero3_LIGHT.png"
                    alt="Developer"
                    class="w-full sm:w-3/4 md:2/4 lg:w-10/12"
                />
                <img
                    v-else
                    src="@/assets/images/hero3_LIGHT_darkmode.png"
                    alt="Developer"
                    class="w-full sm:w-3/4 md:2/4 lg:w-10/12"
                />
            </div>
        </div>
        <div class="hidden lg:flex flex-none items-center justify-center mb-12">
            <router-link :to="{ name: 'Home', hash: '#skills' }">
                <button
                    class="relative inline-block cursor-pointer outline-none border-none align-middle no-underline bg-transparent p-0 w-48 h-auto learn-more-button"
                >
                    <span
                        class="relative block m-0 w-12 h-12 bg-dark dark:bg-primary rounded-full transition-all ease-[cubic-bezier(0.65, 0, 0.076, 1)] duration-[450ms] circle"
                        aria-hidden="true"
                    >
                        <span class="icon arrow"></span>
                    </span>
                    <span
                        class="absolute text-dark dark:text-primary font-jiho-regular uppercase text-cente button-text ml-10 leading-relaxed transition-all ease-[cubic-bezier(0.65, 0, 0.076, 1)] duration-[450ms] py-3 inset-0"
                        >{{ $t("learn_more") }}</span
                    >
                </button>
            </router-link>
        </div>
    </div>
</template>
<script>
import feather from "feather-icons";

import { mail } from '../data/socials'

import SocialButton from "./reusable/SocialButton.vue";
import CTAButton from "./reusable/CTAButton.vue";

export default {
    components: { SocialButton, CTAButton },
    data() {
        return {
            theme: "",
            mail,
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>
<style lang="css">
button.learn-more-button .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
}

button.learn-more-button .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

button.learn-more-button .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
}

button:hover .circle {
    width: 100%;
}

button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
}

button:hover .button-text {
    color: #fff;
}
</style>
