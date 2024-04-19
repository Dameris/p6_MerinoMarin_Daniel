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
			src="../../img/logo_infoDisney.png"
			alt="InfoDisney Logo"
		/>
		<p class="formBox__title">
			CONTACT WITH <br />
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
				class="formBox-form--errorMessage"
				>Message must be at least 20 characters long.</span
			>
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
					firstName: "",
					lastName: "",
					message: ""
				},
				// Variables para controlar los errores de validación de los campos del formulario
				emailError: false,
				firstNameError: false,
				lastNameError: false,
				messageError: false,

				showContent: false
			}
		},

		mounted() {
			setTimeout(() => {
				this.showContent = true
			}, 1000)
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
	@import "../../../assets/css/main.css";

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
