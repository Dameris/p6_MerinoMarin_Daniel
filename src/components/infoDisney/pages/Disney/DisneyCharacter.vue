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
		<div
			v-for="image in images"
			:key="image"
		>
			<img
				v-if="imageIndex === images.indexOf(image)"
				:src="character[image]"
				:alt="image"
			/>
		</div>
		<button @click="changeImage">Next Image</button>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				character: {},
				images: ["img1", "img2", "img3", "img4", "img5", "img6"],
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
</style>
