<template>
    <div class="menu">
        <span
            class="font-jiho-medium hover:text-red-600 dark:text-white dark:hover:text-primary links"
        >
            <slot></slot>
        </span>
    </div>
</template>

<style scoped>
.menu .links {
    position: relative;
    display: block;
    transition: 0.5s;
}

.menu .links::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--color-red-600);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
}

.dark .menu .links::after {
    background: var(--color-primary);
}

.menu .links:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}
</style>
