<template>
	<header>
		<!-- Sección superior del encabezado -->
		<div>
			<nav class="headerTop">
				<Slide
					class="header__slideMenu"
					:closeOnNavigation="true"
				>
					<ul class="header__list--slide">
						<li>
							<router-link
								class="header__btn--logIn"
								to="logIn"
							>
								LOG IN
							</router-link>
						</li>
						<li>
							<router-link
								class="header__btn--signUp"
								to="signUp"
							>
								SIGN UP
							</router-link>
						</li>
						<li>
							<router-link
								to="favorites"
								class="header__link"
							>
								FAVORITES
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
				</Slide>
				<ul class="header__list">
					<li>
						<router-link
							to="favorites"
							class="header__link"
						>
							FAVORITES
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
				<router-link to="/">
					<img
						src="../img/logo_infoDisney.png"
						alt="InfoDisney Logo"
						class="header__logo"
					/>
				</router-link>
				<ul class="header__list">
					<li>
						<router-link
							class="header__btn--logIn"
							to="logIn"
						>
							LOG IN
						</router-link>
					</li>
					<li>
						<router-link
							class="header__btn--signUp"
							to="signUp"
						>
							SIGN UP
						</router-link>
					</li>
					<!-- <li>
						<button
							v-if="$store.auth.isAuthenticated"
							@click="logout"
						>
							Logout
						</button>
					</li>
					<li>
						<router-link
							v-if="$store.auth.isAuthenticated"
							to="/profile"
						>
							<img
								v-if="$store.auth.user && $store.auth.user.avatar"
								:src="$store.auth.user.avatar"
								alt="Profile"
							/>
						</router-link>
					</li> -->
				</ul>
			</nav>
		</div>
		<!-- Sección inferior del encabezado -->
		<div class="headerBottom">
			<input
				type="checkbox"
				id="__btnSwitch"
			/>
			<label
				for="__btnSwitch"
				class="header__btn--switch"
			/>
			<input
				type="search"
				name="search"
				class="header__searchInput"
				placeholder="SEARCH"
				spellcheck
			/>
		</div>
	</header>
</template>

<script>
	// import { useAuthStore } from "../auth/authStore.js"
	import { Slide } from "vue3-burger-menu"

	export default {
		components: {
			Slide
		}
		// methods: {
		// 	logout() {
		// 		useAuthStore().logout()
		// 	}
		// }
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

		.header__slideMenu {
			display: inline-block;
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
