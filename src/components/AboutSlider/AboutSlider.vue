<template>
	<div class="slider-about">
		<section :class="['slider-about__slider', {
			'slider-about__slider--active': slideIndex == 1
		}]">
			<div class="slider-about__box">
				<img src="https://cars-from-canada.com/wp-content/uploads/2022/07/porshe-1.jpeg" alt="img"/>
				<img
					src="https://s1.cdn.autoevolution.com/images/news/gallery/porsche-exclusive-manufaktur-gives-panamera-blue-wheels-sportdesign-package_2.jpg" 
					alt="img"
					:class="{'slider-about__box--active': slideIndex == 1}"
				/>
			</div>
			<img 
				src="@/assets/svg/arrow.svg" 
				alt="next" 
				:class="['slider-about__arrow', {
					'slider-about__arrow--active': slideIndex == 1
				}]"
				@click="changeSlider"
			/>
		</section>

		<div :class="['slider-about__text', {
			'slider-about__text--active': slideIndex == 1
		}]">
			<div :class="['slider-about__text-wrapper', {
				'slider-about__text--fadeIn': slideIndex == 0
			}]" v-if="slideIndex == 0">
				<h4>Обо мне</h4>
				<p>Текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее</p>
				<p>Стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается
				при простой дубликации "Здесь ваш текст..</p>
			</div>

			<div :class="['slider-about__text-wrapper slider-about__text-second', {
				'slider-about__text--fadeIn': slideIndex == 1
			}]" v-else>
				<h4>Второй блок</h4>
				<p>Капуста баклаажн растишка бобы, лучше чтобы было так. Чо тут будет я хз.</p>
				<p>Стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается
				при простой дубликации КУКУШКА</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slideIndex: 0
		}
	},

	methods: {
		changeSlider() {
			if (this.slideIndex == 0) {
				this.slideIndex = 1
			} else {
				this.slideIndex = 0
			}
		}
	}
}
</script>

<style lang="scss">
@import './AboutSlider.scss';
</style>