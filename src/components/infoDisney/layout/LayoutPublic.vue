<template>
	<main>
		<router-view />
	</main>
</template>

<script>
	import Header from "@/components/shared/Header.vue"
	import Footer from "@/components/shared/Footer.vue"

	export default {
		name: "LayoutPublic",
		components: {
			Header,
			Footer
		}
	}
</script>

<style></style>
