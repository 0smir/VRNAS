<script setup>
import { RouterLink } from 'vue-router';
import { gsap } from 'gsap';
import SvgIcon from '@/components/base_components/SvgIcon.vue';
import BaseButton from '@/components/base_components/BaseButton.vue';
import LocaleChanger from '@/components/base_components/LocaleChanger.vue';

const FORCE = 120;
const magneticText = (e) => {
  let targetLink = e.currentTarget;
  let span = e.currentTarget.querySelector('.magnetic-text');
  moveTarget(e, targetLink, span, FORCE);
};

const clearMagnetic = (e) => {
  let span = e.currentTarget.querySelector('.magnetic-text');
  leaveTarget(span);
};

const leaveTarget = (span) => {
  gsap.to(span, {
    x: 0,
    y: 0,
    duration: 0.3,
    ease: 'power2.out',
  });
};

const moveTarget = (e, link, textEl, FORCE) => {
  let boundingRect = link.getBoundingClientRect();
  let relX = e.pageX - boundingRect.left;
  let relY = e.pageY - boundingRect.top;

  gsap.to(textEl, {
    x: ((relX - boundingRect.width / 2) / boundingRect.width) * FORCE,
    y: ((relY - boundingRect.height / 2) / boundingRect.width) * FORCE,
    duration: 0.3,
    ease: 'power2.easeOut',
  });
};
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
            <RouterLink
              to="/"
              class="link nav__link header__nav-link js-magnetic"
              @mousemove="magneticText"
              @mouseleave="clearMagnetic"
            >
              <span class="magnetic-text">
                {{ $t('navigation.link_home') }}
              </span>
            </RouterLink>
          </li>
          <li class="nav__list-item">
            <RouterLink
              to="/about"
              class="link nav__link header__nav-link js-magnetic"
              @mousemove="magneticText"
              @mouseleave="clearMagnetic"
            >
              <span class="magnetic-text">{{ $t('navigation.link_about') }}</span>
            </RouterLink>
          </li>
          <li class="nav__list-item">
            <RouterLink
              to="/service"
              class="link nav__link header__nav-link js-magnetic"
              @mousemove="magneticText"
              @mouseleave="clearMagnetic"
            >
              <span class="magnetic-text">{{ $t('navigation.link_service') }}</span>
            </RouterLink>
          </li>
          <li class="nav__list-item">
            <RouterLink
              to="/blog"
              class="link nav__link header__nav-link js-magnetic"
              @mousemove="magneticText"
              @mouseleave="clearMagnetic"
            >
              <span class="magnetic-text">{{ $t('navigation.link_blog') }}</span>
            </RouterLink>
          </li>
          <li class="nav__list-item relative">
            <div class="dropdown">
              <BaseButton class="btn dropdown__btn">
                <span class="dropdown__btn-text">{{ $t('buttons.btn_pages') }}</span>
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
      <LocaleChanger class="header__locale-switcher" />
      <BaseButton class="btn btn-primary btn-primary--outline btn-contact header__btn-contact">
        {{ $t('buttons.btn_contact') }}
      </BaseButton>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: sticky;
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
    position: relative;
    display: block;
    padding: 16px 8px;
    min-width: 45px;
    color: $white;

    &.router-link-exact-active {
      font-weight: 700;
    }

    .magnetic-text {
      display: inline-block;
      pointer-events: none;
    }
  }

  &__locale-switcher {
    display: none;
    @media (min-width: $md) {
      display: block;
      margin-right: 15px;
    }
  }
}

.dropdown {
  position: relative;

  &__btn {
    padding: 16px 8px;
    border: none;
    text-transform: capitalize;
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
