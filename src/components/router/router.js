import { createRouter, createWebHashHistory } from "vue-router"
import { useAuthStore } from "@/stores/authStore"

import DisneyCharacter from "../infoDisney/pages/Disney/DisneyCharacter.vue"
import DisneyPage from "../infoDisney/pages/Disney/DisneyPage.vue"
import MarvelCharacter from "../infoDisney/pages/Marvel/MarvelCharacter.vue"
import MarvelPage from "../infoDisney/pages/Marvel/MarvelPage.vue"
import PixarCharacter from "../infoDisney/pages/Pixar/PixarCharacter.vue"
import PixarPage from "../infoDisney/pages/Pixar/PixarPage.vue"
import StarWarsCharacter from "../infoDisney/pages/Star Wars/StarWarsCharacter.vue"
import StarWarsPage from "../infoDisney/pages/Star Wars/StarWarsPage.vue"
import HomePage from "../infoDisney/pages/HomePage.vue"
import FavoritesPage from "../infoDisney/pages/FavoritesPage.vue"
import TriviaGame from "../infoDisney/pages/TriviaGame.vue"
import LayoutPublic from "../infoDisney/layout/LayoutPublic.vue"
import LayoutPrivate from "../infoDisney/layout/LayoutPrivate.vue"
import UserProfile from "../infoDisney/pages/UserProfile.vue"

// Definición de las rutas de la aplicación
const routes = [
	{
		path: "/",
		component: LayoutPublic,
		children: [
			{ path: "", component: HomePage },
			{
				path: "logIn",
				component: () => import("../auth/LogIn.vue")
			},
			{
				path: "signUp",
				component: () => import("../auth/SignUp.vue")
			},
			// { path: "favorites", component: FavoritesPage, meta: { requiresAuth: true } },
			{ path: "triviaGame", component: TriviaGame, meta: { requiresAuth: true } },
			{ path: "disneyPage", component: DisneyPage },
			{ path: "disneyCharacter/:id", component: DisneyCharacter },
			{ path: "pixarPage", component: PixarPage },
			{ path: "pixarCharacter/:id", component: PixarCharacter },
			{ path: "star-warsPage", component: StarWarsPage },
			{ path: "star-warsCharacter/:id", component: StarWarsCharacter },
			{ path: "marvelPage", component: MarvelPage },
			{ path: "marvelCharacter/:id", component: MarvelCharacter },
			{
				path: "about-us",
				component: () => import("../infoDisney/pages/AboutPage.vue")
			},
			{
				path: "contact",
				component: () => import("../infoDisney/pages/ContactPage.vue")
			}
		]
	},

	{
		path: "/private",
		component: LayoutPrivate,
		children: [
			{ path: "", component: HomePage },
			{ path: "userProfile", component: UserProfile },
			// { path: "favorites", component: FavoritesPage },
			{ path: "triviaGame", component: TriviaGame },
			{ path: "disneyPage", component: DisneyPage },
			{ path: "disneyCharacter/:id", component: DisneyCharacter },
			{ path: "pixarPage", component: PixarPage },
			{ path: "pixarCharacter/:id", component: PixarCharacter },
			{ path: "star-warsPage", component: StarWarsPage },
			{ path: "star-warsCharacter/:id", component: StarWarsCharacter },
			{ path: "marvelPage", component: MarvelPage },
			{ path: "marvelCharacter/:id", component: MarvelCharacter },
			{
				path: "about-us",
				component: () => import("../infoDisney/pages/AboutPage.vue")
			},
			{
				path: "contact",
				component: () => import("../infoDisney/pages/ContactPage.vue")
			}
		]
	},

	{ path: "/:catchAll(.*)", component: () => import("../shared/error404.vue") }
]

// Crea el enrutador de la aplicación con la configuración de rutas y el historial de navegación
const router = createRouter({
	history: createWebHashHistory(),
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
	routes
})

router.beforeEach((to, from, next) => {
	const isAuthenticated = useAuthStore().isAuthenticated

	if (to.meta.requiresAuth && !isAuthenticated) {
		next("/login")
	} else {
		next()
	}
})

export default router
