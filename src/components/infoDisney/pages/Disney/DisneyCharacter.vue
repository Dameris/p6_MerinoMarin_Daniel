<template>
	<section class="characterPage">
		<!-- Encabezado de la página del personaje -->
		<div class="characterPage__header">
			<h2>{{ character.name }}</h2>
		</div>
		<!-- Imagen de fondo del personaje -->
		<img
			class="characterPage__img"
			:src="character['img-bg']"
			alt="Mickey Mouse Background"
		/>
		<section class="characterPage__content">
			<!-- Contenido de la página del personaje -->
			<div v-if="character.images">
				<!-- Imagen del personaje -->
				<img
					class="characterPage__content-img"
					:v-if="character.images['img' + (imageIndex + 1)]"
					:src="character.images['img' + (imageIndex + 1)]"
					:alt="'Image ' + (imageIndex + 1)"
				/>
			</div>
			<!-- Biografía del personaje -->
			<p class="characterPage__context--bio">{{ character.bioFirst + "\n\n" + character.bioSecond }}</p>
			<!-- Botón para cambiar la imagen -->
			<button
				@click="changeImage"
				class="characterPage__btn roll-in-left"
			>
				NEXT IMAGE
			</button>
		</section>
		<!-- Enlace para volver a la página de Disney -->
		<router-link
			to="/disneyPage"
			class="characterPage__linkBack"
		>
			BACK
		</router-link>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				character: {},
				imageIndex: 0
			}
		},

		mounted() {
			// Método que se ejecuta al montar el componente
			this.fetchCharacters()
		},

		methods: {
			fetchCharacters() {
				// Función para obtener los datos del personaje desde el archivo JSON
				fetch("/disneyCharacters.json")
					.then((response) => response.json())
					.then((data) => {
						const id = parseInt(this.$route.params.id)
						this.character = data.find((character) => character.id === id)
					})
					.catch((error) => {
						console.error("Error fetching characters:", error)
					})
			},

			changeImage() {
				// Método para cambiar la imagen del personaje
				if (this.character.images) {
					this.imageIndex = (this.imageIndex + 1) % Object.keys(this.character.images).length
				}
			}
		}
	}
</script>

<style scoped>
	@import "/src/assets/css/main.css";

	.characterPage {
		background-color: #20286d;
	}

	/* Media query */
	@media (max-width: 400px) {
		.characterPage__context--bio {
			margin-left: 0;
		}
	}

	@media (max-width: 570px) {
		.characterPage__header {
			font-size: 18px;
		}

		.characterPage__content {
			padding-top: 1em;
			padding-bottom: 1em;
		}

		.characterPage__content-img {
			max-width: 20em;
		}
	}
	/* End of media query */
</style>
