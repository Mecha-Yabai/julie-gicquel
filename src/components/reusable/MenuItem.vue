<template>
    <div class="menu">
        <span
            class="font-jiho-medium hover:text-red-600 dark:text-white dark:hover:text-primary links"
        >
            <slot></slot>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.menu {
    .links {
        position: relative;
        display: block;
        transition: 0.5s;

        &::after {
            position: absolute;
            content: "";
            top: 100%;
            left: 0;
            width: 100%;
            height: 3px;
            background: theme("colors.red.600");
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s;
        }

        @media (prefers-color-scheme: dark) {
            &::after {
                background: theme("colors.primary");
            }
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
}
</style>
