<template>
    <span
        class="flex flex-col items-center justify-center gap-1 px-2 py-1 text-white transition-[transform,opacity] duration-150 active:scale-90"
        :class="active ? 'opacity-100' : 'opacity-75 dark:opacity-65'"
    >
        <FeatherIcon
            :name="selectedIcon"
            class="w-6 h-6 transition-transform duration-200"
            :class="active ? 'scale-110' : 'scale-100'"
        />
        <span
            class="text-[11px] leading-none tracking-wide"
            :class="active ? 'font-jiho-bold' : 'font-jiho-medium'"
        >
            <slot></slot>
        </span>
        <span
            class="h-0.75 w-5 rounded-full bg-white transition-opacity duration-200"
            :class="active ? 'opacity-100' : 'opacity-0'"
        ></span>
    </span>
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
        active: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
