<template>
  <div class="pagination container">
    <div class="flex justify-center items-center gap-2">
      <div v-for="button in buttons">
        <span :key="button.key">
          <span v-if="button.isDots" class="text-white">...</span>
          <BaseButton
            v-else
            type="button"
            class="w-6 h-6 rounded-full flex justify-center items-center"
            @click="$emit('page-change', button.value)"
            :color="
              currentPage === button.value && !button.isComponent
                ? 'primary'
                : ''
            "
          >
            <template v-slot:default>
              <component
                v-if="button.isComponent"
                :is="button.text"
                :class="button.class"
              ></component>
              <template v-else>
                {{ button.text }}
              </template>
            </template>
          </BaseButton>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  components: {
    BaseIcon: () => import("~/components/base/Icon.vue"),
  },

  computed: {
    buttons() {
      const buttons = [
        {
          key: "first",
          text: "BaseIcon",
          class: "iconchevronLeftDuo text-1xl",
          isComponent: true,
          value: 1,
        },
        {
          key: "prev",
          text: "BaseIcon",
          class: "iconchevronLeftMD text-1xl",
          isComponent: true,
          value: this.currentPage - 1,
        },
      ];
      if (this.currentPage > 3) {
        buttons.push({
          key: "beforeDots",
          text: "...",
          value: "",
          isComponent: false,
          isDots: true,
        });
      }
      for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
        if (i > 0 && i <= this.totalPages)
          buttons.push({
            key: i,
            text: i,
            class: "",
            isComponent: false,
            value: i,
          });
      }
      if (this.totalPages - this.currentPage > 2) {
        buttons.push({
          key: "afterDots",
          text: "...",
          value: "",
          isComponent: false,
          isDots: true,
        });
      }
      buttons.push({
        key: "next",
        text: "BaseIcon",
        class: "iconchevronRightMD text-1xl",
        isComponent: true,
        value: this.currentPage + 1,
      });
      buttons.push({
        key: "last",
        text: "BaseIcon",
        class: "iconchevronRightDuo text-1xl",
        isComponent: true,
        value: this.totalPages,
      });

      return buttons;
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.$emit("page-change", pageNumber);
    },
  },
};
</script>

<style scoped></style>
