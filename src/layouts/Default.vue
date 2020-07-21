<template>
	<div>
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from '../components/modules/Header'

export default {
	components: {
		Header
	}
}
</script>

<style>

</style>