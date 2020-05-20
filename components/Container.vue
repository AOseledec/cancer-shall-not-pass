<template>
  <div :class="['container', className]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    className: String,
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  padding-left: 60px;
  padding-right: 60px;
  margin: 0 auto;
}

@media screen and (max-width: 1280px) {
  .container {
    padding-left: 0px 50px;
    padding-right: 0px 50px;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    padding-left: 0px 40px;
    padding-right: 0px 40px;
  }
}

@media screen and (max-width: 320px) {
  .container {
    padding-left: 0px 15px;
    padding-right: 0px 15px;
  }
}
</style>
