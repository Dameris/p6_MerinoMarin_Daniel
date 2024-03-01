import Vuex from "vuex"

const store = new Vuex.Store({
	state: {
		isAuthenticated: false,
		user: null
	},
	mutations: {
		login(state, user) {
			state.isAuthenticated = true
			state.user = user
			// Guardar los datos del usuario en el localStorage
			localStorage.setItem("user", JSON.stringify(user))
			localStorage.setItem("isAuthenticated", "true")
		},
		logout(state) {
			state.isAuthenticated = false
			state.user = null
			// Eliminar los datos del usuario del localStorage al cerrar sesión
			localStorage.removeItem("user")
			localStorage.removeItem("isAuthenticated")
		}
	},
	actions: {
		login({ commit }, user) {
			// Realizar operación de inicio de sesión
			commit("login", user)
		},
		logout({ commit }) {
			// Realizar operación de cierre de sesión
			commit("logout")
		}
	}
})

export default store
