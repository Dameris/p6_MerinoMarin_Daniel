<template>
	<section class="box__contact">
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
			@submit.prevent="submitForm"
		>
			<input
				class="form__input"
				type="email"
				name="email"
				id="email"
				placeholder="EMAIL"
				required
				v-model="formData.email"
			/>
			<input
				class="form__input"
				type="text"
				name="first_name"
				id="first_name"
				placeholder="FIRST NAME"
				spellcheck="true"
				required
				v-model="formData.firstName"
			/>

			<input
				class="form__input"
				type="text"
				name="last_name"
				id="last_name"
				placeholder="LAST NAME"
				spellcheck="true"
				required
				v-model="formData.lastName"
			/>

			<textarea
				class="form__textarea"
				name="message"
				id="message"
				placeholder="YOUR MESSAGE"
				pattern=".{20,}"
				spellcheck="true"
				required
				v-model="formData.message"
				@input="validateMessage"
			/>
			<button
				class="form__btn"
				type="submit"
				name="send"
				id="send"
				value="send"
			>
				SEND
			</button>
		</form>
	</section>
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
				}
			}
		},

		methods: {
			submitForm() {
				console.log("Form has been send")
				console.log("Data", this.formData)
				this.formData.email = ""
				this.formData.firstName = ""
				this.formData.lastName = ""
				this.formData.message = ""

				// Logic to send data to the backend
			}
		}
	}
</script>

<style>
	.box__contact {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
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
		color: rgb(0, 0, 0, 40%);
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
	}

	.form__input,
	.form__textarea,
	.form__btn {
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
</style>
