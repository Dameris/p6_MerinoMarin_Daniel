<template>
	<!-- Loader -->
	<div
		v-if="!showContent"
		class="loader__container"
	>
		<div class="loader"></div>
	</div>

	<div
		v-else
		class="formBox"
	>
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

		<SuccessAlert
			v-if="showSuccessAlert"
			:message="successMessage"
		/>
		<ErrorAlert
			v-if="showErrorAlert"
			:message="errorMessage"
		/>
	</div>
</template>

<script>
	import { openDB } from "idb"
	import store from "@/stores/userStore"

	import SuccessAlert from "../shared/SuccessAlert.vue"
	import ErrorAlert from "../shared/ErrorAlert.vue"

	export default {
		components: {
			SuccessAlert,
			ErrorAlert
		},

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

				// Variables para controlar las alertas
				showSuccessAlert: false,
				showErrorAlert: false,
				successMessage: "",
				errorMessage: "",

				// IndexedDB
				db: null,

				showContent: false
			}
		},

		mounted() {
			setTimeout(() => {
				this.showContent = true
			}, 1000)
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
					this.showErrorAlert = true
					this.errorMessage = "All input fields must contain valid information."

					// Limpiar el mensaje de error después de 1 segundo
					setTimeout(() => {
						this.showErrorAlert = false
						this.errorMessage = ""
					}, 1000)
				} else {
					const user = await this.getUserByEmailAndPassword(this.formData.email, this.formData.password)

					if (user) {
						this.showSuccessAlert = true
						this.successMessage = "LOG IN SUCCESSFUL!"

						// Restablecer los datos del formulario
						this.formData.email = ""
						this.formData.password = ""

						setTimeout(() => {
							store.dispatch("login", user)
							this.$router.push("/private")
						}, 1000)
					} else {
						// Usuario no encontrado, mostrar mensaje de error
						this.showErrorAlert = true
						this.errorMessage = "Invalid email or password. Please try again."

						// Limpiar el mensaje de error después de 1 segundo
						setTimeout(() => {
							this.showErrorAlert = false
							this.errorMessage = ""
						}, 1000)
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
					const hashedPassword = await this.hashPassword(password)
					if (user.password === hashedPassword) {
						return user
					}
				}
				return null
			},

			// Función para calcular el hash de la contraseña
			async hashPassword(password) {
				const encoder = new TextEncoder()
				const data = encoder.encode(password)
				const hashBuffer = await crypto.subtle.digest("SHA-256", data)
				const hashArray = Array.from(new Uint8Array(hashBuffer))
				const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("")
				return hashHex
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
