<template>
  <div class="container py-8 md:py-14">
    <div v-if="loading">
      <div class="flex flex-wrap">
        <CharacterSkeletonLoader v-for="n in 12" :key="n" />
      </div>
    </div>
    <div v-else>
      <div v-if="displayedCharacters.length > 0" class="flex flex-wrap">
        <CharacterCard
          v-for="(character, index) in displayedCharacters"
          :key="index"
          :id="character.id"
          :src="character.thumbnail.path"
          size="portrait_incredible"
          :format="character.thumbnail.extension"
          :name="character.name"
        />
      </div>
      <div class="h-screen" v-else>
        <BaseAlert
          className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg  dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        >
          No results found
        </BaseAlert>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterList",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    displayedCharacters: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
