<template>
  <div class="section-cards"><slot> </slot></div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-cards {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
</style>
