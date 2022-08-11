<template>
	<div @click="swiper.slidePrev()" class="swiper-prev">
		<img src="@/assets/svg/arrow.svg" alt="prev">
	</div>
</template>

<script>
import { useSwiper } from 'swiper/vue';

export default {
	setup() {
		const swiper = useSwiper();

		return {
			swiper,
		};
	},
}
</script>

<style lang="scss">
@import './SwiperPrev.scss';
</style>