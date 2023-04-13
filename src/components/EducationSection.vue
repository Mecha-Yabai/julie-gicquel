<template>
    <div class="flex flex-col lg:justify-between lg:flex-row inherit-height">
        <div class="w-full lg:pr-8 lg:w-6/12 xl:pl-0 xl:w-5/12 flex flex-col">
            <h1
                class="font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-primary-dark dark:text-primary-light my-4"
            >
                {{ $t("education.title_1") }}
                <span class="text-red-500 dark:text-red-dark">{{
                    $t("education.title_2")
                }}</span>
                {{ $t("education.title_3") }}
            </h1>
            <div class="space-y-4 lg:space-y-6 xl:space-y-8 my-4">
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
                >
                    {{ $t("education.description_1") }}
                </p>
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl leading-none text-gray-500 dark:text-ternary-light"
                >
                    {{ $t("education.description_2") }}
                </p>
            </div>
            <div class="hidden h-full lg:flex items-center">
                <img
                    v-if="theme === 'light'"
                    src="@/assets/images/hero3.png"
                    alt="Developer"
                    class="lg:w-full"
                />
                <img
                    v-else
                    src="@/assets/images/heroJG_v3_BW.png"
                    alt="Developer"
                    class="lg:w-full"
                />
            </div>
        </div>
        <div
            class="w-full lg:pt-10 lg:w-7/12 flex flex-col items-baseline h-full justify-center lg:justify-end lg:items-end mt-6 lg:mt-0"
        >
            <ol
                class="relative border-l border-primary-dark dark:border-ternary-light"
            >
                <template v-for="formation in formations" :key="formation.id">
                    <li class="mb-3 lg:mb-4 ml-4">
                        <div
                            class="absolute w-3 h-3 bg-primary-dark rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-dark dark:bg-blue-dark"
                        ></div>
                        <time
                            class="text-sm font-jiho-regular leading-none text-gray-500 dark:text-ternary-light"
                            >{{ formation.date }}</time
                        >
                        <h3
                            class="lg:mt-1 text-md xl:text-lg font-jiho-medium text-primay-dark dark:text-white"
                        >
                            {{ formation.name }}
                        </h3>
                        <h5
                            class="lg:mt-1 text-sm font-jiho-regular text-primay-dark dark:text-red-dark"
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
