<template>
	<div>
		<img
			src="../../../img/disney_pixar.png"
			class="characterPage__image"
			alt="Home image"
		/>
		<section class="characterPage__section">
			<nav class="characterPage__section--nav">
				<img
					src="../../../img/pixar_logo_bg.png"
					class="characterPageSection__titleImage"
					alt="Disney Logo"
				/>
				<ul class="characterPage__section--ul">
					<li
						v-for="character in characters"
						:key="character.id"
					>
						<nav class="characterPage__section--li">
							<img
								:src="character.images['img1']"
								class="characterPageSection__image"
								:alt="'Image ' + character.name"
							/>
							<span class="characterPageSection__text">
								<router-link
									:to="'/disneyCharacter/' + character.id"
									class="characterPageSection__link"
								>
									{{ character.name }}
								</router-link>
							</span>
						</nav>
					</li>
				</ul>
				<router-link
					to="/"
					class="characterPage__linkBack"
				>
					BACK
				</router-link>
			</nav>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				characters: []
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
						this.characters = data
					})
					.catch((error) => {
						console.error("Error fetching characters:", error)
					})
			}
		}
	}
</script>

<style scoped>
	@import "../../../../assets/css/main.css";

	.characterPage__section--nav {
		background-color: #54acfb;
	}
</style>
