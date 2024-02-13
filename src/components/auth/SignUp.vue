<template>
	<div class="formBox">
		<img
			src="../img/logo_infoDisney.png"
			alt="InfoDisney Logo"
		/>
		<p class="formBox__title">
			WELCOME TO <br />
			<strong>INFO DISNEY</strong>
		</p>
		<!-- Formulario de contacto -->
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
				v-if="lastNameError"
				class="formBox-form--errorMessage"
				>Please enter a valid password.</span
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
				class="formBox-form__input"
				title="country"
				name="country"
				v-model="selectedCountry"
			>
				<option
					v-for="country in countries"
					:key="country.code"
					:value="country.name"
				>
					{{ country.name }}
				</option>
			</select>
			<button
				class="formBox-form__btn"
				type="submit"
				title="send"
				name="send"
			>
				SEND
			</button>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageTitle: "Contact Info Disney",
				// Objeto para almacenar los datos del formulario
				formData: {
					email: "",
					password: "",
					firstName: "",
					lastName: "",
					message: ""
				},
				// Variables para controlar los errores de validación de los campos del formulario
				emailError: false,
				passwordError: false,
				firstNameError: false,
				lastNameError: false,
				messageError: false,

				// Variables para almacenar la lista de países
				countries: [],
				selectedCountry: null
			}
		},

		methods: {
			// Método para validar el formulario antes de enviarlo
			checkForm() {
				if (this.emailError || this.password || this.firstNameError || this.lastNameError || this.messageError) {
					alert("All input fields must contain valid information.")
				} else {
					alert("Form has been sent")
					console.log("Data", this.formData)

					// Lógica para enviar los datos al backend

					this.formData.email = ""
					this.formData.password = ""
					this.formData.firstName = ""
					this.formData.lastName = ""
					this.formData.message = ""
				}
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
			}
		},
		mounted() {
			fetch("../../../countries.json")
				.then((response) => response.json())
				.then((data) => {
					this.countries = data
					if (this.countries.length > 0) {
						this.selectedCountry = this.countries[0]
					}
				})
		}
	}
</script>

<style>
	@import "../../assets/css/main.css";
</style>
