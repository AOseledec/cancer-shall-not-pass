<template>
  <div>
    <section class="wrapped">
      <form class="storie__find">
        <h3 class="storie__title">Истории неизлечимых привычек</h3>
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
        <ButtonNumberPage>3</ButtonNumberPage>
        <ButtonNumberPage>1</ButtonNumberPage>
        <ButtonNumberPage>1</ButtonNumberPage>
        <ButtonNumberPage>1</ButtonNumberPage>
        <ButtonNumberPage>1</ButtonNumberPage>
        <ButtonNumberPage>1</ButtonNumberPage>
        <ButtonNumberPage>1</ButtonNumberPage>
        <ButtonNumberPage>1</ButtonNumberPage>
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
  width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.storie__form {
  flex-direction: row;
}

.storie_input {
  margin-left: 60px;
  margin-right: 10px;
  width: 1074px;
  height: 52px;
  border: 1px solid #e8e8e8;
}

.storie__button {
  width: 226px;
  height: 52px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  background: #613a93;
  outline: none;
}

.storie__next-buttons {
  display: flex;
  flex-direction: row;
  padding: 120px 100px;
}
</style>
