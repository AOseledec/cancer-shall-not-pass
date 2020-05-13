<template>
  <div>
    <section class="wrapped">
      <form class="storie__find">
        <h2 class="storie__title">Истории неизлечимых привычек</h2>
        <div class="storie__form">
          <input class="storie_input" type="search" />
          <button class="storie__button">
            <svg
              class="storie__button-svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.91304" cy="5.91304" r="5.41304" stroke="white" />
              <line
                x1="10.0918"
                y1="10.0813"
                x2="16.3527"
                y2="16.3421"
                stroke="white"
              />
            </svg>
            Поиск
          </button>
        </div>
      </form>
      <div class="storie__cards">
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
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

.storie__button-svg {
  display: none;
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

@media screen and (max-width: 768px) {
  .storie__title {
    margin: 80px auto 50px auto;
    max-width: 380px;
    text-align: center;
    font-size: 24px;
  }

  .storie__form {
    height: 46px;
    margin-right: 40px;
    margin-left: 40px;
  }

  .storie__find {
    margin-bottom: 20px;
  }

  .storie_input {
    max-width: 460px;
  }
}

@media screen and (max-width: 454px) {
  .storie__button {
    width: 46px;
    margin-left: 6px;
    font-size: 0;
  }

  .storie__button-svg {
    display: inline-block;
    margin-top: 10px;
  }

  .storie__next-buttons {
    width: 260px;
    height: 60px;
    overflow: hidden;
    flex-wrap: nowrap;
    margin-top: 20px;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 320px) {
  .storie__title {
    margin: 80px auto 50px auto;
    max-width: 290px;
    text-align: left;
    font-size: 24px;
  }

  .storie__form {
    height: 46px;
    margin-right: 15px;
    margin-left: 15px;
  }

  .storie__find {
    margin-bottom: 20px;
  }

  .storie_input {
    max-width: 460px;
  }

  .storie__button {
    width: 46px;
    margin-left: 6px;
    font-size: 0;
  }

  .storie_input {
    max-width: 238px;
  }

  .storie__button-svg {
    display: inline-block;
    margin-top: 10px;
  }

  .storie__next-buttons {
    margin-top: 20px;
    margin-bottom: 50px;
  }
}
</style>
