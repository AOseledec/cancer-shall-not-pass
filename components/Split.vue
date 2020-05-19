<template>
  <div :class="['split', className]">
    <h2 class="split__title">
      <slot></slot>
      <span class="split__title_bold">#ЭТОНЕЛЕЧИТСЯ</span>
    </h2>
  </div>
</template>

<script>
import Container from '@/components/Container';

export default {
  props: {
    className: String,
  },
  components: {
    Container,
  },
};
</script>

<style scoped>
.split {
  background-color: #613a93;
  display: flex;
  justify-content: center;
}

.split__title {
  color: #fff;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  max-width: 750px;
  margin: 20px auto;
}

.split__title_bold {
  font-weight: bold;
}
</style>
