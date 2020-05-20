<template>
  <div class="popup__content">
    <img src="../static/Group 12.png" alt="" class="popup__close" />
    <h3 class="popup__title">{{ title }}</h3>
    <p class="popup__subtitile">{{ question }}</p>
    <form class="popup__form" name="new">
      <input
        type="text"
        name="name"
        class="popup__input"
        placeholder="Напишите тут"
      />
      <Button :theme="'back'">Назад</Button>
      <Button :theme="'purple'">Далее</Button>
    </form>
  </div>
</template>

<script>
import Button from '@/components/UI/Button';

export default {
  props: {
    title: {
      required: true,
      default: 'Шаг 1 из 12',
      type: String,
    },
    question: {
      required: true,
      default: 'Как Вас зовут?',
      type: String,
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.popup__close {
  width: 35px;
  position: absolute;
  top: 35px;
  right: 35px;
  cursor: pointer;
}
.popup__content {
  width: 920px;
  min-height: 600px;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  padding: 40px 40px;
}
.popup__title {
  margin: 0;
  font-size: 32px;
  line-height: 36px;
}
.popup__subtitle {
  padding-top: 40px;
  font-size: 18px;
  line-height: 24px;
}
.popup__input {
  width: 100%;
  height: 47px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 14px;
  line-height: 17px;
  box-sizing: border-box;
  padding: 5px 6px 13px;
  margin-top: 24px;
}
</style>
