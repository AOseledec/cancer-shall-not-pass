<template>
  <div class="popup">
    <div class="popup__content">
      <img src="" alt="" class="popup__close" />
      <h3 class="popup__title">{{ title }}</h3>
      <p class="popup__subtitile">{{ subtitle }}</p>
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  /* display: none; */
}
.popup__title {
  margin: 0;
  font-size: 24px;
  line-height: 30px;
}
.popup__subtitle {
  font-size: 24px;
  line-height: 30px;
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
  margin-bottom: 24px;
}
.popup__content {
  width: 430px;
  min-height: 330px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  padding: 34px 36px;
}
.popup__close {
  width: 26px;
  position: absolute;
  top: -26px;
  right: -26px;
  cursor: pointer;
}
.popup__button {
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 48px;
  color: rgba(0, 0, 0, 0.2);
  font-size: 36px;
}
</style>
