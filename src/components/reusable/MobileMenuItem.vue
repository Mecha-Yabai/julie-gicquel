<template>
    <div class="flex flex-col items-center text-white">
        <i :data-feather="selectedIcon" class="w-5 lg:w-16"></i>
        <span class="font-jiho-medium">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        selectedIcon: {
            type: String,
            required: true,
        },
    },
};
</script>
