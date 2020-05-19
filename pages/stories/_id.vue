<template>
  <section class="wrapped special">
    <div class="special__head">
      <img class="special__image" src="https://picsum.photos/195" alt="фото" />
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
    <SectionCards id="special-section-cards">
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard id="cardRemove"></StoriesCard>
    </SectionCards>
  </section>
</template>

<script>
import StoriesCard from '@/components/StoriesCard';
import SectionCards from '@/components/SectionCards';
import ButtonMoreStory from '@/components/ButtonMoreStory';
export default {
  components: {
    StoriesCard,
    SectionCards,
    ButtonMoreStory,
  },
};
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
  height: 100%;
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

@media screen and (max-width: 1280px) {
  .special {
    margin: 100px 50px 0;
  }

  .special__image {
    max-width: 518px;
    max-height: 518px;
  }

  .special__info {
    max-width: 602px;
  }

  .special__info-title {
    font-size: 34px;
  }

  .special__storie {
    width: 720px;
    padding-top: 110px;
    padding-bottom: 90px;
  }

  .special-stories {
    flex-wrap: nowrap;
  }
}

@media screen and (max-width: 1024px) {
  .special {
    margin: 100px 50px 0;
  }

  .special__image {
    max-width: 407px;
    max-height: 407px;
  }

  .special__info {
    max-width: 477px;
  }

  .special__info-title {
    font-size: 30px;
  }

  .special__storie {
    width: 640px;
    padding-top: 110px;
    padding-bottom: 90px;
  }

  .special-stories {
    flex-wrap: nowrap;
  }

  .special__info-link {
    font-size: 16px;
  }

  .special__storie-link {
    height: 70px;
  }

  .special__info-date {
    font-size: 16px;
  }

  .special__storie-text {
    font-size: 18px;
    line-height: 27px;
  }
}

@media screen and (max-width: 970px) {
  #cardRemove {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .special {
    margin: 100px 40px 0;
  }

  .special__head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .special__image {
    max-width: 420px;
    max-height: 420px;
    margin-top: 160px;
  }

  .special__info {
    position: absolute;
    max-width: 640px;
    height: 660px;
  }

  .special__storie {
    width: 720px;
    padding-top: 110px;
    padding-bottom: 90px;
  }

  #cardRemove {
    display: none;
  }
}

@media screen and (max-width: 661px) {
  .special {
    margin: 100px 15px 0;
  }

  .special__head {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 290px;
  }

  .special__image {
    width: 290px;
    height: 290px;
    margin-top: 110px;
  }

  .special__info {
    position: absolute;
    width: 290px;
    height: 470px;
  }

  .special__info-title {
    margin-top: 20px;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    width: 290px;
  }
  .special__storie {
    width: 720px;
    padding-top: 110px;
    padding-bottom: 90px;
  }

  .special__info-link {
    font-size: 13px;
    margin-bottom: 20px;
  }
  #cardRemove {
    display: none;
  }

  .special__storie {
    max-width: 100%;
  }
}
</style>
