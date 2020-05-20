<template>
  <div class="container">
    <Button :theme="'list'" v-for="n in 7" :key="n">{{ n }}</Button>
  </div>
</template>

<script>
import Button from '@/components/UI/Button';
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
