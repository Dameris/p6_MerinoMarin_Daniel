<template>
	<section class="aboutPage">
		<div class="aboutPage__content">
			<h2><strong>ABOUT US</strong></h2>
			<p>
				At <mark>InfoDisney</mark>, we are passionate about sharing the magic and fun of the Disney universe with people
				of all ages and from all corners of the world. Our mission is to provide our visitors with a unique experience
				filled with information, entertainment, and nostalgia. We believe in the magic of dreams and in the importance
				of keeping imagination alive. Join our community and embark on the wonderful adventure that is the world of
				Disney.
			</p>
		</div>
		<img
			src="../../img/mickey.png"
			class="aboutPage__img"
		/>
	</section>
</template>

<script>
	export default {}
</script>

<style scoped>
	.aboutPage {
		position: relative;
	}

	.aboutPage__img {
		width: 100%;
		filter: brightness(0.5);
	}

	.aboutPage__content {
		position: absolute;
		top: 50%;
		left: 50%;
		padding: 0 2em;
		text-align: center;
		color: #fff;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.aboutPage__content h2 {
		margin-bottom: 0.5em;
	}

	.aboutPage__content strong {
		font-size: 2.5em;
	}

	.aboutPage__content p {
		text-align: justify;
	}

	/* Media queries */
	@media (max-width: 768px) {
		.aboutPage__content {
			font-size: 0.6em;
		}
	}

	@media (max-width: 480px) {
		.aboutPage__content {
			font-size: 0.5em;
		}
	}
	/* End of media queries */
</style>
