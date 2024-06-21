<template>
  <article class="dark-gray-gradient pt-10 md:pt-[72px]">
    <div class="container">
      <div class="pb-8 md:pb-16 md:flex md:gap-x-12">
        <figure class="flex relative">
          <div
            class="relative z-3 w-[180px] min-w-[180px] md:w-[240px] md:min-w-[240px]"
          >
            <BaseImage
              className="w-full rounded-lg"
              :src="character?.thumbnail.path"
              size="standard_fantastic"
              :format="character?.thumbnail.extension"
              :alt="character.name"
            />
          </div>
          <BaseEllipse
            class="block w-[200px] h-[152px] z-1 bottom-[-10%] left-[-10%] md:left-[50%] md:bottom-[50%]"
          />
        </figure>
        <section>
          <h1
            v-if="character.name"
            class="text-white text-2xl md:text-3xl font-medium py-4"
          >
            {{ character.name }}
          </h1>
          <p
            v-if="character.description"
            class="text-white text-xs md:text-sm font-normal pb-4"
          >
            {{ character.description }}
          </p>
          <nav class="mx-0 flex items-center gap-x-3">
            <a
              class="flex justify-center items-center text-xs md:text-sm py-2 px-4 rounded border border-gray-300 text-white"
              v-for="(url, index) in urls"
              :key="index"
              :href="url.url"
              target="_blank"
            >
              <BaseIcon className="mr-2" icon="iconexport" />{{ url.type }}
            </a>
          </nav>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CharacterSection",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  computed: {
    urls() {
      return this.character.urls;
    },
  },
};
</script>
