<template>
	<div class="slider-item">
		<div class="slider-item__img">
			<img :src="imgImport" alt="nails">
		</div>

		<div class="slider-item__text">
			<p>{{ nails.text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		nails: {
			type: Object,
			default: null
		}
	},

	computed: {
    imgImport() {
      return require(`@/assets/img/slider/${this.nails.img}`)
    }
  },

	name: 'SliderItem'
}
</script>

<style lang="scss">
@import './SliderItem.scss';
</style>