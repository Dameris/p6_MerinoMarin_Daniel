<template>
	<div>
		<img
			src="../../img/disney100.png"
			class="home__image"
			alt="Home image"
		/>
		<section class="home__section">
			<nav class="home__sectionDisney">
				<img
					src="../../img/disney_logo_bg 1.png"
					class="homeSection__titleImage"
					alt="Section image"
				/>
				<ul class="home__section_ul">
					<li>
						<img
							src="../../img/33631_mickey_mouse_character_disney.png"
							class="homeSection__image"
							alt="Section image"
						/>
						<span class="homeSection__text"
							><router-link
								to="disneyCharacter"
								class="homeSection__link"
								>Mickey Mouse</router-link
							></span
						>
					</li>
					<li>
						<img
							src="../../img/33631_mickey_mouse_character_disney.png"
							class="homeSection__image"
							alt="Section image"
						/>
					</li>
					<li>
						<img
							src="../../img/33631_mickey_mouse_character_disney.png"
							class="homeSection__image"
							alt="Section image"
						/>
					</li>
					<li>
						<img
							src="../../img/33631_mickey_mouse_character_disney.png"
							class="homeSection__image"
							alt="Section image"
						/>
					</li>
				</ul>
			</nav>
		</section>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	.home__image {
		width: 100%;
	}

	.home__sectionDisney {
		background-color: #20286d;
		text-align: center;
		padding-right: 1em;
		padding-left: 1em;
	}

	.homeSection__titleImage {
		padding: 1vh;
	}

	.home__section_ul {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		margin-bottom: 30vh;
		color: #fff;
		list-style: none;
	}

	.homeSection__text {
		display: block;
		margin-top: 0.5rem;
	}

	.homeSection__link {
		color: #fff;
	}
</style>
