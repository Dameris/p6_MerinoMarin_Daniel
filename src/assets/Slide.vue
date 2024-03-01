<template>
	<div class="slide">
		<!-- Imagen del slide -->
		<img
			:src="imageSrc"
			:alt="altText"
		/>
		<!-- Leyenda del slide -->
		<div class="caption">{{ caption }}</div>
	</div>
</template>

<script>
	export default {
		props: {
			// Propiedades recibidas por el componente
			imageSrc: {
				type: String,
				required: true
			},
			altText: {
				type: String,
				required: true
			},
			caption: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style scoped>
	.slide {
		position: relative;
		width: 100%;
	}

	.slide img {
		width: 100%;
		height: auto;
	}

	.caption {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 10px;
	}
</style>
