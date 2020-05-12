<template>
  <div class="popup">
    <img src="/cross.svg" alt="" />
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
</style>
