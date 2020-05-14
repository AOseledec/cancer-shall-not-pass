<template>
  <div>
    <Popup><Quiz></Quiz> </Popup>

    <section class="promo">
      <h1 class="promo__title">#РАКЛЕЧИТСЯ</h1>
      <img class="promo__strelka" src="/strelka.svg" alt="Стрелка" />
    </section>
    <section class="video-stories">
      <div class="video-stories__texts">
        <p class="video-stories__text-title">
          Истории людей, победивших рак, но не свои привычки
        </p>
        <p class="video-stories__text">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
      </div>
      <div class="video-stories__video">
        <div class="video-stories__video-youtube">
          <iframe
            src="https://www.youtube.com/embed/ebyAaIUyFlU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p class="video-stories__sign">
          Все видео вы можете найте на нашем
          <a class="video-stories__sign-url">YouTube канале</a>
        </p>
      </div>
    </section>

    <section class="block-purple">
      <h2 class="block-purple__text">
        И В ОТЛИЧИЕ ОТ РАКА,
        <span class="block-purple__text-extractor">#ЭТОНЕЛЕЧИТСЯ</span>
      </h2>
    </section>

    <section>
      <Storie />
    </section>

    <section class="block-purple">
      <h2 class="block-purple__text">
        РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ
        <span class="block-purple__text-extractor">#ЭТОНЕЛЕЧИТСЯ</span>
      </h2>
    </section>

    <section class="insta">
      <div class="insta__text">
        <p class="insta__text-title">Инстаграм</p>
        <p class="insta__text-paragraph">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="insta__grid">
        <img src="https://picsum.photos/195" class="insta__grid-image" />
        <img src="https://picsum.photos/195" class="insta__grid-image" />
        <img src="https://picsum.photos/195" class="insta__grid-image" />
        <img src="https://picsum.photos/195" class="insta__grid-image" />
        <img src="https://picsum.photos/195" class="insta__grid-image" />
        <img src="https://picsum.photos/195" class="insta__grid-image" />
        <img src="https://picsum.photos/195" class="insta__grid-image" />
        <img src="https://picsum.photos/195" class="insta__grid-image" />
      </div>
    </section>

    <section class="story">
      <p class="story__tell-title">Расскажите свою историю</p>
      <div class="story__main">
        <p class="story__tell-text">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </p>
        <ul class="story__text-choices">
          <li class="story__text-choice story__text-choice_black">
            1-й вариант
          </li>
          <li class="story__text-choice">2-й вариант</li>
        </ul>
        <p class="story__text-forma">
          Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
          после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
          испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
        </p>
      </div>
    </section>

    <section>
      <Graficks />
    </section>

    <section class="project">
      <h3 class="project__title">#РАКЛЕЧИТСЯ</h3>
      <p class="story__tell-title story__tell-title_project">О проекте</p>
      <div class="story__main ">
        <p class="story__tell-text story__tell-text_project">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
        <ul class="story__text-choices story__text-choices_project">
          <li class="story__text-choice story__text-choice_white">
            Рак Лечится
          </li>
          <li class="story__text-choice">Фонд Хабенского</li>
        </ul>
        <p class="story__text-forma story__text-forma_project">
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак. Рак лечится — проект Благотворительного Фонда
          Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
          изменить отношение людей к раку и заставить каждого поверить:
          онкологическое заболевание — это не приговор.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Graficks from '@/components/Graficks.vue';
import Storie from '@/components/Storie.vue';
import Popup from '@/components/Popup.vue';
import Quiz from '@/components/Quiz.vue';

export default {
  components: {
    Graficks,
    Storie,
    Popup,
    Quiz,
  },
};
</script>

<style>
.page {
  max-width: 1440px;
  margin: 0;
}

.promo {
  background-color: #613a93;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.promo__title {
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  margin: 290px auto 0;
}

.promo__strelka {
  width: 36px;
  height: 12px;
  margin: 237px auto 40px;
}

.video-stories {
  display: flex;
  flex-direction: row;
  margin: 100px auto 0;
  max-width: 1320px;
}

.video-stories__text-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.video-stories__text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-top: 32px;
}

.video-stories__texts {
  max-width: 413px;
  margin-right: 40px;
}

.video-stories__video {
  max-width: 867px;
}

.video-stories__video-youtube {
  width: 867px;
  height: 450px;
}

.video-stories__sign {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  margin-top: 10px;
  margin-bottom: 0;
}

.video-stories__sign-url {
  text-decoration: underline;
}

.block-purple {
  max-width: 1320px;
  background-color: #613a93;
  margin: 74px auto 0;
  display: flex;
  justify-content: center;
}

.block-purple__text {
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  max-width: 750px;
  margin: 20px auto;
}

.block-purple__text-extractor {
  font-weight: bold;
}

.insta {
  margin: 100px auto 0;
  max-width: 1320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.insta__text {
  max-width: 340px;
  margin-right: 110px;
}

.insta__grid {
  display: grid;
  grid-template-columns: repeat(4, 195px);
  grid-template-rows: repeat(2, 195px);
  grid-gap: 30px;
}

.insta__text-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-decoration: underline;
}

.insta__text-paragraph {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.story {
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  margin: 100px auto 0;
}

.story__text-choices {
  list-style-type: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 0;
  margin-right: 40px;
  margin-bottom: 0;
  margin-top: 0;
  color: #666;
}

.story__text-choice {
  max-width: 155px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.story__text-choice_black {
  color: black;
}

.story__text-forma {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 640px;
  margin-bottom: 0;
  margin-top: 0;
  color: #666;
}

.story__tell-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin-top: 100px;
  margin-left: 60px;
  margin-bottom: 0;
}

.story__tell-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  max-width: 340px;
  margin-right: 195px;
  margin-bottom: 208px; /*временно*/
  margin-top: 0;
}

.story__main {
  vertical-align: text-top;
  display: flex;
  flex-direction: row;
  max-width: 1320px;
  margin: 32px auto 0;
}

.project {
  background-color: #613a93;
  width: 100%;
  color: #fff;
}

.project__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  margin: 0 auto 70px;
  padding-top: 90px;
}

.story__tell-text_project {
  color: #dedede;
}

.story__text-choices_project {
  color: #dedede;
}

.story__text-forma_project {
  color: #dedede;
}

.story__text-choice_white {
  color: #fff;
}

.story__tell-title_project {
  margin-top: 0;
}
</style>
