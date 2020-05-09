<template>
  <div>
    <section class="stories">
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <div class="storie__container">
        <div class="storie">
          <img class="storie__image" src="" alt="" />
          <h3 class="storie__author">Владимир Тен</h3>
          <p class="storie__quote">
            Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
          </p>
        </div>
      </div>
      <button class="storie__more">Больше статей</button>
      <div class="storie__tell-a-story">
        <h2 class="storie__text">
          РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ
          <span class="storie__text-span">#ЭТОНЕЛЕЧИТСЯ</span>
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.storie__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 300px;
  margin: 20px;
  background: white;
}

.storie__image {
  width: 300px;
  height: 300px;

  background: #ededed;
}

.storie__author {
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  margin-top: 20px;
  margin-bottom: 0;
  color: #000000;
}

.storie__quote {
  max-width: 220px;
  margin-top: 14px;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}

.storie {
  display: flex;
  flex-direction: column;
  width: 382px;
}

@media screen and (max-width: 1024px) {
  .storie {
    width: 90%;
    max-width: calc((100% - 57px) / 3);
  }
}

.storie__more {
  width: 1320px;
  height: 82px;
  margin-bottom: 120px;
  font-size: 16px;
  line-height: 20px;
  color: black;
  background: #fbfbfb;
  outline: none;
}

.storie__tell-a-story {
  width: 1320px;
  height: 129px;
  display: flex;
  justify-content: center;
  background: #613a93;
}

.storie__text {
  justify-content: center;
  max-width: 750px;
  min-width: 750px;
  text-align: center;
  vertical-align: auto;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: white;
}

.storie__text-span {
  font-weight: bold;
}
</style>
