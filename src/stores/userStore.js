import Vuex from "vuex"

// Create Vuex store
const store = new Vuex.Store({
	state: {
		isAuthenticated: false,
		user: null
	},
	mutations: {
		login(state, user) {
			state.isAuthenticated = true
			state.user = user
		},
		logout(state) {
			state.isAuthenticated = false
			state.user = null
		}
	},
	actions: {
		login({ commit }, user) {
			// Perform login operation (e.g., API call)
			// Upon successful login, commit the mutation to update state
			commit("login", user)
		},
		logout({ commit }) {
			// Perform logout operation (e.g., clear session, API call)
			// Upon successful logout, commit the mutation to update state
			commit("logout")
		}
	}
})

export default store
