<template>
	<div class="error-alert">
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
	.error-alert {
		background-color: #ffcccc;
		border: 1px solid #ff0000;
		color: #ff0000;
		padding: 10px;
	}
</style>
