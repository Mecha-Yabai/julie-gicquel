<template>
    <div
        class="flex flex-col lg:flex-row lg:items-center justify-center inherit-height"
    >
        <div
            class="w-full flex flex-col flex-1 justify-center lg:w-6/12 h-2/3 sm:h-1/2 md:h-2/5 lg:h-fit lg:text-left lg:pr-6"
        >
            <h1
                class="h-1/4 md:h-1/3 lg:h-fit my-4 font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-dark dark:text-grey-lighter"
            >
                {{ $t("skills.title_1") }}
                <span class="text-red-500 dark:text-primary">{{
                    $t("skills.title_2")
                }}</span
                >,<br />
                {{ $t("skills.title_3") }}
                <span class="text-red-500 dark:text-primary">{{
                    $t("skills.title_4")
                }}</span
                >.
            </h1>
            <div
                class="h-2/4 md:h-2/3 lg:h-fit space-y-4 my-4"
            >
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("skills.description_1") }}
                </p>
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("skills.description_2") }}
                </p>
                <p
                    class="text-center lg:text-left font-jiho-regular text-lg lg:text-xl text-gray-500 dark:text-grey-light"
                >
                    {{ $t("skills.description_3") }}
                </p>
            </div>
        </div>

        <div
            class="justify-start w-full lg:w-6/12 lg:pl-6 h-1/3 sm:h-1/2 md:h-3/5 flex flex-col flex-1"
        >
            <div
                v-for="(skill, id) in generalSkills"
                :key="id"
                class="h-24 md:h-32 lg:h-40"
            >
                <hr class="dark:border-secondary" />
                <div class="flex min-h-full items-center">
                    <p
                        class="mr-4 text-xl sm:text-2xl lg:text-3xl text-red-500 dark:text-primary font-jiho-regular whitespace-nowrap"
                    >
                        {{ skill.id }} /
                    </p>
                    <h1
                        class="text-left text-xl sm:text-2xl lg:text-3xl font-jiho-medium text-dark dark:text-grey-lighter"
                    >
                        {{ skill.title }}
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
        generalSkills() {
            return [
                { id: 1, title: this.$t("skills.web_development") },
                { id: 2, title: this.$t("skills.ui_ux_design") },
                { id: 3, title: this.$t("skills.web_marketing") },
            ];
        },
    },
};
</script>
<style lang="css">
hr {
    height: 2px;
    color: #404040;
}
.inherit-height {
    min-height: inherit;
}
</style>
