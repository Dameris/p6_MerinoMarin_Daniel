<template>
	<div class="formBox">
		<img
			src="../img/logo_infoDisney.png"
			alt="InfoDisney Logo"
		/>
		<p class="formBox__title">
			WELCOME BACK TO <br />
			<strong>INFO DISNEY</strong>
		</p>
		<!-- Formulario log in -->
		<form
			class="formBox-form"
			id="formContact"
			@submit.prevent="checkForm"
		>
			<input
				class="formBox-form__input"
				type="email"
				title="email"
				name="email"
				placeholder="EMAIL"
				required
				v-model="formData.email"
				@input="validateEmail"
			/>
			<span
				v-if="emailError"
				class="formBox-form--errorMessage"
				>Please enter a valid email address.</span
			>
			<input
				class="formBox-form__input"
				type="password"
				title="password"
				name="password"
				placeholder="PASSWORD"
				required
				v-model="formData.password"
				@input="validatePassword"
			/>
			<span
				v-if="passwordError"
				class="formBox-form--errorMessage"
				>Please enter a valid password.</span
			>
			<button
				class="formBox-form__btn"
				type="submit"
				title="log_in"
				name="log_in"
			>
				LOG IN
			</button>
		</form>
		<p class="logIn__link-signUp">
			Not a Member?
			<router-link
				to="signup"
				id="link"
				>SIGN UP</router-link
			>
		</p>
	</div>
</template>

<script>
	import { openDB } from "idb"
	import store from "@/stores/userStore"

	export default {
		data() {
			return {
				pageTitle: "Log In Info Disney",
				// Objeto para almacenar los datos del formulario
				formData: {
					email: "",
					password: ""
				},

				// Variables para controlar los errores de validación de los campos del formulario
				emailError: false,
				passwordError: false,

				// IndexedDB
				db: null
			}
		},

		async created() {
			// Inicializa la base de datos cuando el componente se crea
			this.db = await openDB("myAppDatabase", 1, {
				upgrade(db) {
					const userStore = db.createObjectStore("users", { keyPath: "id", autoIncrement: true })
					userStore.createIndex("email", "email", { unique: true })
					userStore.createIndex("password", "password", { unique: false })
					userStore.createIndex("firstName", "firstName", { unique: false })
					userStore.createIndex("lastName", "lastName", { unique: false })
					userStore.createIndex("country", "country", { unique: false })
					userStore.createIndex("gender", "gender", { unique: false })

					const favoritesStore = db.createObjectStore("favorites", { keyPath: "id", autoIncrement: true })
					favoritesStore.createIndex("userId", "userId")
				}
			})
		},

		methods: {
			// Método para validar el formulario antes de enviarlo
			async checkForm() {
				if (this.emailError || this.passwordError) {
					alert("All input fields must contain valid information.")
				} else {
					const user = await this.getUserByEmailAndPassword(this.formData.email, this.formData.password)

					if (user) {
						alert("Login successful!")

						// Restablecer los datos del formulario
						this.formData.email = ""
						this.formData.password = ""

						store.dispatch("login", user)
						this.$router.push("/private")
					} else {
						// Usuario no encontrado, mostrar mensaje de error
						alert("Invalid email or password. Please try again.")
					}
				}
			},

			async getUserByEmailAndPassword(email, password) {
				// Abre una transacción de lectura en el almacén de objetos de usuarios
				const tx = this.db.transaction("users", "readonly")
				const userStore = tx.objectStore("users")
				const index = userStore.index("email")

				// Busca el usuario por su correo electrónico
				const cursor = await index.openCursor(email)
				if (cursor) {
					const user = cursor.value
					// Verifica la contraseña del usuario
					if (user.password === password) {
						return user
					}
				}
				return null
			},

			// Método para validar el formato del correo electrónico
			validateEmail() {
				const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
				this.emailError = !emailPattern.test(this.formData.email)
			},

			// Método para validar el formato de la contraseña
			validatePassword() {
				const lengthRegex = /.{8,}/
				const upperCaseRegex = /[A-Z]/
				const specialCharRegex = /[*, +, -, ., @, #, %, &, _, ~, ^, /, <, >]/

				const hasLength = lengthRegex.test(this.formData.password)
				const hasUpperCase = upperCaseRegex.test(this.formData.password)
				const hasSpecialChar = specialCharRegex.test(this.formData.password)

				this.passwordError = !hasLength || !hasUpperCase || !hasSpecialChar
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/css/main.css";

	.logIn__link-signUp {
		margin-top: 1em;
		font-size: small;
		color: rgb(0, 0, 0, 0.7);
	}

	.logIn__link-signUp #link {
		color: #ff5757;
	}

	/* Media query */
	@media (max-width: 500px) {
		.formBox {
			padding: 0 2em;
		}

		.formBox__title {
			font-size: 1.5em;
		}

		.formBox-form__input,
		.form__textarea,
		.formBox-form__btn {
			width: 100%;
			margin-bottom: 1em;
		}
	}

	@media (max-width: 700px) {
		.formBox {
			padding: 0 2em;
		}

		.formBox__title {
			font-size: 1.5em;
		}

		.formBox-form__input,
		.form__textarea,
		.formBox-form__btn {
			width: 30em;
			margin-bottom: 1em;
		}
	}
	/* End of media query */
</style>
