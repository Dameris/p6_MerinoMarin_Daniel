<template>
	<!-- Loader -->
	<div
		v-if="!showContent"
		class="loader__container"
	>
		<div class="loader"></div>
	</div>

	<div v-else>
		<img
			src="../../../img/pixar_wp.png"
			class="characterListPage__image"
			alt="Home image"
		/>
		<section class="characterListPage__section">
			<nav class="characterListPage__section--nav">
				<img
					src="../../../img/pixar_logo_bg.png"
					class="characterListPageSection__titleImage"
					alt="Disney Logo"
				/>
				<ul class="characterListPage__section--ul">
					<li
						v-for="character in characters"
						:key="character.id"
					>
						<nav class="characterListPage__section--li">
							<img
								:src="character.images['img1']"
								class="characterListPageSection__image"
								:alt="'Image ' + character.name"
							/>
							<span class="characterListPageSection__text">
								<router-link
									:to="'/pixarCharacter/' + character.id"
									class="characterListPageSection__link"
								>
									{{ character.name }}
								</router-link>
							</span>
						</nav>
					</li>
				</ul>
				<router-link
					to="/"
					class="characterListPage__linkBack"
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
				characters: [],
				showContent: false
			}
		},

		mounted() {
			this.fetchCharacters()

			setTimeout(() => {
				this.showContent = true
			}, 1000)
		},

		methods: {
			fetchCharacters() {
				fetch("/pixarCharacters.json")
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

	.characterListPage__section--nav {
		background-color: #54acfb;
	}
</style>
