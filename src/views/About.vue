<template>
    <div class="container mx-auto px-4 sm:px-16 mt-28 sm:mt-32 md:mt-38">
        <h1
            class="font-jiho-medium lg:text-5xl sm:text-4xl text-3xl text-center lg:text-left text-dark dark:text-grey-lighter my-4"
        >
            {{ $t("about_me_title") }}
        </h1>
        <div class="flex flex-col lg:flex-row lg:items-center">
            <div class="w-full lg:w-1/5 my-5 lg:my-0 lg:mr-6">
                <img
                    src="@/assets/images/JG.png"
                    class="rounded-xl lg:w-72 md:w-56 w-48 mx-auto sm:mx-none"
                    alt="Julie Gicquel"
                />
            </div>

            <div class="lg:w-4/5 lg:ml-6 text-justify space-y-4">
                <p
                    v-for="bio in bios"
                    :key="bio.id"
                    class="font-general-regular text-grey-dark dark:text-grey-light text-lg"
                >
                    {{ bio.bio }}
                </p>
            </div>
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
