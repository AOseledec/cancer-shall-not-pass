<template>
  <header class="header">
    <div class="header__name">
      <h3 class="header__text">
        Проект Благотворительного Фонда Константина Хабенского
      </h3>
    </div>
    <nav class="header__nav">
      <a href="/index" class="nav__link">Главная</a>
      <a href="/stories/index" class="nav__link">Истории</a>
      <a href="components/Popup" class="nav__link">Рассказать историю</a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
}

.header__name {
  max-width: 340px;
  margin: 18px auto 18px 62px;
}

.header__text {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}

.header__nav {
  margin: 26px 60px 26px auto;
  display: flex;
}

.nav__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-left: 34.5px;
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
  color: #000000;
}

@media screen and (max-width: 1024px) {
  .nav__link {
    font-size: 16px;
  }
}
</style>
