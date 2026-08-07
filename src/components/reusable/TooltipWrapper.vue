<template>
    <span class="tooltip" :data-tooltip="label">
        <slot></slot>
    </span>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
.tooltip {
    position: relative;
    display: inline-flex;
}

.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    translate: -50% 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    background: var(--color-dark);
    color: #fff;
    font-size: 0.75rem;
    line-height: 1.2;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition:
        opacity 150ms ease,
        translate 150ms ease;
    z-index: 30;
}

.dark .tooltip::after {
    background: var(--color-secondary);
}

.tooltip:hover::after,
.tooltip:has(:focus-visible)::after {
    opacity: 1;
    translate: -50% 0;
}

@media (prefers-reduced-motion: reduce) {
    .tooltip::after {
        transition: none;
    }
}
</style>
