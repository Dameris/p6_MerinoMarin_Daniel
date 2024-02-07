<template>
	<div class="box__contact">
		<img
			src="../../img/logo_infoDisney.png"
			alt="InfoDisney Logo"
		/>
		<p class="contact__title">
			CONTACT WITH <br />
			<strong>INFO DISNEY</strong>
		</p>
		<form
			class="form__contact"
			id="formContact"
			@submit.prevent="checkForm"
		>
			<input
				class="form__input"
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
				class="error__message"
				>Please enter a valid email address.</span
			>
			<input
				class="form__input"
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
				class="error__message"
				>Please enter a valid first name.</span
			>
			<input
				class="form__input"
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
				class="error__message"
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
				class="error__message"
				>Message must be at least 20 characters long.</span
			>
			<button
				class="form__btn"
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
				formData: {
					email: "",
					firstName: "",
					lastName: "",
					message: ""
				},
				emailError: false,
				firstNameError: false,
				lastNameError: false,
				messageError: false
			}
		},

		methods: {
			checkForm() {
				if (this.emailError || this.firstNameError || this.lastNameError || this.messageError) {
					alert("All input fields must contain valid information.")
				} else {
					alert("Form has been sent")
					console.log("Data", this.formData)

					// Logic to send data to the backend

					this.formData.email = ""
					this.formData.firstName = ""
					this.formData.lastName = ""
					this.formData.message = ""
				}
			},

			validateEmail() {
				const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
				this.emailError = !emailPattern.test(this.formData.email)
			},

			validateFirstName() {
				const namePattern = /^[A-Za-zÀ-ÿ\s]{2,}$/
				this.firstNameError = !namePattern.test(this.formData.firstName)
			},

			validateLastName() {
				const namePattern = /^[A-Za-zÀ-ÿ\s]{2,}$/
				this.lastNameError = !namePattern.test(this.formData.lastName)
			},

			validateMessage() {
				this.messageError = this.formData.message.length < 20
			}
		}
	}
</script>

<style scoped>
	.box__contact {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		margin-top: 3vh;
	}

	.contact__title {
		padding-top: 2vh;
		padding-bottom: 1vh;
		text-align: center;
		color: #ff5757;
	}

	.form__contact {
		display: flex;
		flex-direction: column;
	}

	.form__input,
	.form__textarea {
		margin-bottom: 1vh;
		width: 18vw;
		padding: 0.8rem;
		color: rgba(0, 0, 0, 0.4);
		font-family:
			Inter,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			"Fira Sans",
			"Droid Sans",
			"Helvetica Neue",
			sans-serif;
		border: 0.1rem solid #ff5757;
		border-radius: 0.2rem;
	}

	.form__input:focus,
	.form__textarea:focus {
		border: 0.2rem solid #ff5757;
		outline: none;
	}

	.form__textarea {
		min-height: 20vh;
	}

	.form__btn {
		padding: 0.8rem;
		color: #fff;
		background-color: #ff5757;
		border: 0.1rem solid #ff5757;
		border-radius: 0.2rem;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.form__btn:hover {
		background-color: #ff7777;
	}

	.form__btn:focus {
		outline: none;
	}

	.form__btn:active {
		transform: translateY(1px);
	}

	.error__message {
		padding-top: 0;
		color: red;
		font-size: 0.8rem;
		padding-bottom: 1vh;
	}
</style>
