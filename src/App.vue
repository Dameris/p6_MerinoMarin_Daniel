<template>
	<Header />
	<router-view />
	<Footer />
</template>

<script>
	import Header from "./components/shared/Header.vue"
	import Footer from "./components/shared/Footer.vue"

	export default {
		name: "App",
		components: {
			Header,
			Footer
		}
	}
</script>

<style></style>
