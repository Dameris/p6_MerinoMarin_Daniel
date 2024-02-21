<template>
	<section class="disneyCharacter">
		<div class="disneyCharacter__header">
			<h2>{{ character.name }}</h2>
		</div>
		<img
			class="disneyCharacter__img"
			:src="character['img-bg']"
			alt="Mickey Mouse Background"
		/>
		<section class="disneyCharacter__content">
			<div
				v-for="image in images"
				:key="image"
			>
				<img
					class="disneyCharacter__content-img"
					v-if="imageIndex === images.indexOf(image)"
					:src="character[image]"
					:alt="image"
				/>
			</div>
			<p class="disneyCharacter__context--bio">{{ character.bioFirst + "\n\n" + character.bioSecond }}</p>
			<button
				@click="changeImage"
				class="disneyCharacter__btn roll-in-left"
			>
				NEXT IMAGE
			</button>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				character: {},
				images: ["img-pf", "img1", "img2", "img3", "img4", "img5", "img6"],
				bioFirst: "",
				bioSecond: "",
				imageIndex: 0
			}
		},

		mounted() {
			this.fetchCharacters()
		},

		methods: {
			fetchCharacters() {
				fetch("/src/json/disneyCharacters.json")
					.then((response) => response.json())
					.then((data) => {
						this.character = data[0]
					})
					.catch((error) => {
						console.error("Error fetching characters:", error)
					})
			},

			changeImage() {
				this.imageIndex = (this.imageIndex + 1) % this.images.length
			}
		}
	}
</script>

<style scoped>
	.disneyCharacter {
		position: relative;
		background-color: #20286d;
	}

	.disneyCharacter__header {
		display: inline-block;
		position: absolute;
		padding: 5em;
		top: 0;
		left: 0;
		font-size: 3em;
	}

	.disneyCharacter__img {
		width: 100%;
	}

	.disneyCharacter__content {
		display: flex;
		align-items: center;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.disneyCharacter__context--bio {
		margin-right: 2em;
		margin-left: 2em;
		padding: 0 1em;
		color: #fff;
		white-space: pre-line;
	}

	.disneyCharacter__content-img {
		margin-left: 2em;
		width: 30em;
	}

	.disneyCharacter__btn {
		margin-right: 5em;
		padding: 1em;
		border-radius: 0.5em;
		cursor: pointer;
		font-size: 2em;
		background-color: #ff5757;
		transition: background-color 0.3s ease;
	}

	.disneyCharacter__btn:hover {
		background-color: rgb(255, 87, 87, 0.8);
	}

	.roll-in-left {
		-webkit-animation: roll-in-left 0.8s ease-out both;
		animation: roll-in-left 0.8s ease-out both;
	}

	/* Animation for btn */
	@-webkit-keyframes roll-in-left {
		0% {
			-webkit-transform: translateX(-800px) rotate(-540deg);
			transform: translateX(-800px) rotate(-540deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotate(0deg);
			transform: translateX(0) rotate(0deg);
			opacity: 1;
		}
	}

	@keyframes roll-in-left {
		0% {
			-webkit-transform: translateX(-800px) rotate(-540deg);
			transform: translateX(-800px) rotate(-540deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotate(0deg);
			transform: translateX(0) rotate(0deg);
			opacity: 1;
		}
	}
	/* End of animation for btn */

	/* Media query */
	@media (max-width: 400px) {
		.disneyCharacter__context--bio {
			margin-left: 0;
		}
	}

	@media (max-width: 570px) {
		.disneyCharacter__header {
			font-size: 18px;
		}

		.disneyCharacter__content {
			padding-top: 1em;
			padding-bottom: 1em;
		}

		.disneyCharacter__content-img {
			max-width: 20em;
		}
	}
	/* End of media query */
</style>
