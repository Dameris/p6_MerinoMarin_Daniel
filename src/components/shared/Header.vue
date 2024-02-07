<template>
	<header>
		<!-- Sección superior del encabezado -->
		<div class="header__top">
			<nav>
				<ul class="header__list">
					<li>
						<router-link
							to="favorites"
							class="header__links"
						>
							FAVORITES
						</router-link>
					</li>
					<li>
						<router-link
							to="about-us"
							class="header__links"
						>
							ABOUT US
						</router-link>
					</li>
				</ul>
			</nav>
			<router-link to="/">
				<img
					src="../img/logo_infoDisney.png"
					alt="InfoDisney Logo"
					class="header__logo"
				/>
			</router-link>
			<nav>
				<ul class="header__list">
					<li>
						<router-link
							to="logIn"
							class="btn__logIn"
						>
							LOG IN
						</router-link>
					</li>
					<li>
						<router-link
							to="signUp"
							class="btn__signUp"
						>
							SIGN UP
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<!-- Sección inferior del encabezado -->
		<div class="headerBottom">
			<input
				type="checkbox"
				id="__btn__switch"
			/>
			<label
				for="__btn__switch"
				class="btn__switch"
			/>
			<input
				type="search"
				name="search"
				class="search_input"
				placeholder="SEARCH"
				spellcheck
			/>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style>
	.header__top,
	.headerBottom {
		display: flex;
		justify-content: space-between;
		padding-left: 1vw;
		padding-right: 1vw;
	}

	.header__top {
		align-items: center;
		min-height: 10vh;
		background-color: #fff;
	}

	.header__list {
		display: flex;
		list-style-type: none;
	}

	.header__links {
		margin-right: 0.5vw;
		color: #ff5757;
		text-decoration: none;
	}

	.header__links:hover {
		color: #ffafaf;
	}

	.header__links:focus {
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

	/* Emd pf animation for header logo */

	.btn__logIn,
	.btn__signUp {
		padding: 1vh 1vw;
		margin-right: 0.5vw;
		color: #fff;
		border: none;
		border-radius: 0.3vw;
		cursor: pointer;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	.btn__logIn {
		background-color: #ffafaf;
	}

	.btn__signUp {
		background-color: #ff5757;
	}

	.btn__logIn:hover {
		background-color: #ffcfcf;
	}

	.btn__signUp:hover {
		background-color: #ff7777;
	}

	.btn__logIn:focus,
	.btn__signUp:focus {
		outline: none;
	}

	.btn__logIn:active,
	.btn__signUp:active,
	.header__links:active {
		transform: translateY(1px);
	}

	.headerBottom {
		align-items: center;
		min-height: 5vh;
		background-color: #ff5757;
	}

	/* Button Switch for Dark/Light Mode */
	.btn__switch {
		display: inline-block;
		position: relative;
		width: 55px;
		height: 30px;
		border-radius: 100px;
		cursor: pointer;
	}

	#__btn__switch ~ .btn__switch {
		background: #fff;
		transition: all ease 0.6s;
	}

	.btn__switch::after {
		position: absolute;
		width: 22px;
		height: 22px;
		top: 4px;
		left: 5px;
		content: "";
		border-radius: 100px;
		background: #000;
		transition: all ease 0.6s;
	}

	#__btn__switch:checked ~ .btn__switch::after {
		left: 28px;
		background: #fff;
		transition: all ease 0.6s;
	}

	#__btn__switch:checked ~ .btn__switch {
		background: #000;
		transition: all ease 0.6s;
	}

	#__btn__switch {
		display: none;
	}

	/* End of Button Switch */
</style>
