<template>
	<section class="aboutPage">
		<img
			src="../../img/mickey.png"
			class="aboutPage__img"
		/>
		<p class="aboutPage__info">
			<h2><strong>ABOUT US</strong></h2> <br />
			At <mark>InfoDisney</mark>, we are passionate about sharing the magic and fun of the Disney universe with people
			of all ages and from all corners of the world. Our mission is to provide our visitors with a unique experience
			filled with information, entertainment, and nostalgia. We believe in the magic of dreams and in the importance of
			keeping imagination alive. Join our community and embark on the wonderful adventure that is the world of Disney.
		</p>
	</section>
</template>

<script>
	export default {}
</script>

<style scoped>
	.aboutPage__img {
		width: 100%;
	}

	.aboutPage__info {
		margin-left: 25em;
		margin-right: 25em;
		padding-bottom: 2em;
		text-align: justify;
	}

	.aboutPage__info h2 {
		text-align: center;
	}

	.aboutPage__info strong {
		font-size: 4em;
	}

	/* Media query */
	@media (max-width: 480px) {
		.aboutPage__info {
			margin-left: 1em;
			margin-right: 1em;
		}

		.aboutPage__info strong {
			font-size: 2.5em;
		}
	}

	@media (max-width: 768px) {
		.aboutPage__info {
			margin-left: 2em;
			margin-right: 2em;
		}

		.aboutPage__info strong {
			font-size: 3em;
		}
	}
	/* End of media query */
</style>
