<template>
  <div>
    <slot></slot>
    <SectionCards>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
      <StoriesCard></StoriesCard>
    </SectionCards>
    <ButtonMoreStory />
  </div>
</template>

<script>
import StoriesCard from '@/components/StoriesCard';
import ButtonMoreStory from '@/components/ButtonMoreStory';
import SectionCards from '@/components/SectionCards';
import Split from '@/components/Split';

export default {
  components: {
    StoriesCard,
    ButtonMoreStory,
    SectionCards,
    Split,
  },
};
</script>

<style scoped></style>
