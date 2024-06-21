<template>
  <!--Search Form -->
  <section class="dark-gray-gradient h-28 min-h-28 md:h-436 md:min-h-36">
    <div class="relative container py-4 md:pt-10 md:pb-6">
      <BaseEllipse
        className="hidden md:block md:w-[200px] md:h-[152px] z-1 top-0 bottom-[-13px] left-[294px]"
      />
      <BaseForm
        className="rounded-lg bg-secondary flex p-4 gap-x-3"
        @submit="$emit('submit')"
      >
        <BaseInput
          :value="searchQuery"
          @input="$emit('input', $event)"
          type="text"
          color="primary-surface"
          className="relative z-2 w-full px-3"
          placeholder="Search for characters..."
        />

        <BaseButton
          typeBtn="submit"
          color="primary"
          className="w-12 min-w-12 h-12 md:w-24 md:min-w-24 flex justify-center items-center"
        >
          <BaseIcon icon="iconsearchNormal" />
          <span class="hidden md:block ml-2">Search</span>
        </BaseButton>
      </BaseForm>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
