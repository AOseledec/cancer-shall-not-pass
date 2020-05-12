<template>
  <a href="" class="share-link">Поделитесь &#8599;</a>
</template>

<script>
export default {};
</script>

<style scoped>
.share-link {
  margin-bottom: 44px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
}

.share-link:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1280px) {
  .share-link {
    font-size: 16px;
  }
}

@media screen and (max-width: 590px) {
  .share-link {
    font-size: 13px;
    margin-bottom: 0;
  }
}
</style>
