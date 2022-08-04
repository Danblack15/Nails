<template>
	<section class="wrapper">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<HomePage class="section wrapper__section" />
			<AboutPage class="section wrapper__section" />
			<PortfolioPage class="section wrapper__section" />
			<PricePage class="section wrapper__section" />
			<SingUpPage class="section wrapper__section" />
		</full-page>
	</section>

</template>

<script>
import HomePage from "@/views/HomePage/HomePage"
import AboutPage from "@/views/AboutPage/AboutPage"
import PortfolioPage from "@/views/PortfolioPage/PortfolioPage"
import PricePage from "@/views/PricePage/PricePage"
import SingUpPage from "@/views/SingUpPage/SingUpPage"

export default {
	components: {
		HomePage,
		AboutPage,
		PortfolioPage,
		PricePage,
		SingUpPage
	},

	data() {
		return {
			options: {
				licenseKey: 'GPLV3',
				menu: "#menu",
				anchors: ["home", "about", "portfolio", "price", "noti"]
			},
		};
	},
}
</script>

<style lang="scss">
@import './GeneralPage.scss';
</style>