<template>
  <div class="bg-secondary-surface h-screen">
    <div class="container py-44">
      <h1
        class="text-white text-3xl text-center"
        v-if="error.statusCode === 404"
      >
        Page not found
      </h1>
      <h1 class="text-white text-3xl text-center" v-else>
        An error occurred - {{ error.statusCode }}
      </h1>
      <NuxtLink class="block w-32 mx-auto my-4 p-3 text-white" to="/"
        >Go back home</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
  head() {
    let title = "Error Page";
    if (this.error.statusCode === 404) {
      title = "Page Not Found";
    } else {
      title = `Error ${this.error.statusCode}`;
    }
    return {
      title: title,
      meta: [
        {
          content: "This is an error page",
        },
      ],
    };
  },
};
</script>
