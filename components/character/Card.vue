<template>
  <figure class="w-full md:w-1/4 pb-4">
    <!-- Nuxt link for client-side navigation -->
    <!-- <nuxt-link :to="`/character/${id}`"></nuxt-link> -->
    <!-- Replace Nuxt link with a standard anchor tag for SSR -->
    <a :href="`/character/${id}`">
      <div
        class="p-4 border-transparent rounded-2xl hover:border hover:border-gray hover:rounded-2xl hover:transition-all hover:duration-300"
      >
        <BaseImage
          className="w-full rounded-lg"
          :src="src"
          :size="size"
          :format="format"
          :alt="name"
        />
        <figcaption class="text-white text-base leading-normal pt-4">
          {{ name }}
        </figcaption>
      </div>
    </a>
  </figure>
</template>
<script>
export default {
  name: "CharacterCard",
  props: {
    id: {
      type: Number,
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
    name: {
      type: String,
      default: "",
    },
  },
};
</script>
