<script setup>
import { ref } from 'vue';
import { SERVICES } from '@/data_consts.js';
import ServiceItem from '@/components/ServiceItem.vue';

const SERVICES_data = ref(SERVICES);
const SERVICES_INFO = SERVICES_data.value[0];
const sectionTitle = SERVICES_INFO.section_name;

const sectionSubTitle = SERVICES_INFO.title;
const sectiondescription = SERVICES_INFO.description;
const servisesList = SERVICES_INFO.services_list;
</script>

<template>
  <header class="section__header">
    <span class="subtitle section__subtitle">{{ sectionSubTitle }}</span>
    <h2 class="title section__title">{{ sectionTitle }}</h2>
    <div class="section__description">
      <p class="text">{{ sectiondescription }}</p>
    </div>
  </header>
  <div class="service__wrapper">
    <ul class="service__list">
      <li class="service__item" v-for="servise_item in servisesList">
        <ServiceItem :key="servise_item.id" :serviceData="servise_item" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.section {
  &__header {
    display: grid;
    margin-bottom: 20px;
    @media (min-width: $md) {
      grid-auto-flow: column;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 25px 95px;
      grid-template-areas:
        'subtitle description'
        'title description';
    }
  }
  &__subtitle {
    justify-self: start;
    @media (min-width: $md) {
      grid-area: subtitle;
    }
  }
  &__title {
    margin-bottom: 20px;
    @media (min-width: $md) {
      grid-area: title;
      margin-bottom: 0;
    }
  }
  &__description {
    @media (min-width: $md) {
      grid-area: description;
    }
  }
}

.service {
  &__wrapper {
    background-image: url('@/assets/images/assets.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    @media (min-width: $md) {
      background-image: none;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(290px, 1fr));
    list-style: none;
    gap: 20px;
    @media (min-width: $md) {
      grid-template-columns: repeat(auto-fit, minmax(max(380px, 30%), 1fr));
    }
  }
}
</style>
