<script setup>
import { RouterLink } from 'vue-router';
import BaseButton from './base_components/BaseButton.vue';

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
    <div class="service-item__overlay">
      <RouterLink class="btn btn-primary btn-primary--outline service-item__link" to="/"
        >Learn more</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-item {
  &__panel {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-image: $border_gray_gradient;
    background-color: rgba($black_50, 0.6);
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow: hidden;
    transition: border-image 0.05s 0.35s ease;

    &:hover,
    &:focus {
      border-image: $border_with_gradient;
      transition: border-image 0.5s 0.35s ease;
      .service-item__overlay {
        transform: translateY(0);
        transition: transform 0.05s 0.35s ease;
      }
      .service-item__link {
        opacity: 1;
        transition: opacity 0.09s 0.5s ease;
      }
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
  &__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transform: translateY(9999px);
    background-image: $gradient_gray;
    transition: transform 0.05s 0.7s ease;

    @media (min-width: $md) {
      padding: 40px;
    }
  }
  &__link {
    opacity: 0;
    transition: opacity 0.09s 0.5s ease;
  }
}
</style>
