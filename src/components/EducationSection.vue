<template>
    <div class="flex flex-col lg:justify-between lg:flex-row inherit-height">
        <div class="w-full lg:pr-6 lg:w-6/12 flex flex-col">
            <h1
                class="font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-dark dark:text-grey-lighter my-4"
            >
                {{ $t("education.title_1") }}
                <span class="text-red-500 dark:text-primary">{{
                    $t("education.title_2")
                }}</span>
                {{ $t("education.title_3") }}
            </h1>
            <div class="space-y-4 my-4">
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("education.description_1") }}
                </p>
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("education.description_2") }}
                </p>
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("education.description_3") }}
                </p>
            </div>
            <div class="hidden h-full lg:flex items-center">
                <img
                    v-if="theme === 'light'"
                    src="@/assets/images/hero2_LIGHT.png"
                    alt="Developer"
                    class="lg:w-full"
                />
                <img
                    v-else
                    src="@/assets/images/hero2_LIGHT_darkmode.png"
                    alt="Developer"
                    class="lg:w-full"
                />
            </div>
        </div>
        <div
            class="w-full lg:pt-10 lg:pl-6 lg:w-6/12 flex flex-col items-baseline h-full justify-center lg:justify-end lg:items-end mt-6 lg:mt-0"
        >
            <ol class="relative border-l border-dark dark:border-grey-light">
                <template v-for="formation in formations" :key="formation.id">
                    <li class="mb-3 lg:mb-4 ml-4">
                        <div
                            class="absolute w-3 h-3 bg-dark rounded-full mt-1.5 -left-1.5 dark:bg-white"
                        ></div>
                        <time
                            class="text-sm font-jiho-regular text-gray-500 dark:text-grey-light"
                            >{{ formation.date }}</time
                        >
                        <h3
                            class="text-md xl:text-lg font-jiho-medium text-primay-dark dark:text-white"
                        >
                            {{ formation.name }}
                        </h3>
                        <h5
                            class="text-sm font-jiho-regular text-primay-dark dark:text-primary"
                        >
                            {{ formation.school }}
                        </h5>
                    </li>
                </template>
            </ol>
        </div>
    </div>
</template>
<script>
import { getFormations } from "../data/formations";

export default {
    data() {
        return {
            theme: "",
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    computed: {
        formations() {
            return getFormations().map((formations) => ({
                ...formations,
                name: this.$t(formations.name),
                school: this.$t(formations.school),
                date: this.$t(formations.date),
            }));
        },
    },
};
</script>
