<template>
  <div>
  <section class="promo">
            <h1 class="promo__title">#РАКЛЕЧИТСЯ</h1>
            <img class="promo__strelka" src="./image/strelka.svg" alt="Стрелка">
        </section>

        <section class="video-stories">
            <div class="video-stories__texts">
                <p class="video-stories__text-title">Истории людей, победивших рак, но не свои привычки</p>
                <p class="video-stories__text">Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.</p>
            </div>
            <div class="video-stories__video">
                <div class="video-stories__video-youtube"><iframe src="https://www.youtube.com/embed/ebyAaIUyFlU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <p class='video-stories__sign'>Все видео вы можете найте на нашем <a class="video-stories__sign-url">YouTube канале</a> </p>

            </div>
        </section>

        <section class="block-purple">
            <h2 class="block-purple__text">И В ОТЛИЧИЕ ОТ РАКА, <span class="block-purple__text-extractor">#ЭТОНЕЛЕЧИТСЯ</span></h2>
        </section>



        <section class="block-purple">
            <h2 class="block-purple__text">РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ <span class="block-purple__text-extractor">#ЭТОНЕЛЕЧИТСЯ</span></h2>
        </section>

        <section class="insta">
            <div class="insta__text">
                <p class="insta__text-title">Инстаграм </p>
                <p class="insta__text-paragraph">Два раза в неделю мы просматриваем все посты по хештегу #этонелечится. Все истории, где нет нецензурных выражений и запрещенного контента попадают сюда. Следите за правильным написанием хештега, чтобы мы не пропустили вашу историю.</p>
            </div>
            <div class="insta__grid">
                <img src="https://picsum.photos/195" class="insta__grid-image">
                <img src="https://picsum.photos/195" class="insta__grid-image">
                <img src="https://picsum.photos/195" class="insta__grid-image">
                <img src="https://picsum.photos/195" class="insta__grid-image">
                <img src="https://picsum.photos/195" class="insta__grid-image">
                <img src="https://picsum.photos/195" class="insta__grid-image">
                <img src="https://picsum.photos/195" class="insta__grid-image">
                <img src="https://picsum.photos/195" class="insta__grid-image">
            </div>
        </section>

        <section class="story">

                <p class="story__tell-title">Расскажите свою историю</p>
            <div class="story__main">
                <p class="story__tell-text">Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.</p>
                <ul class="story__text-choices">
                    <li class="story__text-choice">1-й вариант</li>
                    <li class="story__text-choice">2-й вариант</li>
                </ul>
                <p class="story__text-forma">Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.</p>
            </div>
        </section>
  </div>
</template>

<script></script>

<style>
.page{
 max-width: 1440px;
 margin: 0;
}

.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1320px;
    margin: 0 auto;
}

.header__title{
    max-width: 340px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin: 18px 0;
}

.header__nav{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    margin-right: 40px;
}

.header__nav:last-child{
    margin-right: 0;
}

.promo{
    background-color: #613A93;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.promo__title{
    font-style: normal;
    font-weight: 800;
    font-size: 92px;
    line-height: 111px;
    text-align: center;
    margin: 290px auto 0;
}

.promo__strelka{
    width: 36px;
    height: 12px;
    margin: 237px auto 40px;
}

.video-stories{
    display: flex;
    flex-direction: row;
    margin: 100px auto 0;
    max-width: 1320px;
}

.video-stories__text-title{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
}

.video-stories__text{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 32px;
}

.video-stories__texts{
    max-width: 413px;
    margin-right: 40px;
}

.video-stories__video{
    max-width: 867px;
}

.video-stories__video-youtube{
    width: 867px;
    height: 450px;
}

.video-stories__sign{
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #666666;
    margin-top: 10px;
    margin-bottom: 0;
}

.video-stories__sign-url{
    text-decoration: underline;
}

.block-purple{
    max-width: 1320px;
    background-color: #613A93;
    margin: 74px auto 0;
    display: flex;
    justify-content: center;
}

.block-purple__text{
    color: #fff;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 46px;
    max-width: 750px;
    margin: 20px auto;
}

.block-purple__text-extractor{
    font-weight: bold;
}

.insta{
    margin: 100px auto 0;
    max-width: 1320px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.insta__text{
    max-width: 340px;
    margin-right: 110px;
}

.insta__grid{
    display: grid;
    grid-template-columns: repeat(4, 195px);
    grid-template-rows: repeat(2, 195px);
    grid-gap: 30px;
}

.insta__text-title{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    text-decoration: underline;
}

.insta__text-paragraph{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
}

.story{
    width: 100%;
    background-color:  #F7F7F7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 100px auto 0;
}

.story__tell{
    max-width: 340px;

}

.story__text{
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 787px;
}

.story__text-choices{

    margin-right: 40px;
    list-style-type: none;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
}

.story__text-choice{
    max-width: 110px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
}

.story__text-forma{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
}

.story__tell-title{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    }

.story__tell-text{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #666;
}

.story__main{

}
</style>
