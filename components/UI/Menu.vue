<template>
  <nav class="nav" aria-label="Main">
    <ul class="nav__list">
      <li class="nav__item">
        <nuxt-link to="/" class="nav__link">Главная</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/stories" class="nav__link">Истории</nuxt-link>
      </li>
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['links'],
};
</script>

<style scoped>
.nav {
}

.nav__list {
  text-decoration: none;
}

.nav__item {
}

.nav {
  margin: 26px 60px 26px auto;
  display: flex;
}

.nav__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-left: 34px;
  text-decoration: none;
  color: #000000;
}

.nav__link:first-child {
  margin: 0;
}

.nav__link:hover {
  text-decoration: underline;
}

.nav__link_isActive {
  text-decoration: underline;
  color: #000;
}

@media screen and (max-width: 1024px) {
  .nav__link {
    font-size: 16px;
  }
}
.nav__link {
  text-decoration: none;
}
</style>
