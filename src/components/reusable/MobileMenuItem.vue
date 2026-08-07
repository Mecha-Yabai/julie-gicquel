<template>
    <div class="flex flex-col items-center text-white">
        <FeatherIcon :name="selectedIcon" class="w-5 lg:w-16" />
        <span class="font-jiho-medium">
            <slot></slot>
        </span>
    </div>
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
    },
};
</script>
