<template>
	<div class="userProfile">
		<p class="userProfile__p">
			<!-- Info del usuario -->
			<img src="/src/components/img/pfp.png" /> <br />
			<strong class="userProfile__strong"> {{ user.firstName }} </strong> <br />
			<strong class="userProfile__strong"> {{ user.lastName }} </strong> <br />
			<strong class="userProfile__strong"> {{ user.email }} </strong> <br />
			<strong class="userProfile__strong"> {{ user.country.toUpperCase() }} </strong> <br />
			<strong class="userProfile__strong"> {{ user.gender.toUpperCase() }} </strong>
		</p>
	</div>
</template>

<script>
	export default {
		computed: {
			user() {
				// Obtener los datos del usuario del localStorage
				const userData = localStorage.getItem("user")
				if (userData) {
					// Parsear los datos del usuario desde el localStorage
					return JSON.parse(userData)
				} else {
					return null
				}
			}
		}
	}
</script>

<style scoped>
	.userProfile {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
	}

	.userProfile__p {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 5em;
		background-color: #ff5757;
	}

	img {
		padding-bottom: 2em;
	}

	.userProfile__strong {
		align-items: center;
		background-color: #000;
		color: #fff;
		padding: 0.5em 2em;
		border-radius: 0.5em;
	}
</style>
