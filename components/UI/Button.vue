<template>
  <button
    :class="['button', `button_theme-${theme}`]"
    @click="$emit('btnClick')"
  >
    <slot>Some text</slot>
  </button>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.button {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  border: none;
  background: white;
  cursor: pointer;
  outline: none;
}
.button_theme-list {
  width: 58px;
  height: 58px;
  font-size: 18px;
  background-color: #f4f4f4;
  margin: 5px;
}
.button_theme-list:hover {
  background-color: #eee;
}
.button_theme-back {
  color: #c0c0c0;
}
.button_theme-purple {
  width: 280px;
  height: 52px;
  background: #613a93;
  line-height: 19px;
  color: #ffffff;
}
.button_theme-purple:hover {
  opacity: 0.9;
}
.button_theme-more {
  width: 100%;
  height: 82px;
  background: #fbfbfb;
  color: #000;
}
.button_theme-more:hover {
  background-color: #f8f8f8;
}
.button_theme-talk {
  font-size: 18px;
  line-height: 24px;
  color: #121212;
}
</style>
