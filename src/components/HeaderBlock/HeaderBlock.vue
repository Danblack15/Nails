<template>
	<header class="header">
		<LogoBlock />
		<ProgressBar />
		<Navbar />
	</header>
</template>

<script>
import LogoBlock from '@/components/LogoBlock/LogoBlock'
import Navbar from '@/components/Navbar/Navbar'
import ProgressBar from '@/components/ProgressBar/ProgressBar'

export default {
    components: { 
			LogoBlock,
			Navbar,
			ProgressBar
		}
}
</script>

<style lang="scss">
@import './HeaderBlock.scss';
</style>