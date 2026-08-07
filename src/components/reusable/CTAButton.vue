<template>
    <a
        :download="download"
        :href="link"
        class="flex justify-center items-center px-4 w-full py-3 rounded-lg transition-colors duration-300"
    >
        <span
            class="text-sm sm:text-md font-jiho-medium transition-colors duration-300"
        >
            <slot></slot>
        </span>
        <FeatherIcon
            :name="selectedIcon"
            class="ml-2 w-5 transition-colors duration-300"
        />
    </a>
</template>
<script>
import FeatherIcon from "./FeatherIcon.vue";

export default {
    components: { FeatherIcon },
    props: {
        selectedIcon: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        download: {
            type: String,
            required: false,
        },
    },
};
</script>
