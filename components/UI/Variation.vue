<template>
  <div class="variation">
    <div class="variation__links">
      <a href="" class="variation__link-text">1-й вариант</a>
      <a href="" class="variation__link-text">2-й вариант</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.variation {
  width: 295px;
  height: 134px;
  background-color: #f7f7f7;
}

.variation__links {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.variation__link-text {
  margin-bottom: 10px;
  margin-left: 42px;
  text-decoration: none;
  color: black;
}
</style>
