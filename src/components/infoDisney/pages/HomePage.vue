<template>
	<div>
		<img
			src="../../img/disney100.png"
			class="home__image"
			alt="Home image"
		/>
		<section class="home__section">
			<!-- Sección Disney -->
			<nav class="home__sectionDisney">
				<img
					src="../../img/disney_logo_bg.png"
					class="homeSection__titleImage"
					alt="Section image"
				/>
				<ul class="home__section--ul">
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/mickey-mouse/33631_mickey_mouse_character_disney.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/disneyCharacter/1"
									class="homeSection__link"
									>MICKEY MOUSE</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/minnie-mouse/33631_minnie_mouse_character_disney.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/disneyCharacter/2"
									class="homeSection__link"
									>MINNIE MOUSE</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/elsa/33631_elsa_character_disney.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/disneyCharacter/3"
									class="homeSection__link"
									>ELSA</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/stitch/33631_stitch_character_disney.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/disneyCharacter/4"
									class="homeSection__link"
									>STICH</router-link
								></span
							>
						</nav>
					</li>
				</ul>
				<router-link
					to="disneyPage"
					class="homeSection__link"
					>MORE</router-link
				>
			</nav>

			<!-- Sección Pixar -->
			<nav class="home__sectionPixar">
				<img
					src="../../img/pixar_logo_bg.png"
					class="homeSection__titleImage"
					alt="Section image"
				/>
				<ul class="home__section--ul">
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/woody/33631_woody_character_pixar.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/pixarCharacter/1"
									class="homeSection__link"
									>WOODY</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/buzz/33631_buzz_lightyear_character_pixar.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/pixarCharacter/2"
									class="homeSection__link"
									>BUZZ LIGHTYEAR</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/wall-e/36814_wall-e_pixar.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/pixarCharacter/3"
									class="homeSection__link"
									>WALL-E</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/rayo/33631_lightning_mcqueen_character_pixar.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/pixarCharacter/4"
									class="homeSection__link"
									>LIGHTNING MCQUEEN</router-link
								></span
							>
						</nav>
					</li>
				</ul>
				<router-link
					to="pixarPage"
					class="homeSection__link"
					>MORE</router-link
				>
			</nav>

			<!-- Sección Star Wars -->
			<nav class="home__sectionStarWars">
				<img
					src="../../img/starwars_logo_bg.png"
					class="homeSection__titleImage"
					alt="Section image"
				/>
				<ul class="home__section--ul">
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/r2d2/33631_r2-d2_character_starwars.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/star-warsCharacter/1"
									class="homeSection__link"
									>R2-D2</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/darth/33631_darth_vader_character_starwars.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/star-warsCharacter/2"
									class="homeSection__link"
									>DARTH VADER</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/han/36814_han-solo_character_starwars.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/star-warsCharacter/3"
									class="homeSection__link"
									>HAN SOLO</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/grogu/33631_the_child_character_starwars.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/star-warsCharacter/4"
									class="homeSection__link"
									>GROGU</router-link
								></span
							>
						</nav>
					</li>
				</ul>
				<router-link
					to="star-warsPage"
					class="homeSection__link"
					>MORE</router-link
				>
			</nav>

			<!-- Sección Marvel -->
			<nav class="home__sectionMarvel">
				<img
					src="../../img/marvel_logo_bg.png"
					class="homeSection__titleImage"
					alt="Section image"
				/>
				<ul class="home__section--ul">
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/spiderman/33631_spider-man_character_marvel.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/marvelCharacter/1"
									class="homeSection__link"
									>SPIDER-MAN</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/hulk/33631_hulk_character_marvel.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/marvelCharacter/2"
									class="homeSection__link"
								>HULK</router-link
							></span>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/AMERICA/33631_captain_america_character_marvel.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/marvelCharacter/3"
									class="homeSection__link"
									>CAPTAIN AMERICA</router-link
								></span
							>
						</nav>
					</li>
					<li>
						<nav class="home__section--li">
							<img
								src="../../img/json_img/panther/33631_black_panther_character_marvel.png"
								class="homeSection__image"
								alt="Section image"
							/>
							<span class="homeSection__text"
								><router-link
									to="/marvelCharacter/4"
									class="homeSection__link"
									>BLACK PANTHER</router-link
								></span
							>
						</nav>
					</li>
				</ul>
				<router-link
					to="marvelPage"
					class="homeSection__link"
					>MORE</router-link
				>
			</nav>
		</section>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	.home__image {
		width: 100%;
	}

	.home__sectionDisney,
	.home__sectionPixar,
	.home__sectionStarWars,
	.home__sectionMarvel {
		min-height: 50vh;
		padding-right: 5em;
		padding-left: 5em;
		text-align: center;
	}

	.home__sectionDisney {
		background-color: #20286d;
	}

	.home__sectionPixar {
		background-color: #54acfb;
	}

	.home__sectionStarWars {
		background-color: #000;
	}

	.home__sectionMarvel {
		background-color: #c51d23;
	}

	.homeSection__titleImage {
		padding: 1vh;
	}

	.home__section--ul {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		padding-bottom: 2em;
		color: #fff;
		list-style: none;
	}

	.home__section--li {
		text-align: center;
	}

	.homeSection__text {
		display: block;
		margin-top: 0.5rem;
	}

	.homeSection__link {
		color: #fff;
	}

	@media (max-width: 700px) {
		.home__section--ul {
			flex-direction: column;
			align-items: center;
		}

		.home__section--li {
			margin-bottom: 2em;
		}
	}

	@media (max-width: 1200px) {
		.home__section--ul {
			flex-wrap: wrap;
			justify-content: center;
		}

		.home__section--li {
			width: 50%;
			padding: 0 4em;
			box-sizing: border-box;
		}

		.homeSection__text {
			padding-bottom: 2em;
		}
	}
</style>
