<template>
	<div class="success-alert">
		<p>{{ message }}</p>
	</div>
</template>

<script>
	export default {
		props: {
			message: String
		}
	}
</script>
<style scoped>
	.success-alert {
		background-color: #ccffcc;
		border: 1px solid #00ff00;
		color: #00ff00;
		padding: 10px;
	}
</style>
