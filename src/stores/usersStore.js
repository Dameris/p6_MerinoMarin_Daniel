// store/index.js
import { defineStore } from "pinia"

export const useFormDataStore = defineStore({
	id: "formData",

	state: () => ({
		formData: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			country: "",
			gender: ""
		}
	}),

	actions: {
		updateFormData(newData) {
			this.formData = newData
		}
	}
})
