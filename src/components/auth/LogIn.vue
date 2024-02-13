<template>
	<div class="logInBox">
		<img
			src="../img/logo_infoDisney.png"
			alt="InfoDisney Logo"
		/>
		<p class="logInBox__title">
			CONTACT WITH <br />
			<strong>INFO DISNEY</strong>
		</p>
		<!-- Formulario de contacto -->
		<form
			class="logInBox-form"
			id="formContact"
			@submit.prevent="checkForm"
		>
			<input
				class="logInBox-form__input"
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
				class="logInBox-form--errorMessage"
				>Please enter a valid email address.</span
			>
			<input
				class="logInBox-form__input"
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
				class="logInBox-form--errorMessage"
				>Please enter a valid first name.</span
			>
			<input
				class="logInBox-form__input"
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
				class="logInBox-form--errorMessage"
				>Please enter a valid last name.</span
			>
			<textarea
				class="form__textarea"
				title="message"
				name="message"
				placeholder="YOUR MESSAGE"
				spellcheck="true"
				required
				v-model="formData.message"
				@input="validateMessage"
			></textarea>
			<span
				v-if="messageError"
				class="logInBox-form--errorMessage"
				>Message must be at least 20 characters long.</span
			>
			<button
				class="logInBox-form__btn"
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
					firstName: "",
					lastName: "",
					message: ""
				},
				// Variables para controlar los errores de validación de los campos del formulario
				emailError: false,
				firstNameError: false,
				lastNameError: false,
				messageError: false
			}
		},

		methods: {
			// Método para validar el formulario antes de enviarlo
			checkForm() {
				if (this.emailError || this.firstNameError || this.lastNameError || this.messageError) {
					alert("All input fields must contain valid information.")
				} else {
					alert("Form has been sent")
					console.log("Data", this.formData)

					// Lógica para enviar los datos al backend

					this.formData.email = ""
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
		}
	}
</script>

<style>
	@import "../../assets/css/main.css";
</style>
