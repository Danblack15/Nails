<template>
	<section class="wrapper">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<HeaderBlock id="menu"/>
			<HomePage class="section wrapper__section" />
			<AboutPage class="section wrapper__section" />
			<PortfolioPage class="section wrapper__section" />
			<PricePage class="section wrapper__section" />
			<SingUpPage class="section wrapper__section" />
		</full-page>
	</section>

</template>

<script>
import { mapActions } from "vuex"

import HomePage from "@/views/HomePage/HomePage"
import AboutPage from "@/views/AboutPage/AboutPage"
import PortfolioPage from "@/views/PortfolioPage/PortfolioPage"
import PricePage from "@/views/PricePage/PricePage"
import SingUpPage from "@/views/SingUpPage/SingUpPage"
import HeaderBlock from "@/components/HeaderBlock/HeaderBlock"

export default {
	components: {
    HomePage,
    AboutPage,
    PortfolioPage,
    PricePage,
    SingUpPage,
    HeaderBlock
},

	data() {
		return {
			options: {
				licenseKey: 'GPLV3',
				anchors: ["home", "about", "portfolio", "price", "noti"],
				menu: "#menu",
				afterRender: this.fullPageLoaded,
				dragAndMove: true,
				keyboardScrolling: true,
				credits: {
					enabled: false
				},
				onLeave: this.leave
			},

			indexSection: 0
		};
	},

	methods: {
		fullPageLoaded() {
			console.log('FullPage.js загружен')
			this.newIndexSection(0)
		},

		leave(index, nextIndex, direction) {
			this.newIndexSection(nextIndex.index)
		},

		...mapActions({
			newIndexSection: "data/newSectionIndex"
		})
	}
}
</script>

<style lang="scss">
@import './GeneralPage.scss';
</style>