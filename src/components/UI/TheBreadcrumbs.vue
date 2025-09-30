<script setup>
import { RouterLink } from 'vue-router';
import SvgIcon from '../base_components/SvgIcon.vue';
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
});

</script>
<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li v-for="item in props.breadcrumbs" class="breadcrumbs__list-item">
        <RouterLink v-if="item.hasOwnProperty('link')" class="link breadcrumbs__link" :to="item.link">
          <span class="breadcrumbs__link-text">{{ $t(item.label) }}</span>
          <SvgIcon class="icon icon--small" name="chevron-right"/>
        </RouterLink>
        <span v-else class="breadcrumbs__text">{{ $t(item.label) }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  justify-content: center;
  padding: 10px;

  &__list {
    display: flex;
    list-style: none;
  }
  &__link,
  &__text {
    display: flex;
    align-items: center;
  }
  &__link {
    padding: 8px 5px 8px 5px;
    
    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &-text {
      margin-right: 10px;
    }
  }
  &__text {
    padding: 8px 15px 8px 5px;
  }
}

</style>