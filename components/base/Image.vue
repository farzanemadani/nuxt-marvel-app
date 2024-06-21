<template>
  <nuxt-img
    :class="imageClasses"
    :src="generateImageUrl"
    :alt="alt"
    loading="lazy"
    placeholder
  />
</template>

<script>
export default {
  name: "BaseImage",
  props: {
    className: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    format: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
  computed: {
    imageClasses() {
      return [this.className].filter(Boolean).join(" ");
    },
    generateImageUrl() {
      const defaultImg = "/defaultImg.png";
      const url = this.src
        ? `${this.src}/${this.size}.${this.format}`
        : defaultImg;
      return url;
    },
  },
};
</script>

<style lang="scss" scoped></style>
