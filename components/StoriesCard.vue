<template>
  <div class="storie__container">
    <img class="storie__image" src="https://picsum.photos/195" alt="" />
    <h3 class="titel_h3">Владимир Познер</h3>
    <a href="_id" class="description">
      Я боюсь акул — и, в отличии от рака, это не лечится.
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
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
  min-width: 100%;
  background: #ededed;
}

.titel_h3 {
  font-weight: 600;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 0;
  color: #000000;
}

.description {
  max-width: 220px;
  margin-top: 14px;
  font-size: 14px;
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

  .titel_h3 {
    font-size: 18px;
  }

  .description {
    font-size: 13px;
  }
}

@media screen and (max-width: 768px) {
  .storie__container {
    max-width: 216px;
    margin: 40px 10px 0 10px;
  }

  .titel_h3 {
    font-size: 18px;
  }

  .description {
    font-size: 13px;
  }
}

@media screen and (max-width: 320px) {
  .storie__container {
    max-width: 290px;
    margin: 0 10px 30px 10px;
  }

  .titel_h3 {
    font-size: 18px;
  }

  .description {
    font-size: 13px;
  }
}
</style>
