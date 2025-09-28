<script setup>
import { useI18n } from 'vue-i18n';
import BaseButton from './BaseButton.vue';

// access i18n instance
const { locale } = useI18n({ useScope: 'global' });

function changeLocale(lang) {
  locale.value = lang;
}
const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'de' : 'en';
};
</script>

<template>
  <div class="locale-switcher">
    <BaseButton
      class="btn btn-primary btn-primary--filled locale-switcher__btn"
      v-if="locale === 'de'"
      @click="changeLocale('en')"
      >English</BaseButton
    >
    <BaseButton
      class="btn btn-primary btn-primary--filled locale-switcher__btn"
      v-else
      @click="changeLocale('de')"
    >
      Deutsch
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.locale-switcher {
  &__btn {
  }
}
</style>
