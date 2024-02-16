import { defineStore } from "pinia"

export const useAuthStore = defineStore({
	id: "auth",

	state: () => ({
		isAuthenticated: false,
		user: null
	}),

	actions: {
		login(credentials) {
			this.isAuthenticated = true
			this.user = ""
		},
        
		logout() {
			this.isAuthenticated = false
			this.user = null
		}
	}
})
