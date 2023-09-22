<template>
    <div class="flex flex-col lg:justify-between lg:flex-row inherit-height">
        <div class="w-full lg:pr-6 lg:w-6/12 flex flex-col">
            <h1
                class="font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-dark dark:text-grey-lighter my-4"
            >
                {{ $t("experiences.title_1") }}
                <span class="text-red-500 dark:text-primary">{{
                    $t("experiences.title_2")
                }}</span>
                {{ $t("experiences.title_3") }}
            </h1>
            <div class="space-y-4 my-4">
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("experiences.description_1") }}
                </p>
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("experiences.description_2") }}
                </p>
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("experiences.description_3") }}
                </p>
            </div>
            <div class="hidden h-full lg:flex items-center">
                <img
                    v-if="theme === 'light'"
                    src="@/assets/images/hero1_LIGHT.png"
                    alt="Developer"
                    class="lg:w-full"
                />
                <img
                    v-else
                    src="@/assets/images/hero1_LIGHT_darkmode.png"
                    alt="Developer"
                    class="lg:w-full"
                />
            </div>
        </div>
        <div
            class="w-full flex-1 lg:pl-6 lg:w-6/12 flex flex-col items-baseline h-full justify-start lg:justify-center lg:self-center mt-6 md:mt-12 lg:mt-0"
        >
            <template v-for="experience in experiences" :key="experience.id">
                <div
                    class="flex items-baseline w-full justify-between h-[110px] lg:h-[140px] border-t border-dark dark:border-secondary"
                >
                    <div class="hidden md:block my-auto w-[70px] md:w-[100px]">
                        <time
                            class="text-sm font-jiho-regular text-gray-500 dark:text-grey-light"
                            >{{ experience.date }}</time
                        >
                    </div>
                    <div class="my-auto flex-1 pr-4">
                        <h3
                            class="text-md lg:text-lg font-jiho-medium text-dark dark:text-white"
                        >
                            {{ experience.name }}
                        </h3>
                        <h5 class="mt-2 text-sm font-jiho-regular text-primary">
                            {{ experience.company }}
                        </h5>
                        <time
                            class="md:hidden text-sm font-jiho-regular text-gray-500 dark:text-grey-light"
                            >{{ experience.date }}</time
                        >
                    </div>
                    <div class="my-auto">
                        <button
                            type="button"
                            @click="openExperienceInfosPanel(experience)"
                            class="rounded-full p-2 text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                        >
                            <i
                                data-feather="plus-circle"
                                stroke-width="1.5"
                            ></i>
                        </button>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <transition
        name="panel-fade"
        ref="experienceInfosPanel"
        tabindex="-1"
        v-show="isExperienceInfosPanelOpen"
        @keydown.escape="closeExperienceInfosPanel()"
        class="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white dark:bg-dark shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
    >
        <div
            class="flex flex-col h-screen dark:border-l-2 dark:border-secondary"
        >
            <div
                class="flex tems-center justify-center px-4 py-6 border-b dark:border-secondary"
            >
                <h3
                    class="flex-1 text-md lg:text-lg font-jiho-medium text-primary"
                >
                    {{ currentExperience.name }}
                </h3>
                <button
                    @click="closeExperienceInfosPanel()"
                    class="flex-none text-primary ml-2"
                >
                    <i data-feather="x"></i>
                </button>
            </div>
            <div class="flex-1 overflow-y-auto pt-2 pb-6">
                <div class="px-6 py-2" v-if="currentExperience.description">
                    <h5
                        class="mt-2 font-jiho-regular text-md text-gray-500 dark:text-grey-light"
                    >
                        {{ currentExperience.description }}
                    </h5>
                </div>
                <div
                    v-if="currentExperience.duties"
                    class="px-6 py-2 font-jiho-medium text-primay-dark dark:text-white"
                >
                    {{ $t("experiences.duties") }}
                </div>
                <template
                    v-for="duty in currentExperience.duties"
                    :key="duty.id"
                >
                    <div
                        class="px-6 py-2 font-jiho-regular text-primay-dark dark:text-white"
                    >
                        {{ $t(duty) }}
                    </div>
                </template>
                <div
                    v-if="currentExperience.stacks"
                    class="px-6 py-2 font-jiho-medium text-primay-dark dark:text-white"
                >
                    {{ $t("experiences.stack") }}
                </div>
                <template
                    v-for="stack in currentExperience.stacks"
                    :key="stack.id"
                >
                    <div
                        class="px-6 py-2 font-jiho-regular text-primay-dark dark:text-white"
                    >
                        {{ stack }}
                    </div>
                </template>
            </div>
        </div>
    </transition>
</template>
<script>
import { getExperiences } from "../data/experiences";

export default {
    data() {
        return {
            theme: "",
            currentExperience: {},
            isExperienceInfosPanelOpen: false,
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    watch: {
        isExperienceInfosPanelOpen: function () {
            if (this.isExperienceInfosPanelOpen) {
                document.documentElement.style.overflow = "hidden";
                return;
            }

            document.documentElement.style.overflow = "auto";
        },
    },
    computed: {
        experiences() {
            return getExperiences().map((experiences) => ({
                ...experiences,
                name: this.$t(experiences.name),
                company: this.$t(experiences.company),
                date: this.$t(experiences.date),
            }));
        },
    },
    methods: {
        closeExperienceInfosPanel() {
            this.isExperienceInfosPanelOpen = false;
        },
        openExperienceInfosPanel(experience) {
            this.currentExperience = {
                ...experience,
                description: experience.description
                    ? this.$t(experience.description)
                    : "",
            };
            this.isExperienceInfosPanelOpen = true;
            this.$nextTick(() => {
                this.$refs.experienceInfosPanel.focus();
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.panel-fade-enter-active {
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.panel-fade-enter-from {
    transform: translateX(100%);
}
.panel-fade-enter-to {
    transform: translateX(0px);
}
.panel-fade-leave-active {
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.panel-fade-leave-from {
    transform: translateX(0px);
}
.panel-fade-leave-to {
    transform: translateX(100%);
}
</style>
