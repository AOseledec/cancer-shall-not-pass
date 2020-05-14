<template>
  <button class="button-more-story">Больше статей</button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-more-story {
  min-width: 100%;
  height: 82px;
  margin: 70px 120px;
  font-size: 16px;
  line-height: 20px;
  color: black;
  background: #fbfbfb;
  border: none;
}

@media screen and (max-width: 1280px) {
  .button-more-story {
    height: 78px;
  }
}
@media screen and (max-width: 1024px) {
  .button-more-story {
    height: 50px;
    font-size: 13px;
  }
}
</style>
