<template>
    <form :class="formClasses" @submit.prevent="handleSubmit">
      <slot></slot>
    </form>
  </template>
  
  <script>
  export default {
    name: "BaseForm",
    props: {
      className: {
        type: String,
        default: ""
      }
    },
    computed: {
      formClasses() {
        return [
          this.className
        ].filter(Boolean).join(" ");
      }
    },
    methods: {
      handleSubmit() {
        this.$emit("submit");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>