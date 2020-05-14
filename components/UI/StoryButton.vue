<template>
  <div class="story-buttons">
    <button class="story-button">1</button>
    <button class="story-button">2</button>
    <button class="story-button">3</button>
    <button class="story-button">4</button>
    <button class="story-button">5</button>
    <button class="story-button">6</button>
    <button class="story-button">7</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.story-buttons {
  display: flex;
  flex-direction: row;
}

.story-button {
  width: 58px;
  height: 58px;
  font-size: 18px;
  background-color: #f4f4f4;
  border: none;
  margin: 5px;
}
</style>
