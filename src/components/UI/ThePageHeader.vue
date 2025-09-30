<script setup>

const props = defineProps({
  pageTitle: {
    type: String,
    required: false
  }
})
</script>

<template>
  <header class="page__header">
    <div v-if="pageTitle" class="container page__header-container">
      <h1 class="h1 title title page__title">{{ pageTitle }}</h1>
    </div>
    <slot />
  </header>
</template>



<style lang="scss" scoped>

</style>