<template>
  <div :class="ellipseClasses">
  </div>
</template>

<script>
export default {
  name: "BaseEllipse",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    ellipseClasses() {
      return ["absolute", "ellipse", this.className].filter(Boolean).join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
.ellipse {
    fill: rgba(220, 38, 38, 0.32);
    filter: blur(80px);
    background-color: rgba(220, 38, 38, 0.32); 
}
</style>
