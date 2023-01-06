<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-jiho-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      <span
        class="font-jiho-medium text-secondary-dark dark:text-secondary-light hover:text-red-500 dark:hover:text-red-dark duration-500"
      >
        {{ projectName }}
      </span>
      . Developed by
      <a
        :href="`mailto:${mail}`"
        class="font-jiho-medium text-secondary-dark dark:text-secondary-light uppercase hover:text-red-500 dark:hover:text-red-dark duration-500"
        >{{ author }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mail: String,
  },
  data() {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "Mecha Yabai©",
      author: "Julie Gicquel",
    };
  },
};
</script>
