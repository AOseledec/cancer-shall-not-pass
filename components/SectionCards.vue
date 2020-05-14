<template>
  <div class="section-cards"><slot> </slot></div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-cards {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
