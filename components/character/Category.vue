<template>
  <section class="bg-secondary-surface">
    <div class="container">
      <h2
        class="text-white text-lg md:text-2xl font-semibold pt-8 pb-4 md:pt-16 md:pb-6"
      >
        {{ title }}
      </h2>
      <div v-if="items.length > 0" class="flex flex-wrap">
        <CharacterCard
          v-for="(item, index) in items"
          :key="index"
          :id="item.id"
          :src="item.thumbnail.path"
          size="portrait_incredible"
          :format="item.thumbnail.extension"
          :name="item.title"
        />
      </div>
      <div v-else class="h-screen">
        <BaseAlert
          class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        >
          No results found
        </BaseAlert>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CharacterCategory",
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
