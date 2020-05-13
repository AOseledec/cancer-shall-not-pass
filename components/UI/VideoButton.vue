<template>
  <div class="video-stoies__buttons">
    <button class="video-stoies__button">
      <div
        class="video-stoies__button-arrow video-stoies__button-arrow_left"
      ></div>
    </button>
    <button class="video-stoies__button">
      <div
        class="video-stoies__button-arrow video-stoies__button-arrow_right"
      ></div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video-stoies__buttons {
  display: flex;
  flex-direction: row;
}

.video-stoies__button {
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  border: none;
}

.video-stoies__button-arrow {
  display: block;
  width: 12px;
  height: 12px;
}

.video-stoies__button-arrow_left {
  margin-left: 12px;
  transform: rotate(45deg);
  border-left: 1px solid rgb(216, 214, 214);
  border-bottom: 1px solid rgb(216, 214, 214);
}

.video-stoies__button-arrow_right {
  margin-left: 6px;
  transform: rotate(225deg);
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
