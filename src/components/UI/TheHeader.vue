<script setup>
import { RouterLink } from 'vue-router';
import SvgIcon from '../base_components/SvgIcon.vue';
import BaseButton from '../base_components/BaseButton.vue';
</script>
<template>
  <header class="header">
    <div class="container header__container">
      <RouterLink to="/" class="link__logo header__logo">
        <SvgIcon class="icon icon--logo" name="logo-big" />
      </RouterLink>
      <nav class="nav header__nav">
        <ul class="nav__list header__nav-list">
          <li class="nav__list-item">
            <RouterLink to="/" class="link header__nav-link">Home</RouterLink>
          </li>
          <li class="nav__list-item">
            <RouterLink to="/about" class="link header__nav-link"
              >About</RouterLink
            >
          </li>
          <li class="nav__list-item">
            <RouterLink to="/service" class="link header__nav-link"
              >Service</RouterLink
            >
          </li>
          <li class="nav__list-item">
            <div class="dropdown">
              <BaseButton class="btn dropdown__btn">
                <span class="dropdown__btn-text">Blog</span>
                <SvgIcon class="icon icon--small" name="chevron-down" />
              </BaseButton>
            </div>
          </li>
          <li class="nav__list-item relative">
            <div class="dropdown">
              <BaseButton class="btn dropdown__btn">
                <span class="dropdown__btn-text">Blog</span>
                <SvgIcon class="icon icon--small" name="chevron-down" />
              </BaseButton>
              <ul class="dropdown__list">
                <li class="dropdown__list-item">Blog item</li>
                <li class="dropdown__list-item">Blog item</li>
                <li class="dropdown__list-item">Blog item</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <BaseButton
        class="btn btn-primary--outline btn-contact header__btn-contact"
        >Contact us</BaseButton
      >
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding-block: 32px;

  &__container {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: auto;

    @media (min-width: $md) {
      margin-right: 0;
    }
  }

  &__nav {
    display: none;
    margin: 0 auto;
    padding: 0 6px;
    width: 100%;
    max-width: 525px;

    @media (min-width: $md) {
      display: flex;
    }
  }

  &__nav-list {
    display: flex;
    justify-content: space-between;
    flex: 1;
    list-style: none;
  }

  &__nav-link {
    display: flex;
    padding: 16px 8px;
    min-width: 45px;
    font-weight: 300;
    color: $white;

    &.router-link-exact-active {
      font-weight: 500;
    }
  }
}

.dropdown {
  position: relative;

  &__btn {
    padding: 16px 8px;
    border: none;
  }

  &__btn-text {
    margin-right: 5px;
  }

  &__list {
    display: none;
    position: absolute;
    list-style: none;
    min-width: 120px;
  }

  &__list.open {
    display: flex;
    flex-direction: column;
  }
}
</style>
