<template>
	<header>
		<!-- Sección superior del encabezado -->
		<div>
			<nav class="headerTop">
				<!-- Botón para abrir el menú deslizable -->
				<button
					class="btn__open--slideMenu"
					id="btn__open--slideMenu"
					@click="openSlide"
				>
					OPEN
				</button>
				<!-- Menú deslizable -->
				<nav
					class="header__slideMenu"
					id="header__slideMenu"
					:class="{ visible: isOpen }"
				>
					<!-- Botón para cerrar el menú deslizable -->
					<button
						class="btn__close--slideMenu"
						id="btn__close--slideMenu"
						@click="closeSlide"
					>
						CLOSE
					</button>
					<!-- Lista de elementos del menú deslizable -->
					<ul class="header__list--slide">
						<li v-if="!isAuthenticated">
							<router-link
								class="header__btn--logIn"
								to="/logIn"
							>
								LOG IN
							</router-link>
						</li>
						<li v-if="!isAuthenticated">
							<router-link
								class="header__btn--signUp"
								to="/signUp"
							>
								SIGN UP
							</router-link>
						</li>
						<li v-if="isAuthenticated">
							<router-link
								class="header__btn--logIn"
								to="/private/userProfile"
							>
								PROFILE
							</router-link>
						</li>
						<li v-if="isAuthenticated">
							<router-link
								class="header__btn--signUp"
								to="/"
								@click="logout"
							>
								LOG OUT
							</router-link>
						</li>
						<li>
							<!-- Enlace a la página del trivial, dependiendo del estado de autenticación -->
							<router-link
								:to="isAuthenticated ? '/private/triviaGame' : 'triviaGame'"
								class="header__link"
							>
								TRIVIA
							</router-link>
						</li>
						<li>
							<router-link
								to="about-us"
								class="header__link"
							>
								ABOUT US
							</router-link>
						</li>
					</ul>
				</nav>
				<!-- Lista de elementos del menú principal -->
				<ul class="header__list">
					<li>
						<!-- Enlace a la página del trivial, dependiendo del estado de autenticación -->
						<router-link
							:to="isAuthenticated ? '/private/triviaGame' : 'triviaGame'"
							class="header__link"
						>
							TRIVIA
						</router-link>
					</li>
					<li>
						<router-link
							to="about-us"
							class="header__link"
						>
							ABOUT US
						</router-link>
					</li>
				</ul>
				<!-- Enlace al inicio -->
				<router-link to="/">
					<img
						src="../img/logo_infoDisney.png"
						alt="InfoDisney Logo"
						class="header__logo"
					/>
				</router-link>
				<!-- Lista de elementos del menú dependiendo del estado de autenticación -->
				<ul class="header__list">
					<li v-if="!isAuthenticated">
						<router-link
							class="header__btn--logIn"
							to="/logIn"
						>
							LOG IN
						</router-link>
					</li>
					<li v-if="!isAuthenticated">
						<router-link
							class="header__btn--signUp"
							to="/signUp"
						>
							SIGN UP
						</router-link>
					</li>
					<li v-if="isAuthenticated">
						<router-link
							class="header__btn--logIn"
							to="/private/userProfile"
						>
							PROFILE
						</router-link>
					</li>
					<li v-if="isAuthenticated">
						<router-link
							class="header__btn--signUp"
							to="/"
							@click="logout"
						>
							LOG OUT
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<!-- Sección inferior del encabezado -->
		<div class="headerBottom">
			<!-- Botón de conmutación para el modo oscuro / claro -->
			<input
				type="checkbox"
				id="__btnSwitch"
			/>
			<label
				for="__btnSwitch"
				class="header__btn--switch"
			/>
			<!-- Campo de búsqueda -->
			<div class="header__searchContainer">
				<input
					type="search"
					name="search"
					class="header__searchInput"
					placeholder="SEARCH"
					spellcheck
					v-model="searchQuery"
					@input="search"
				/>
				<!-- Desplegable de resultados de búsqueda -->
				<ul
					v-if="searchResults.length > 0"
					class="header__searchDropdown"
				>
					<li
						v-for="result in searchResults"
						:key="result.id"
						@click="selectResult(result)"
					>
						<!-- Muestra la imagen si está disponible -->
						<img
							v-if="result.images && result.images.img1"
							:src="result.images.img1"
							class="header__searchImage"
						/>
						<!-- Muestra el nombre del personaje -->
						<span>{{ result.name }}</span>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
	import store from "@/stores/userStore"

	export default {
		data() {
			return {
				searchQuery: "",
				searchData: [],
				searchResults: [],
				isOpen: false
			}
		},

		mounted() {
			this.loadData()
		},

		computed: {
			isAuthenticated() {
				return store.state.isAuthenticated
			}
		},

		methods: {
			async loadData() {
				try {
					// Cargar los datos de los 4 archivos JSON
					const responses = await Promise.all([
						fetch("/disneyCharacters.json"),
						fetch("/pixarCharacters.json"),
						fetch("/starwarsCharacters.json"),
						fetch("/marvelCharacters.json")
					])

					// Procesar las respuestas JSON
					const data = await Promise.all(responses.map((response) => response.json()))
					this.searchData = data.flat()
				} catch (error) {
					console.error("Error fetching characters:", error)
				}
			},

			search() {
				if (this.searchQuery.trim() === "") {
					this.searchResults = []
					return
				}

				// Realizar la búsqueda en los datos
				this.searchResults = this.searchData.filter((item) =>
					item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
				)
			},

			openSlide() {
				this.isOpen = true
			},

			closeSlide() {
				this.isOpen = false
			},

			logout() {
				store.dispatch("logout")
			},

			toggleDarkMode() {
				document.body.classList.toggle("dark-mode")
			}
		}
	}
