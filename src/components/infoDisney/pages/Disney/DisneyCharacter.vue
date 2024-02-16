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
			<button
				@click="changeImage"
				class="disneyCharacter__btn"
			>
				Next Image
			</button>
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
			<p class="disneyCharacter__context--bio">{{ character.bio }}</p>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				character: {},
				images: ["img1", "img2", "img3", "img4", "img5", "img6"],
				bio: {},
				imageIndex: 0
			}
		},

		mounted() {
			this.fetchCharacters()
		},

		methods: {
			fetchCharacters() {
				fetch("../../../../../json/disneyCharacters.json")
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
		padding: 10px;
		top: 0;
		left: 0;
		background-color: rgba(255, 255, 255, 0.7);
	}

	.disneyCharacter__img {
		width: 100%;
	}

	.disneyCharacter__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.disneyCharacter__btn {
		margin-bottom: 1em;
	}

	.disneyCharacter__context--bio {
		color: #fff;
		text-align: center;
		padding: 0 1em;
	}

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
