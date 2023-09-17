<template>
    <a
        :download="download"
        :href="link"
        class="flex justify-center items-center px-4 w-full py-3 rounded-lg duration-500"
        :aria-label="CV"
    >
        <span class="text-sm sm:text-md font-jiho-medium duration-100">
            <slot></slot>
        </span>
        <i :data-feather="selectedIcon" class="ml-2 w-5 duration-100"></i>
    </a>
</template>
<script>
export default {
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
        label: {
            type: String,
            required: false,
        },
    },
};
</script>
