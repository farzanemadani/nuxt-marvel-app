<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="inputClasses"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "bg-primary-surface",
    },
    type: {
      type: String,
      default: "text",
    },
    className: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputClasses() {
      return [
        "text-white",
        "text-sm",
        "not-italic",
        "font-normal",
        "rounded",
        "focus:outline-none",
        "placeholder-white",
        `bg-${this.color}`,
        this.className,
      ]
        .filter(Boolean)
        .join(" ");
    },
  },
};
</script>

<style lang="scss" scoped></style>