</script>

<style scoped>
	.headerTop,
	.headerBottom {
		display: flex;
		justify-content: space-between;
		padding-left: 1em;
		padding-right: 1em;
	}

	.headerTop {
		align-items: center;
		min-height: 5em;
		background-color: #fff;
	}

	.btn__open--slideMenu,
	.btn__close--slideMenu {
		display: none;
	}

	.header__slideMenu {
		display: none;
	}

	.header__list,
	.header__list--slide {
		display: flex;
		list-style-type: none;
	}

	.header__list--slide li {
		padding-top: 1em;
	}

	.header__link {
		margin-right: 0.5em;
		color: #ff5757;
		text-decoration: none;
	}

	.header__link:hover {
		color: #ffafaf;
	}

	.header__link:focus {
		outline: none;
	}

	/* Animation for header logo */
	.header__logo {
		-webkit-animation: text-flicker-in-glow 4s linear both;
		animation: text-flicker-in-glow 4s linear both;
	}

	@-webkit-keyframes text-flicker-in-glow {
		0% {
			opacity: 0;
		}

		10% {
			opacity: 0;
			text-shadow: none;
		}

		10.1% {
			opacity: 1;
			text-shadow: none;
		}

		10.2% {
			opacity: 0;
			text-shadow: none;
		}

		20% {
			opacity: 0;
			text-shadow: none;
		}

		20.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
		}

		20.6% {
			opacity: 0;
			text-shadow: none;
		}

		30% {
			opacity: 0;
			text-shadow: none;
		}

		30.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		30.5% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		30.6% {
			opacity: 0;
			text-shadow: none;
		}

		45% {
			opacity: 0;
			text-shadow: none;
		}

		45.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		50% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		55% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		55.1% {
			opacity: 0;
			text-shadow: none;
		}

		57% {
			opacity: 0;
			text-shadow: none;
		}

		57.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}

		60% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}

		60.1% {
			opacity: 0;
			text-shadow: none;
		}

		65% {
			opacity: 0;
			text-shadow: none;
		}

		65.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		75% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		75.1% {
			opacity: 0;
			text-shadow: none;
		}

		77% {
			opacity: 0;
			text-shadow: none;
		}

		77.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4),
				0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		85% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4),
				0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		85.1% {
			opacity: 0;
			text-shadow: none;
		}

		86% {
			opacity: 0;
			text-shadow: none;
		}

		86.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45),
				0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		100% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45),
				0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
	}

	@keyframes text-flicker-in-glow {
		0% {
			opacity: 0;
		}

		10% {
			opacity: 0;
			text-shadow: none;
		}

		10.1% {
			opacity: 1;
			text-shadow: none;
		}

		10.2% {
			opacity: 0;
			text-shadow: none;
		}

		20% {
			opacity: 0;
			text-shadow: none;
		}

		20.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
		}

		20.6% {
			opacity: 0;
			text-shadow: none;
		}

		30% {
			opacity: 0;
			text-shadow: none;
		}

		30.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		30.5% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		30.6% {
			opacity: 0;
			text-shadow: none;
		}

		45% {
			opacity: 0;
			text-shadow: none;
		}

		45.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		50% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		55% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}

		55.1% {
			opacity: 0;
			text-shadow: none;
		}

		57% {
			opacity: 0;
			text-shadow: none;
		}

		57.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}

		60% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}

		60.1% {
			opacity: 0;
			text-shadow: none;
		}

		65% {
			opacity: 0;
			text-shadow: none;
		}

		65.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		75% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		75.1% {
			opacity: 0;
			text-shadow: none;
		}

		77% {
			opacity: 0;
			text-shadow: none;
		}

		77.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4),
				0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		85% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4),
				0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		85.1% {
			opacity: 0;
			text-shadow: none;
		}

		86% {
			opacity: 0;
			text-shadow: none;
		}

		86.1% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45),
				0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}

		100% {
			opacity: 1;
			text-shadow:
				0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45),
				0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
	}
	/* End of animation for header logo */

	.header__btn--logIn,
	.header__btn--signUp {
		padding: 0.6em 1em;
		margin-right: 0.5em;
		color: #fff;
		border: none;
		border-radius: 0.3em;
		cursor: pointer;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	.header__btn--logIn {
		background-color: #ffafaf;
	}

	.header__btn--signUp {
		background-color: #ff5757;
	}

	.header__btn--logIn:hover {
		background-color: #ffcfcf;
	}

	.header__btn--signUp:hover {
		background-color: #ff7777;
	}

	.header__btn--logIn:focus,
	.header__btn--signUp:focus {
		outline: none;
	}

	.header__btn--logIn:active,
	.header__btn--signUp:active,
	.header__link:active {
		transform: translateY(1em);
	}

	.headerBottom {
		align-items: center;
		min-height: 3em;
		background-color: #ff5757;
	}

	/* Button Switch for Dark/Light Mode */
	.header__btn--switch {
		display: inline-block;
		position: relative;
		width: 3.5em;
		height: 1.9em;
		border-radius: 100em;
		cursor: pointer;
	}

	#__btnSwitch ~ .header__btn--switch {
		background: #fff;
		transition: all ease 0.6s;
	}

	.header__btn--switch::after {
		position: absolute;
		width: 1.4em;
		height: 1.4em;
		top: 0.25em;
		left: 0.32em;
		content: "";
		border-radius: 100em;
		background: #000;
		transition: all ease 0.6s;
	}

	#__btnSwitch:checked ~ .header__btn--switch::after {
		left: 1.65em;
		background: #fff;
		transition: all ease 0.6s;
	}

	#__btnSwitch:checked ~ .header__btn--switch {
		background: #000;
		transition: all ease 0.6s;
	}

	#__btnSwitch {
		display: none;
	}
	/* End of Button Switch */

	.header__searchContainer {
		position: relative;
	}

	.header__searchInput {
		width: 22em;
		padding: 0.6em 1em;
		margin-right: 0.5em;
		border: none;
		border-radius: 0.3em;
		color: #ff5757;
		background-color: #f5f5f5;
		box-shadow:
			0 2em 4em rgba(0, 0, 0, 0.1),
			background-color 0.3s,
			box-shadow 0.3s;
	}

	.header__searchInput::placeholder {
		color: #ff5757;
	}

	.header__searchInput:focus {
		outline: none;
		background-color: #fff;
		box-shadow: 0 4em 8em rgba(0, 0, 0, 0.1);
	}

	/* Drop down for search results */
	.header__searchDropdown {
		position: absolute;
		max-height: 15em;
		width: 100%;
		padding: 0.2em 0;
		margin: 0;
		top: calc(100% + 0.4em);
		left: 0;
		border: 0.1em solid #ccc;
		border-radius: 0.5em;
		box-shadow: 0 2em 0.5em rgba(0, 0, 0, 0.1);
		z-index: 1000;
		overflow-y: auto;
		color: #fff;
		background-color: #ffafaf;
	}

	.header__searchDropdown li {
		padding: 0.5em;
		list-style: none;
		cursor: pointer;
	}

	.header__searchDropdown li:hover {
		background-color: #ff5757;
	}

	.header__searchImage {
		width: 10em;
		height: 10em;
		margin-right: 10em;
	}
	/* End of Drop down for search results */

	/* Media query */
	@media (max-width: 400px) {
		.headerTop,
		.headerBottom {
			padding-left: 0.5em;
			padding-right: 0.5em;
		}

		.header__list,
		.header__list--slide {
			flex-direction: column;
			align-items: center;
		}

		.header__list li,
		.header__list--slide li {
			margin-top: 0.5em;
			margin-bottom: 0.3em;
		}

		.header__logo {
			max-width: 8em; /* Reducir el tamaño del logo para pantallas pequeñas */
		}

		.header__searchInput {
			width: 12em; /* Ajustar el ancho del campo de búsqueda */
		}
	}

	@media (max-width: 570px) {
		.headerTop,
		.headerBottom {
			padding-left: 1em;
			padding-right: 1em;
		}

		.header__list,
		.header__list--slide {
			flex-direction: column;
			align-items: center;
		}

		.header__list li {
			margin-top: 0.8em;
			margin-bottom: 0.8em;
		}

		.header__logo {
			max-width: 10em;
		}

		.header__searchInput {
			width: 15em;
		}
	}

	@media (max-width: 700px) {
		.headerTop {
			align-items: center;
		}

		.header__list {
			display: none;
		}

		.btn__open--slideMenu,
		.btn__close--slideMenu {
			display: block;
			border: 0;
			font-size: 1em;
			background-color: transparent;
			cursor: pointer;
		}

		.btn__open--slideMenu {
			color: #ff5757;
		}

		.btn__close--slideMenu {
			color: #ff5757;
		}

		.header__slideMenu {
			opacity: 0;
			visibility: hidden;
			display: flex;
			flex-direction: column;
			align-items: end;
			gap: 1rem;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			background-color: #1c1c1c;
			padding: 2rem;
			box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);
			z-index: 1;
		}

		.header__slideMenu.visible {
			opacity: 1;
			visibility: visible;
		}

		.header__list--slide {
			flex-direction: column;
			align-items: center;
		}

		.header__logo {
			max-width: 10em;
		}

		.header__searchInput {
			width: 15em;
		}
	}
	/* End of media query */
</style>
