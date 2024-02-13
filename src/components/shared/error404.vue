<template>
	<div class="error404 rollLeftError">
		<section class="heartbeat">
			<h1>ERROR 404</h1>
			<img
				src="../img/logo_infoDisney.svg"
				alt="InfoDisney Logo"
				class="error404__logo"
			/>
			<h1>PAGE NOT</h1>
			<h1>FOUND</h1>
		</section>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	.error404 {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-left: 36em;
		margin-right: 36em;
		padding-top: 5em;
		padding-bottom: 5em;
		text-align: center;
		background-color: rgb(255, 87, 87, 60%);
	}

	/* Animation for error 404 */
	.rollLeftError {
		-webkit-animation: rollLeftError 0.6s ease-out both;
		animation: rollLeftError 0.6s ease-out both;
	}

	@-webkit-keyframes rollLeftError {
		0% {
			-webkit-transform: translateX(-800px) rotate(-540deg);
			transform: translateX(-800px) rotate(-540deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotate(0deg);
			transform: translateX(0) rotate(0deg);
			opacity: 1;
		}
	}
	@keyframes rollLeftError {
		0% {
			-webkit-transform: translateX(-800px) rotate(-540deg);
			transform: translateX(-800px) rotate(-540deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotate(0deg);
			transform: translateX(0) rotate(0deg);
			opacity: 1;
		}
	}

	.heartbeat {
		-webkit-animation: heartbeat 1.5s ease-in-out infinite both;
		animation: heartbeat 1.5s ease-in-out infinite both;
	}

	@-webkit-keyframes heartbeat {
		from {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: center center;
			transform-origin: center center;
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		10% {
			-webkit-transform: scale(0.91);
			transform: scale(0.91);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		17% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		33% {
			-webkit-transform: scale(0.87);
			transform: scale(0.87);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		45% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}
	@keyframes heartbeat {
		from {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: center center;
			transform-origin: center center;
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		10% {
			-webkit-transform: scale(0.91);
			transform: scale(0.91);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		17% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		33% {
			-webkit-transform: scale(0.87);
			transform: scale(0.87);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		45% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}
	/* End of animation for error 404 */

	.error404 h1 {
		font-size: 4em;
		font-weight: 400;
	}

	.error404__logo {
		width: 40em;
		padding-top: 2em;
	}
</style>
