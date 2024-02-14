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
				passwordError: false
			}
		},

		methods: {
			// Método para validar el formulario antes de enviarlo
			checkForm() {
				if (this.emailError || this.passwordError) {
					alert("All input fields must contain valid information.")
				} else {
					alert("Form has been sent")
					console.log("Data", this.formData)

					// Lógica para enviar los datos al backend

					this.formData.email = ""
					this.formData.password = ""
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
</style>
