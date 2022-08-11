<template>
	<div @click="swiper.slideNext()" class="swiper-next">
		<img src="@/assets/svg/arrow.svg" alt="next">
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
@import './SwiperNext.scss';
</style>