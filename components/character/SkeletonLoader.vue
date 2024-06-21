<template>
  <figure class="w-full md:w-1/4 pb-4">
    <div class="animate-pulse p-4 border-transparent rounded-2xl">
      <BaseImage className="w-full" src="" alt="SkeletonLoader" />
      <figcaption class="bg-gray mt-4 w-2/3 h-4 rounded"></figcaption>
    </div>
  </figure>
</template>
<script>
export default {
  name: "CharacterSkeletonLoader",
};
</script>
<style lang="scss" scoped>
.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.4;
  }
}
</style>
