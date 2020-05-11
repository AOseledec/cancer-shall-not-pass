<template>
  <div class="storie__container">
    <img class="storie__image" src="https://picsum.photos/195" alt="" />
    <h3 class="storie__author">Владимир Познер</h3>
    <p class="storie__quote">
      Я боюсь акул — и, в отличии от рака, это не лечится.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.storie__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 300px;

  margin: 20px;
  background: white;
}

.storie__image {
  min-width: 100%;

  background: #ededed;
}

.storie__author {
  font-weight: 600;
  font-size: 1.4em;
  line-height: 1.4em;
  margin-top: 20px;
  margin-bottom: 0;
  color: #000000;
}

.storie__quote {
  max-width: 220px;
  margin-top: 14px;
  font-size: 0.875em;
  line-height: 1.125em;
  color: #666666;
}

@media screen and (max-width: 1362px) {
  .storie__container {
    max-width: 285px;
  }
}
@media screen and (max-width: 1300px) {
  .storie__container {
    max-width: 265px;
  }
}
@media screen and (max-width: 1280px) {
  .storie__container {
    max-width: 265px;
  }
}
@media screen and (max-width: 1221px) {
  .storie__container {
    max-width: 248px;
  }
}
@media screen and (max-width: 1153px) {
  .storie__container {
    max-width: 238px;
  }
}

@media screen and (max-width: 1113px) {
  .storie__container {
    max-width: 214px;
  }
}

@media screen and (max-width: 1024px) {
  .storie__container {
    max-width: 208px;
  }

  .storie__author {
    font-size: 1.125em;
  }

  .storie__quote {
    font-size: 0.8em;
  }
}
</style>
