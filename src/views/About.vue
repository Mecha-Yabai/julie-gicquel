<template>
    <div
        class="container mx-auto px-4 sm:px-16 block sm:flex sm:gap-10 mt-28 sm:mt-32 md-mt-48"
    >
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img
                src="@/assets/images/JG.png"
                class="rounded-xl w-72 mx-auto sm:mx-none"
                alt="Julie Gicquel"
            />
        </div>

        <div
            class="w-full sm:w-3/4 text-left md:flex md:flex-col md:justify-center"
        >
            <p
                v-for="bio in bios"
                :key="bio.id"
                class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            >
                {{ bio.bio }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        bios() {
            return [
                {
                    id: 1,
                    bio: this.$t("about_me_1"),
                },
                {
                    id: 2,
                    bio: this.$t("about_me_2"),
                },
                {
                    id: 3,
                    bio: this.$t("about_me_3"),
                },
                {
                    id: 4,
                    bio: this.$t("about_me_4"),
                },
                {
                    id: 5,
                    bio: this.$t("about_me_5"),
                },
            ];
        },
    },
};
</script>
