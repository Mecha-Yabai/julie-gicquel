<template>
    <div class="flex justify-center items-center text-center mb-4">
        <div
            class="font-jiho-regular text-lg text-grey-dark dark:text-grey-light"
        >
            <a
                href="https://github.com/Mecha-Yabai"
                target="__blank"
                class="mr-1 font-jiho-medium text-grey-darker dark:text-white hover:text-red-500 dark:hover:text-primary duration-500"
            >
                {{ projectName }}
            </a>
            <span>{{ copyrightDate }}</span>
            <br />
            <div v-if="$i18n.locale === 'ja'">
                <a
                    :href="`mailto:${mail}`"
                    class="font-jiho-medium text-grey-darker dark:text-white uppercase hover:text-red-500 dark:hover:text-primary duration-500"
                    >{{ author }}
                </a>
                <span>{{ $t("footer.developed_by") }}</span>
            </div>
            <div v-else>
                <span class="mr-1">{{ $t("footer.developed_by") }}</span>
                <a
                    :href="`mailto:${mail}`"
                    class="font-jiho-medium text-grey-darker dark:text-white uppercase hover:text-red-500 dark:hover:text-primary duration-500"
                    >{{ author }}.
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        mail: String,
    },
    data() {
        return {
            copyrightDate: new Date().getFullYear(),
            projectName: "Mecha Yabai©",
            author: "Julie Gicquel",
        };
    },
};
</script>
