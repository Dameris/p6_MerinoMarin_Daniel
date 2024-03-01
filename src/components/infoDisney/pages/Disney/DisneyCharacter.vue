<template>
	<section class="characterPage">
		<div class="characterPage__header">
			<h2>{{ character.name }}</h2>
		</div>
		<img
			class="characterPage__img"
			:src="character['img-bg']"
			alt="Mickey Mouse Background"
		/>
		<section class="characterPage__content">
			<div v-if="character.images">
				<img
					class="characterPage__content-img"
					:v-if="character.images['img' + (imageIndex + 1)]"
					:src="character.images['img' + (imageIndex + 1)]"
					:alt="'Image ' + (imageIndex + 1)"
				/>
			</div>
			<p class="characterPage__context--bio">{{ character.bioFirst + "\n\n" + character.bioSecond }}</p>
			<button
				@click="changeImage"
				class="characterPage__btn roll-in-left"
			>
				NEXT IMAGE
			</button>
		</section>
		<router-link
			to="/disneyPage"
			class="characterPage__linkBack"
		>
			BACK
		</router-link>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				character: {},
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
						const id = parseInt(this.$route.params.id)
						this.character = data.find((character) => character.id === id)
					})
					.catch((error) => {
						console.error("Error fetching characters:", error)
					})
			},

			changeImage() {
				if (this.character.images) {
					this.imageIndex = (this.imageIndex + 1) % Object.keys(this.character.images).length
				}
			}
		}
	}
</script>

<style scoped>
	@import "/src/assets/css/main.css";

	.characterPage {
		background-color: #20286d;
	}

	/* Media query */
	@media (max-width: 400px) {
		.characterPage__context--bio {
			margin-left: 0;
		}
	}

	@media (max-width: 570px) {
		.characterPage__header {
			font-size: 18px;
		}

		.characterPage__content {
			padding-top: 1em;
			padding-bottom: 1em;
		}

		.characterPage__content-img {
			max-width: 20em;
		}
	}
	/* End of media query */
</style>
