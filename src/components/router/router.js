import { createRouter, createWebHashHistory } from "vue-router"

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
import LayoutPublic from "../infoDisney/layout/LayoutPublic.vue"
import LayoutPrivate from "../infoDisney/layout/LayoutPrivate.vue"
import UserProfile from "../infoDisney/pages/UserProfile.vue"

const routes = [
	{
		path: "/",
		component: LayoutPublic,
		children: [
			{ path: "", component: HomePage },
			{ path: "/logIn", component: () => import("../auth/LogIn.vue") },
			{ path: "/signUp", component: () => import("../auth/SignUp.vue") },
			{ path: "/disneyPage", component: DisneyPage },
			{ path: "/disneyCharacter", component: DisneyCharacter },
			{ path: "/pixarPage", component: PixarPage },
			{ path: "/pixarCharacter", component: PixarCharacter },
			{ path: "/star-warsPage", component: StarWarsPage },
			{ path: "/star-warsCharacter", component: StarWarsCharacter },
			{ path: "/marvelPage", component: MarvelPage },
			{ path: "/marvelCharacter", component: MarvelCharacter },
			{
				path: "/about-us",
				component: () => import("../infoDisney/pages/AboutPage.vue")
			},
			{
				path: "/contact",
				component: () => import("../infoDisney/pages/ContactPage.vue")
			}
		]
	},
	{
		path: "/private",
		component: LayoutPrivate,
		children: [
			{ path: "", component: HomePage },
			{ path: "/userProfile", component: UserProfile },
			{ path: "/favorites", component: FavoritesPage }
		]
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
