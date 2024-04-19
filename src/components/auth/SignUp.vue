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
			WELCOME TO <br />
			<strong>INFO DISNEY</strong>
		</p>
		<!-- Formulario sign up -->
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
				>Please enter a valid password (8+ characters, 1+ uppercase and 1+ special character).</span
			>
			<input
				class="formBox-form__input"
				type="text"
				title="first_name"
				name="first_name"
				placeholder="FIRST NAME"
				spellcheck="true"
				required
				v-model="formData.firstName"
				@input="validateFirstName"
			/>
			<span
				v-if="firstNameError"
				class="formBox-form--errorMessage"
				>Please enter a valid first name.</span
			>
			<input
				class="formBox-form__input"
				type="text"
				title="last_name"
				name="last_name"
				placeholder="LAST NAME"
				spellcheck="true"
				required
				v-model="formData.lastName"
				@input="validateLastName"
			/>
			<span
				v-if="lastNameError"
				class="formBox-form--errorMessage"
				>Please enter a valid last name.</span
			>
			<select
				class="formBox-form__input signUp__select"
				title="country"
				name="country"
				v-model="formData.country"
			>
				<option
					disabled
					selected
					value=""
				>
					COUNTRY
				</option>
				<option
					v-for="country in countries"
					:key="country.code"
					:value="country.name"
				>
					{{ country.name }}
				</option>
			</select>
			<article class="signUp__genderSelection">
				<button
					class="formBox-form__input signUp__genderSelection-btn"
					type="button"
					title="male"
					id="male"
					name="gender"
					required
					value="male"
					:class="{ signUp__genderSelection_selected: formData.gender === 'male' }"
					@click="selectGender('male')"
				>
					MALE
				</button>
				<button
					class="formBox-form__input signUp__genderSelection-btn"
					type="button"
					title="female"
					name="gender"
					required
					value="female"
					:class="{ signUp__genderSelection_selected: formData.gender === 'female' }"
					@click="selectGender('female')"
				>
					FEMALE
				</button>
			</article>
			<article class="signUp__privacy-terms">
				<input
					class="signUp__privacy-terms-checkbox"
					type="checkbox"
					title="privacy-terms"
					name="privacy-terms"
					required
				/>
				<label for="privacy-terms">I agree to InfoDisney's Privacy Policy and Terms of Use.</label>
			</article>
			<button
				class="formBox-form__btn"
				type="submit"
				title="sign_up"
				name="sign_up"
			>
				SIGN UP
			</button>
		</form>
		<p class="signUp__link-logIn">
			Already a Member?
			<router-link
				to="login"
				id="link"
				>LOG IN</router-link
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

	import SuccessAlert from "../shared/SuccessAlert.vue"
	import ErrorAlert from "../shared/ErrorAlert.vue"

	export default {
		components: {
			SuccessAlert,
			ErrorAlert
		},

		data() {
			return {
				pageTitle: "Sign Up Info Disney",
				// Objeto para almacenar los datos del formulario
				formData: {
					email: "",
					password: "",
					firstName: "",
					lastName: "",
					country: "",
					gender: ""
				},

				// Variables para controlar los errores de validación de los campos del formulario
				emailError: false,
				passwordError: false,
				firstNameError: false,
				lastNameError: false,

				// Variables para controlar las alertas
				showSuccessAlert: false,
				showErrorAlert: false,
				successMessage: "",
				errorMessage: "",

				// Variables para almacenar la lista de países
				countries: [],
				selectedCountry: "",

				// IndexedDB
				db: null,

				showContent: false
			}
		},

		mounted() {
			this.fetchCountries()
			this.initDatabase()

			setTimeout(() => {
				this.showContent = true
			}, 1000)
		},

		methods: {
			async initDatabase() {
				// Abre la base de datos y crea los almacenes de objetos necesarios
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

			async checkForm() {
				if (this.emailError || this.passwordError || this.firstNameError || this.lastNameError) {
					this.showErrorAlert = true
					this.errorMessage = "All input fields must contain valid information."

					// Limpiar el mensaje de error después de 1 segundo
					setTimeout(() => {
						this.showErrorAlert = false
						this.errorMessage = ""
					}, 1000)
				} else {
					// Añade el usuario a IndexedDB
					await this.addUserToDB()

					this.showSuccessAlert = true
					this.successMessage = "SIGN UP SUCCESSFUL!"

					// Restablecer los datos del formulario
					this.formData.email = ""
					this.formData.password = ""
					this.formData.firstName = ""
					this.formData.lastName = ""
					this.formData.country = ""
					this.formData.gender = ""

					setTimeout(() => {
						this.$router.push("/")
					}, 1000)
				}
			},

			async addUserToDB() {
				// Hash de la contraseña
				const hashedPassword = await this.hashPassword(this.formData.password)

				// Abre una transacción y almacena el usuario en el almacén de objetos "users"
				const tx = this.db.transaction("users", "readwrite")
				const userStore = tx.objectStore("users")
				const existingUser = await userStore.index("email").get(this.formData.email)

				if (existingUser) {
					this.showErrorAlert = true
					this.errorMessage = "The email address is already in use."
					return
				}

				await userStore.add({
					email: this.formData.email,
					password: hashedPassword,
					firstName: this.formData.firstName,
					lastName: this.formData.lastName,
					country: this.formData.country,
					gender: this.formData.gender
				})

				await tx.done
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
			},

			// Método para validar el formato del nombre
			validateFirstName() {
				const namePattern = /^[A-Za-zÀ-ÿ\s]{2,}$/
				this.firstNameError = !namePattern.test(this.formData.firstName)
			},

			// Método para validar el formato del apellido
			validateLastName() {
				const namePattern = /^[A-Za-zÀ-ÿ\s]{2,}$/
				this.lastNameError = !namePattern.test(this.formData.lastName)
			},

			// Método para validar la longitud del mensaje
			validateMessage() {
				this.messageError = this.formData.message.length < 20
			},

			// Método para hacer el fetch de "countries.json"
			fetchCountries() {
				fetch("/countries.json")
					.then((response) => response.json())
					.then((data) => {
						this.countries = data.countries
					})
					.catch((error) => {
						console.error("Error fetching countries:", error)
					})
			},

			selectGender(gender) {
				if (this.formData.gender !== gender) {
					this.formData.gender = gender
				} else {
					this.formData.gender = ""
				}
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/css/main.css";

	.signUp__select {
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0.7);
	}

	.signUp__genderSelection {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		width: 100%;
	}

	.signUp__genderSelection-btn {
		width: 100%;
		margin-left: 1em;
		color: rgba(0, 0, 0, 0.7);
		background-color: #fff;
		cursor: pointer;
	}

	#male {
		margin-left: 0;
	}

	.signUp__genderSelection-btn:hover {
		background-color: rgb(255, 87, 87, 20%);
	}

	.signUp__genderSelection_selected {
		background-color: #ff5757;
		color: #fff;
	}

	.signUp__privacy-terms {
		display: flex;
		justify-content: center;
		font-size: x-small;
		padding-bottom: 0.7em;
		color: rgb(0, 0, 0, 0.7);
	}

	.signUp__privacy-terms label {
		margin-left: 0.5em;
		cursor: pointer;
	}

	.signUp__link-logIn {
		margin-top: 1em;
		font-size: small;
		color: rgb(0, 0, 0, 0.7);
	}

	.signUp__link-logIn #link {
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
		.formBox-form__btn,
		.signUp__genderSelection {
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

		.signUp__genderSelection {
			width: 25em;
		}
	}
	/* End of media query */
</style>
