<template>
  <section class="portfolio">
    <div class="portfolio__wrapper wrapper-sec">
      <img src="@/assets/svg/background-figure/bg-portfolio.svg" alt="background" class="portfolio__back" />

      <div class="portfolio__content">
        <h3>Примеры моих работ</h3>

        <PortfolioSlider />
      </div>

      <img 
        src="@/assets/svg/scroll/portfolio.svg" 
        alt="scroll-down"
        class="scroll-hint"
      />
    </div>
  </section>
</template>

<script>
import PortfolioSlider from '@/components/PortfolioSlider/PortfolioSlider'

export default {
  components: {
    PortfolioSlider
  }
}
</script>

<style lang="scss">
@import "./PortfolioPage.scss";
</style>