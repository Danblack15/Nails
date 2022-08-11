<template>
  <section class="about">
    <div class="about__wrapper wrapper-sec">
      <img src="@/assets/svg/background-figure/bg-about.svg" alt="background" class="about__back" />

      <AboutSlider />
    </div>
  </section>
</template>

<script>
import AboutSlider from "@/components/AboutSlider/AboutSlider"

export default {
  components: {
    AboutSlider
  }
}
</script>

<style lang="scss">
@import "./AboutPage.scss";
</style>