<template>
  <div class="storie__container">
    <div class="storie">
      <img class="storie__image" src="" alt="" />
      <h3 class="storie__author">Владимир Познер</h3>
      <p class="storie__quote">
        Я боюсь акул — и, в отличии от рака, это не лечится.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.storie {
  display: flex;
  flex-direction: column;
  width: 382px;
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
</style>
