<template>
  <div class="arrow">
    <span class="arrow-left"></span>
    <span class="arrow-right"></span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.arrow {
  position: relative;
  cursor: pointer;
  margin: 20px;
  width: 36px;
  height: 12px;
}
.arrow-left {
  position: absolute;
  background-color: white;
  top: 5px;
  left: -2px;
  width: 22px;
  height: 2px;
  display: block;
  transform: rotate(35deg);
}

.arrow-right {
  position: absolute;
  background-color: white;
  top: 5px;
  left: 15px;
  width: 22px;
  height: 2px;
  display: block;
  transform: rotate(-35deg);
}
</style>
