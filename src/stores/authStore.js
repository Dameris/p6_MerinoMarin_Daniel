import { defineStore } from "pinia"

export const useAuthStore = defineStore({
	id: "auth",

	state: () => ({
		users: [],
		currentUser: null
	}),

	actions: {
		// Definir acciones para manipular el estado de los usuarios
		addUser(newUser) {
			this.users.push(newUser)
		},
		setCurrentUser(user) {
			this.currentUser = user
		}
		// Otros métodos de acción según sea necesario
	}
})
