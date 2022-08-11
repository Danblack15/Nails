<template>
  <button class="button">
    <p class="button__text"><slot></slot></p>
    <span class="button__liquid"></span>
  </button>
</template>

<script>
export default {
    name: 'ButtonUI'
};
</script>

<style lang="scss">
@import "./ButtonUI.scss";
</style>