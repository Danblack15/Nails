<template>
	<div class="progress">
		<div class="progress__line" :style="progressLine">

		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			
		}
	},

	computed: {
		...mapGetters({
			indexSection: "data/getIndexSection"
		}),

		progressLine() {
			return {
				width: `calc(20% * ${this.indexSection + 1})`
			}
		},
	}
}
</script>

<style lang="scss">
@import './ProgressBar.scss';
</style>