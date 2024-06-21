<template>
  <div>
    <CharacterSection v-if="character" :character="character" />
    <CharacterCategory v-if="comics" title="Comics" :items="comics" />
    <CharacterCategory v-if="series" title="Series" :items="series" />
  </div>
</template>

<script>
export default {
  // Fetch data server-side
  async asyncData({ params, $axios }) {
    try {
      const { id } = params;
      const characterEndpoint = `https://gateway.marvel.com/v1/public/characters/${id}`;
      const comicsEndpoint = `https://gateway.marvel.com/v1/public/characters/${id}/comics`;
      const seriesEndpoint = `https://gateway.marvel.com/v1/public/characters/${id}/series`;

      
      const [characterRes, comicsRes, seriesRes] = await Promise.all([
        $axios.get(characterEndpoint),
        $axios.get(comicsEndpoint),
        $axios.get(seriesEndpoint)
      ]);

      // Extract the data from the responses
      const character = characterRes.data.data.results[0];
      const comics = comicsRes.data.data.results;
      const series = seriesRes.data.data.results;

      return { character, comics, series };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { character: null, comics: null, series: null };
    }
  },
  head() {
    return {
      title: this.character ? this.character.name : "Marvel Character",
    };
  },
};
</script>