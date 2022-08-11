<template>
  <section class="home">
    <div class="home__wrapper wrapper-sec">
      <img src="@/assets/svg/background-figure/bg-home.svg" alt="bg" class="home__background" />

      <div class="home__content">
        <div class="home__content-general">
          <h2 class="home__content-name">Намитова<br />Александра</h2>
          <ButtonUI class="home__content-btn">ЗАПИСАТЬСЯ</ButtonUI>
          <div class="home__content-socials">
            <h4 class="home__content-subtitle">More information:</h4>
            <div class="home__content-items">
              <a href="#" class="home__content-item">
                <img src="@/assets/svg/telegram.svg" alt="telegram" />
              </a>
              <a href="#" class="home__content-item">
                <img src="@/assets/svg/instagram.svg" alt="instagram" />
              </a>
              <a href="#" class="home__content-item">
                <img src="@/assets/svg/whatsapp.svg" alt="whatsapp" />
              </a>
              <a href="#" class="home__content-item">
                <img src="@/assets/svg/vk.svg" alt="vk" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <ArmsHome class="home__animations" /> -->

    </div>
  </section>
</template>

<script>
import ArmsHome from '@/components/ArmsHome/ArmsHome'

export default {
  components: {
    ArmsHome
  }
};
</script>

<style lang="scss">
@import "./HomePage.scss";
</style>