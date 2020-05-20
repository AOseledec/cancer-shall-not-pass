<template>
  <header class="header">
    <Container id="container-header">
      <h3 class="header__name">
        Проект Благотворительного Фонда Константина Хабенского
      </h3>
      <nav class="header__nav">
        <a href="/index" class="nav__link">Главная</a>
        <a href="/stories/index" class="nav__link">Истории</a>
        <a href="components/Popup" class="nav__link">Рассказать историю</a>
      </nav>
    </Container>
  </header>
</template>

<script>
import Container from '@/components/Container';
export default {
  components: {
    Container,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
}

#container-header {
  display: flex;
}

.header__name {
  max-width: 340px;
  margin: 18px auto 18px 0;
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
</style>
