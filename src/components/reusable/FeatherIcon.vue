<template>
    <svg v-bind="attrs" v-html="contents"></svg>
</template>
<script>
import feather from "feather-icons";

export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        icon() {
            return feather.icons[this.name];
        },
        attrs() {
            return this.icon ? this.icon.attrs : {};
        },
        contents() {
            return this.icon ? this.icon.contents : "";
        },
    },
};
</script>
