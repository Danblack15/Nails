<template>
	<section class="slider">
		<swiper 
			:modules="modules"
			class="slider__swiper" 
			:slides-per-view="3" 
			:space-between="50" 
			@slideChange="onSlideChange" 
			loop
			autoplay
		>
			<swiper-slide 
				class="slider__item"
				v-for="nails in allNails"
				:key="nails.img"
			>
				<SliderItem :nails="nails"/>
			</swiper-slide>

			<SwiperNext />
			<SwiperPrev />

			<div class="slider__line slider__line--left"></div>
			<div class="slider__line slider__line--right"></div>
		</swiper>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';

import SwiperNext from '@/components/SwiperNext/SwiperNext'
import SwiperPrev from '@/components/SwiperPrev/SwiperPrev'
import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
	components: {
		Swiper,
		SwiperSlide,
		SwiperNext,
		SwiperPrev
	},

	setup() {
		const onSwiper = (swiper) => {
			//console.log(swiper);
		}
		const onSlideChange = () => {
			console.log('slide change');
		}
		return {
			onSwiper,
			onSlideChange,
			modules: [Autoplay]
		}
	},

	computed: {
		...mapGetters({
			allNails: "data/getNailsImg"
		})
	}
}
</script>

<style lang="scss">
@import './PortfolioSlider.scss';
</style>