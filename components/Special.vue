<template>
  <section class="wrapped special">
    <div class="special__head">
      <img class="special__image" src="" alt="" />
      <div class="special__info">
        <h2 class="special__info-title">
          <span class="special__span">Александр Тарханов:</span>
          «Я не могу победить свою пунктуальность в отличии от рака»
        </h2>
        <div class="special__info-about">
          <a href="" class="special__info-link">Поделитесь ↗</a>
          <p class="special__info-date">20 апреля 2018</p>
        </div>
      </div>
    </div>
    <div class="special__storie">
      <p class="special__storie-text">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      </p>

      <p class="special__storie-text">
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.
      </p>

      <p class="special__span special__storie-text">
        «В футболе если команда опоздала на 15 минут, ей засчитывается
        поражение».
      </p>

      <p class="special__storie-text">
        Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
        что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю!
      </p>

      <p class="special__storie-text">
        Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
        билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
        — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
        «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
        минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
        Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится. В отличие от рака.
      </p>

      <p class="special__span special__storie-text">
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
      <div class="special__storie-link special__info-link˝">
        Поделитесь этой статьей в своих социальных сетях ↗
      </div>
    </div>

    <div class="special-stories">
      <div class="special-storie__container">
        <div class="special-storie">
          <img class="special-storie__image" src="" alt="" />
          <h3 class="special-storie__author">Владимир Тен</h3>
          <p class="special-storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="special-storie__container">
        <div class="special-storie">
          <img class="special-storie__image" src="" alt="" />
          <h3 class="special-storie__author">Владимир Тен</h3>
          <p class="special-storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="special-storie__container">
        <div class="special-storie">
          <img class="special-storie__image" src="" alt="" />
          <h3 class="special-storie__author">Владимир Тен</h3>
          <p class="special-storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="special-storie__container">
        <div class="special-storie">
          <img class="special-storie__image" src="" alt="" />
          <h3 class="special-storie__author">Владимир Тен</h3>
          <p class="special-storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
    </div>
    <button class="special-storie__more">Больше статей</button>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapped {
  display: flex;
  flex-wrap: wrap;
}
.special {
  justify-content: center;
  margin: 100px 60px 0;
}

.special__head {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.special__image {
  width: 580px;
  height: 580px;
  background: #ededed;
}

.special__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 680px;
  border-style: solid none;
  border-color: #efefef;
  border-width: 1px;
}

.special__info-title {
  margin-top: 30px;
  font-weight: 500;
  font-size: 38px;
  line-height: 48px;
}

.special__span {
  font-weight: bold;
}

.special__info-about {
  display: flex;
  justify-content: space-between;
}

.special__info-link {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
}

.special__info-date {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}

.special__storie {
  width: 780px;
  padding-top: 130px;
  padding-bottom: 70px;
}

.special__storie-text {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 25px;
}

.special__storie-link {
  height: 84px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-style: solid none;
  border-color: #efefef;
  border-width: 1px;
}

.special-stories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.special-storie {
  display: flex;
  flex-direction: column;
  width: 382px;
}

.special-storie__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 300px;
  background: white;
}

.special-storie__image {
  width: 300px;
  height: 300px;
  background: #ededed;
}

.special-storie__author {
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-top: 20px;
  margin-bottom: 0;
  color: #000000;
}

.special-storie__quote {
  max-width: 220px;
  margin-top: 14px;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}

.special-storie__more {
  min-width: 100%;
  height: 82px;
  margin: 70px 120px;
  font-size: 16px;
  line-height: 20px;
  color: black;
  background: #fbfbfb;
  border: none;
}
</style>
