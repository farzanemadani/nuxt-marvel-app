<template>
  <i :class="iconClasses"></i>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: {
      type: String,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClasses() {
      return [
        "text-white",
        this.icon,
        this.className,
      ]
        .filter(Boolean)
        .join(" ");
    },
  },
};
</script>

<style lang="scss" scoped></style>
