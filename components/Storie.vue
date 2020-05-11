<template>
  <div>
    <section class="wrapped">
      <form class="storie__find">
        <h2 class="storie__title">Истории неизлечимых привычек</h2>
        <div class="storie__form">
          <input class="storie_input" type="search" />
          <button class="storie__button">Поиск</button>
        </div>
      </form>
      <div class="storie__cards">
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
      </div>
      <div class="storie__next-buttons">
        <ButtonNumberPage v-text="1"></ButtonNumberPage>
        <ButtonNumberPage v-text="2"></ButtonNumberPage>
        <ButtonNumberPage v-text="3"></ButtonNumberPage>
        <ButtonNumberPage v-text="4"></ButtonNumberPage>
        <ButtonNumberPage v-text="5"></ButtonNumberPage>
        <ButtonNumberPage v-text="6"></ButtonNumberPage>
        <ButtonNumberPage v-text="7"></ButtonNumberPage>
      </div>
    </section>
  </div>
</template>

<script>
import StoriesCard from '@/components/StoriesCard';
import ButtonNumberPage from '@/components/ButtonNumberPage';

export default {
  components: {
    StoriesCard,
    ButtonNumberPage,
  },
};
</script>

<style scoped>
.wrapped {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.storie__cards {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
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

.storie__find {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 100%;
  margin-bottom: 70px;
}

.storie__title {
  margin: 100px 60px 60px 60px;
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
}

.storie__form {
  display: flex;
  max-width: 100%;
  height: 52px;
  margin-right: 60px;
  margin-left: 60px;
}

.storie_input {
  width: 100%;
  max-height: 100%;
  margin-left: 0;
  margin-right: auto;
  border: 1px solid #e8e8e8;
}

.storie__button {
  width: 226px;
  max-height: 100%;
  margin-right: 0;
  margin-left: 20px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  background: #613a93;
  outline: none;
}

.storie__next-buttons {
  margin-top: 140px;
  margin-bottom: 100px;
}

@media screen and (max-width: 1280px) {
  .storie__title {
    margin: 90px 50px 50px 50px;
  }
  .storie__form {
    height: 48px;
    margin-right: 50px;
    margin-left: 50px;
  }
  .storie__next-buttons {
    margin-top: 130px;
    margin-bottom: 90px;
  }
  .storie__next-buttons {
    margin-top: 130px;
    margin-bottom: 90px;
  }
}
@media screen and (max-width: 1024px) {
  .storie__title {
    max-width: 280px;
    font-size: 1.5em;
  }
  .storie__form {
    height: 46px;
    margin-right: 50px;
    margin-left: 50px;
  }
}
</style>
