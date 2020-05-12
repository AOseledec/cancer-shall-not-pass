<template>
  <div class="popup__content">
    <img src="" alt="" class="popup__close" />
    <h3 class="popup__title">{{ title }}</h3>
    <p class="popup__subtitile">{{ question }}</p>
    <form class="popup__form" name="new">
      <input
        type="text"
        name="name"
        class="popup__input"
        placeholder="Напишите тут"
      />
      <ButtonNext />
      <ButtonBack />
    </form>
  </div>
</template>

<script>
import ButtonNext from '@/components/UI/ButtonNext';
import ButtonBack from '@/components/UI/ButtonBack';
export default {
  props: {
    title: {
      required: true,
      default: 'Титле',
      type: String,
    },
    question: {
      required: true,
      default: 'Вопрос',
      type: String,
    },
  },
  components: {
    ButtonNext,
    ButtonBack,
  },
};
</script>

<style lang="scss" scoped></style>
