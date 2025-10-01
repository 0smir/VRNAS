<script setup>
const props = defineProps({
  serviceData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="service-item service-item__panel">
    <div class="service-item__img-wrapper">
      <SvgIcon class="icon" :name="serviceData.icon" iconType="services" />
    </div>
    <h3 class="title service-item__title">{{ serviceData.title }}</h3>
    <div class="description-wrapper service-item__description-wrapper">
      <p class="description service-item__description">{{ serviceData.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-item {
  &__panel {
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-image: $border_gray_gradient;
    background-color: rgba($black_50, 0.6);
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow: hidden;

    &:hover,
    &:focus {
      border-image: $border_with_gradient;
    }
    @media (min-width: $md) {
      padding: 40px;
    }
  }

  &__img-wrapper {
    width: 48px;
    height: 48px;
    margin-bottom: 60px;
    & > .icon {
      width: 48px;
      height: 48px;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  &__description {
    line-height: 2;
    font-size: 14px;
  }
}
</style>
