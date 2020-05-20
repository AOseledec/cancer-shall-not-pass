<template>
  <div>
    <slot></slot>
    <SectionCards>
      <StoriesCard v-for="n in 8" :key="n"></StoriesCard>
    </SectionCards>
    <Button :theme="'more'">Больше статей</Button>
  </div>
</template>

<script>
import StoriesCard from '@/components/StoriesCard';
import Button from '@/components/UI/Button';
import SectionCards from '@/components/SectionCards';
import Split from '@/components/Split';

export default {
  components: {
    StoriesCard,
    Button,
    SectionCards,
    Split,
  },
};
</script>

<style scoped></style>
