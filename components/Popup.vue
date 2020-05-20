<template>
  <div class="popup" @click.self="togglePopup">
    <div class="popup__content">
      <img
        @click="togglePopup"
        class="popup__cross"
        src="/cross.svg"
        alt="Закрыть"
      />
      <slot>Some form</slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    togglePopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.popup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0px;
}
.popup__content {
  position: relative;
  margin: 150px auto;
  padding: 40px;
  width: 920px;
  height: 600px;
  background-color: white;
}
.popup__cross {
  position: absolute;
  top: 36px;
  right: 36px;
}
</style>
