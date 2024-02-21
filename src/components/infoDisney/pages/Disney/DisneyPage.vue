<template>
	<div>
		<img
			src="../../../img/disney_castle.png"
			class="characterPage__image"
			alt="Home image"
		/>
		<section class="characterPage__section">
			<nav class="characterPage__sectionDisney">
				<img
					src="../../../img/disney_logo_bg.png"
					class="homeSection__titleImage"
					alt="Disney Logo"
				/>
				<ul class="characterPage__section--ul">
					<p class="characterPage__section--p">
						<li
							v-for="character in characters"
							:key="character"
						>
							<nav class="characterPage__section--li">
								<img
									src="character.img-pf"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="{ name: 'character', params: { id: character.id } }"
										class="characterPageSection__link"
										>{{ character.name }}</router-link
									></span
								>
							</nav>
						</li>
					</p>
				</ul>
				<!-- <li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>MINNIE MOUSE</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>ELSA</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
					</p>
					<p class="characterPage__section--p">
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>MICKEY MOUSE</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>MINNIE MOUSE</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>ELSA</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
					</p>
					<p class="characterPage__section--p">
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>MICKEY MOUSE</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>MINNIE MOUSE</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>ELSA</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
					</p>
					<p class="characterPage__section--p">
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>MICKEY MOUSE</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>MINNIE MOUSE</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>ELSA</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
						<li>
							<nav class="characterPage__section--li">
								<img
									src="../../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
									class="characterPageSection__image"
									alt="Section image"
								/>
								<span class="characterPageSection__text"
									><router-link
										to="disneyCharacter"
										class="characterPageSection__link"
										>STICH</router-link
									></span
								>
							</nav>
						</li>
					</p>
				</ul> -->
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
						this.character = data[0]
					})
					.catch((error) => {
						console.error("Error fetching characters:", error)
					})
			}
		}
	}
</script>

<style scoped>
	.characterPage__image {
		width: 100%;
	}

	.characterPage__sectionDisney {
		min-height: 50vh;
		padding-right: 5em;
		padding-left: 5em;
		text-align: center;
		background-color: #20286d;
	}

	.homeSection__titleImage {
		padding: 1vh;
	}

	.characterPage__section--ul {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		padding-bottom: 2em;
		color: #fff;
		list-style: none;
	}

	.characterPage__section--li {
		margin-bottom: 2em;
		text-align: center;
	}

	.characterPageSection__text {
		display: block;
		margin-top: 0.5rem;
	}

	.characterPageSection__link {
		color: #fff;
	}
</style>
