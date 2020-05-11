<template>
  <footer class="footer">
    <div class="footer__gratitude">
      <h2 class="footer__gratitude-text">
        Спасибо всем, кто помог состояться этому проекту
      </h2>
    </div>
    <nav class="footer__nav">
      <a href="" class="nav__link">Главная</a>
      <a href="" class="nav__link">Истории</a>
    </nav>
    <div class="footer__social">
      <a href="" class="footer__social-links"
        >Мы в Фейсбуке, Инстаграме и Youtube</a
      >
      <a href="" class="footer__social-links">Поделитесь &#8599;</a>
    </div>
    <div class="footer__copyright">
      <p class="footer__copyright-text">Рак Лечится 2020</p>
      <p class="footer__copyright-text">Сделано студентами Яндекс Практикум</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
}

.footer__gratitude {
  margin: 60px auto 110px 60px;
}

.footer__gratitude-text {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  max-width: 340px;
}

.footer__nav {
  margin: 60px 339px auto auto;
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

.footer__social {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 60px 60px auto auto;
}

.footer__social-links {
  margin-bottom: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
}

.footer__copyright {
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 60px;
}

.footer__copyright-text {
  /*margin-right: 800px;*/
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
  border: 1px solid red;
}
.footer__copyright-text:nth-last-child(1) {
  margin: 0;
}
</style>
