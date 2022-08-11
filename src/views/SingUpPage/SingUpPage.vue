<template>
  <section class="sing-up">
    SingUp Page
    <button class="prev" @click="$parent.$parent.$refs.fullpage.api.moveSectionUp()">
      Prev
    </button>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './SingUpPage.scss';
</style>