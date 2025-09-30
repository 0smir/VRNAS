<script setup>

const props = defineProps({
  pageTitle: {
    type: String,
    required: false
  }
})
</script>

<template>
  <header class="page__header highlighted">
    <div v-if="pageTitle" class="container page__header-container">
      <h1 class="h1 title title page__title">{{ pageTitle }}</h1>
    </div>
    <slot />
  </header>
</template>



<style lang="scss" scoped>
  .page__header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: min(400px, 40dvh);
    border-bottom: 1px solid;
    border-image: $border_with_gradient;
    margin-bottom: 40px;
  }
  .page__title{
    text-align: center;
  }
  .highlighted{
    &::after {
      position: absolute;
      content: '';  
      display: block;
      inset: 0;
      z-index: -1;
      filter: blur(20px);
      background-image: url('@/assets/images/light_bg.png'),  url('@/assets/images/light_bg.png');
      background-repeat: no-repeat no-repeat;
      background-position:  50% 100%,  50% 0%;
      background-size: contain, contain;
    }
  }
</style>