<template>
    <TooltipWrapper
        v-for="social in socials"
        :key="social.id"
        :label="$t('social_profile', { name: social.name })"
    >
        <a
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('social_profile', { name: social.name })"
            class="rounded-full h-11 w-11 sm:h-12 sm:w-12 inline-flex items-center justify-center mx-2 bg-white dark:bg-secondary dark:hover:bg-secondary-darker border-dark dark:border-secondary dark:hover:border-secondary-darker border-2 hover:bg-dark text-dark dark:text-white dark:hover:text-primary hover:text-white text-center"
        >
            <FeatherIcon :name="social.icon" class="w-5 lg:w-16" />
        </a>
    </TooltipWrapper>
</template>
<script>
import FeatherIcon from "./FeatherIcon.vue";
import TooltipWrapper from "./TooltipWrapper.vue";
import { socials } from "../../data/socials";

export default {
    components: { FeatherIcon, TooltipWrapper },
    data() {
        return {
            socials,
        };
    },
};
</script>
