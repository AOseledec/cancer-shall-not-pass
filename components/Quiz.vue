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
      <button type class="popup__button popup__button_back">Назад</button>
      <button type class="popup__button popup__button_next">Далее</button>
    </form>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped></style>
