<template>
  <button type="typeBtn" :class="buttonClasses" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    color: {
      type: String,
      default: "bg-primary",
    },
    typeBtn: {
      type: String,
      default: "button",
    },
    className: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      const classes = [
        "text-white",
        "text-sm",
        "rounded",
        `bg-${this.color}`,
        this.className,
      ];
      if (this.disabled) {
        classes.push("pointer-events-none");
      }
      return classes.filter(Boolean).join(" ");
    },
  },
};
</script>

<style lang="scss" scoped></style>
