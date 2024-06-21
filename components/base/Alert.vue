<template>
  <div :class="alertClasses" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    alertClasses() {
      return [this.className].filter(Boolean).join(" ");
    },
  },
};
</script>

<style lang="scss" scoped></style>
