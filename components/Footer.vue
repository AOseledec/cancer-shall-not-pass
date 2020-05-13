<template>
  <footer class="footer">
    <div class="footer__up">
      <div class="footer__gratitude">
        <h2 class="footer__gratitude-text">
          Спасибо всем, кто помог состояться этому проекту
        </h2>
      </div>
      <nav class="footer__nav">
        <a href="" class="nav__link">Главная</a>
        <a href="" class="nav__link">Истории</a>
      </nav>
      <div class="footer__social">
        <a href="" class="footer__social-links">Мы в Инстаграме и Youtube</a>
        <ShareButton />
      </div>
    </div>
    <div class="footer__down">
      <div class="footer__copyright">
        <p class="footer__copyright-text">Рак Лечится 2020</p>
        <p class="footer__copyright-text">
          Сделано студентами Яндекс Практикум
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import ShareButton from '@/components/UI/ShareButton';
export default {
  components: {
    ShareButton,
  },
};
</script>

<style scoped>
.footer {
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  background-color: #fbfbfb;
}

.footer__up {
  display: flex;
  margin-left: 60px;
  margin-right: 60px;
}

.footer__down {
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 60px;
}

.footer__gratitude {
  margin-top: 60px;
}

.footer__gratitude-text {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  max-width: 340px;
}

.footer__nav {
  margin: 60px 379px auto 113px;
  display: flex;
}

.nav__link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-left: 34.5px;
  text-decoration: none;
  color: #000000;
}

.nav__link:first-child {
  margin: 0;
}

.footer__social {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 60px;
  margin-bottom: 84px;
}

.footer__social-links {
  margin-bottom: 44px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
}

.footer__copyright {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}

.footer__copyright-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

@media screen and (max-width: 1280px) {
  .footer__up {
    margin-left: 50px;
    margin-right: 50px;
  }

  .footer__down {
    margin-left: 50px;
    margin-right: 50px;
  }

  .footer__gratitude-text {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
  }

  .nav__link {
    font-size: 18px;
  }

  .footer__social-links {
    font-size: 16px;
  }

  .footer__copyright-text {
    font-size: 16px;
  }

  .footer__nav {
    margin: 60px 336px auto 102px;
  }

  @media screen and (max-width: 1024px) {
    .footer__gratitude-text {
      font-size: 24px;
      line-height: 28px;
    }

    .footer__nav {
      margin: 60px 223px auto 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .footer__nav {
      margin: 60px 85px auto 30px;
      flex-direction: column;
    }

    .nav__link {
      margin: 0;
      margin-top: 14px;
    }
  }

  @media screen and (max-width: 590px) {
    .footer__copyright-text {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 590px) {
    .footer__up {
      display: flex;
      flex-direction: column;
    }

    .footer__copyright {
      display: flex;
      flex-direction: column;
    }

    .footer__copyright-text {
      font-size: 13px;
      line-height: 18px;
      width: 100%;
    }

    .footer__gratitude {
      margin-top: 50px;
    }

    .footer__nav {
      margin: 50px 0 auto 0;
      flex-direction: column;
    }

    .footer__social {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin-top: 18px;
      margin-bottom: 50px;
    }

    .footer__social-links {
      margin-bottom: 18px;
      font-size: 13px;
    }

    .footer__copyright-text {
      margin-top: 18px;
    }

    .footer__copyright-text:first-child {
      margin: 0;
    }

    .footer__social-links:nth-last-child(1) {
      margin: 0;
    }

    .footer__down {
      margin: 0;
      margin-left: 15px;
      margin-bottom: 50px;
    }

    .footer__up {
      margin-left: 15px;
    }

    .nav__link {
      font-size: 13px;
    }
  }
}
</style>
