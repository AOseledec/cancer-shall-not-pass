<template>
  <div>
    <section class="graf">
      <h2 class="graf__title">Статистика по онкозаболеваниям</h2>
      <div class="graf__conainer">
        <div class="graf__block">
          <h3 class="graf__block-title">
            Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918
            000 человек.
          </h3>
          <div class="graf__info">
            <div class="graf__back-line">
              <div class="graf__front-line"></div>
            </div>
            <p class="graf__stat">1 из 3</p>
            <p class="graf__author">Левада-Центр 2018</p>
          </div>
        </div>

        <div class="graf__block">
          <h3 class="graf__block-title">2,6% Россиян имеют онкозаболевания.</h3>
          <div class="graf__info">
            <div class="graf__back-line">
              <div class="graf__front-line-small"></div>
            </div>
            <p class="graf__stat">3 700 000</p>
            <p class="graf__author">Росстат 2018</p>
          </div>
        </div>

        <div class="graf__block">
          <h3 class="graf__block-title">
            На 28% выросла доля выявления заболеваний на ранней стадии за 10
            лет.
          </h3>
          <div class="graf__info">
            <div class="graf__top-line"></div>
            <div class="graf__bottom-line"></div>
            <p class="graf__stat">↑28%</p>
            <p class="graf__author">МНИОИ Герцена 2018</p>
          </div>
        </div>

        <div class="graf__block">
          <h3 class="graf__block-title">
            На 25% снизилась смертность в течение первого года после постановки
            диагноза.
          </h3>
          <div class="graf__info">
            <div class="graf__top-line-2"></div>
            <div class="graf__bottom-line-2"></div>
            <p class="graf__stat">↓25%</p>
            <p class="graf__author">МНИОИ Герцена 2018</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.graf {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-width: 1440px;
}

.graf__title {
  width: 300px;
  margin-top: 100px;
  margin-left: 60px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.graf__conainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 70px 60px 100px 60px;
}

.graf__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
}

.graf__block-title {
  font-size: 12px;
  line-height: 16px;
  margin: 20px;
}

.graf__back-line {
  width: 260px;
  height: 40px;
  margin: 20px 20px;
  background-color: #f4f4f4;
  z-index: 2;
}

.graf__front-line {
  width: 86px;
  height: 40px;
  z-index: 1;
  background-color: #613a93;
}

.graf__front-line-small {
  width: 7px;
  height: 40px;
  z-index: 1;
  background-color: #613a93;
}

.graf__top-line {
  width: 160px;
  height: 20px;
  background-color: #f4f4f4;
}

.graf__bottom-line {
  width: 208px;
  height: 20px;
  background-color: #613a93;
}

.graf__top-line-2 {
  width: 190px;
  height: 20px;
  background-color: #f4f4f4;
}

.graf__bottom-line-2 {
  width: 142px;
  height: 20px;
  background-color: #613a93;
}

.graf__stat {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin-top: 20px;
  margin-right: 20px;
}

.graf__author {
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  text-align: right;
  margin: 20px;
}
</style>
