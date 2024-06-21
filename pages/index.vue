<template>
  <div>
    <!-- Search Form -->
    <SearchForm
      :searchQuery="searchQuery"
      @input="handleSearchInput"
      @submit="handleFormSubmit"
    />
    <!-- Marvel character List -->
    <section class="bg-secondary-surface">
      <CharacterList :loading="loading" :displayedCharacters="characters" />
      <!-- Pagination -->
      <pagination
        v-if="characters.length > 0"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="goToPage"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  head() {
    return {
      title: "Marvel characters",
    };
  },
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get(
        "https://gateway.marvel.com/v1/public/characters?limit=12&offset=0"
      );
      return {
        characters: data.data.results,
        totalPages: Math.ceil(data.data.total / 12),
      };
    } catch (error) {
      console.error("Error fetching characters:", error);
      return { characters: [], totalPages: 0 };
    }
  },
  data() {
    return {
      loading: true,
      searchQuery: "",
      debounceTimer: null,
      currentPage: 1,
      charactersPerPage: 12, // Number of characters to display per page
    };
  },
  watch: {
    currentPage() {
      this.loading = true;
      this.handleFormSubmit();
    },
    totalPages(val) {
      if (val < this.currentPage) this.currentPage = 1;
    },
  },
  methods: {
    async handleFormSubmit() {
      try {
        const { data } = await this.$axios.get(
          `https://gateway.marvel.com/v1/public/characters?offset=${
            (this.currentPage - 1) * 12
          }&limit=12${
            this.searchQuery && "&nameStartsWith=" + this.searchQuery
          }`
        );
        this.characters = data.data.results;
        this.totalPages = Math.ceil(data.data.total / 12);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        this.loading = false;
      }
    },
    handleSearchInput(value) {
      this.searchQuery = value;
      this.loading = true;
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.handleFormSubmit();
      }, 300);
    },
    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages)
        this.currentPage = pageNumber;
    },
  },
  mounted() {
    this.loading = false;
  },
};
</script>
