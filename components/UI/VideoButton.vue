<template>
  <div class="container">
    <button class="item">
      <div class="item-arrow item-arrow_left"></div>
    </button>
    <button class="item">
      <div class="item-arrow item-arrow_right"></div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.item {
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  border: none;
  outline: none;
  cursor: pointer;
}
.item:hover {
  background-color: #f0f0f0;
}

.item-arrow {
  display: block;
  width: 12px;
  height: 12px;
}

.item-arrow_left {
  margin-left: 12px;
  transform: rotate(45deg);
  border-left: 1px solid rgb(216, 214, 214);
  border-bottom: 1px solid rgb(216, 214, 214);
}

.item-arrow_right {
  margin-left: 6px;
  transform: rotate(225deg);
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
