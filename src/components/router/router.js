import { createRouter, createWebHashHistory } from "vue-router"

import LogIn from "../auth/LogIn.vue"
import SignUp from "../auth/SignUp.vue"
import DisneyCharacter from "../infoDisney/pages/Disney/DisneyCharacter.vue"
import DisneyPage from "../infoDisney/pages/Disney/DisneyPage.vue"
import MarvelCharacter from "../infoDisney/pages/Marvel/MarvelCharacter.vue"
import MarvelPage from "../infoDisney/pages/Marvel/MarvelPage.vue"
import PixarCharacter from "../infoDisney/pages/Pixar/PixarCharacter.vue"
import PixarPage from "../infoDisney/pages/Pixar/PixarPage.vue"
import StarWarsCharacter from "../infoDisney/pages/Star Wars/StarWarsCharacter.vue"
import StarWarsPage from "../infoDisney/pages/Star Wars/StarWarsPage.vue"
import AboutPage from "../shared/AboutPage.vue"
import HomePage from "../shared/HomePage.vue"
import Favorites from "../infoDisney/layout/Favorites.vue"

const routes = [
    { path: "/", component: HomePage },
    { path: "/logIn", component: LogIn },
    { path: "/signUp", component: SignUp },
    { path: "/disneyPage", component: DisneyPage },
    { path: "/disneyCharacter", component: DisneyCharacter },
    { path: "/pixarPage", component: PixarPage },
    { path: "/pixarCharacter", component: PixarCharacter },
    { path: "/star-warsPage", component: StarWarsPage },
    { path: "/star-warsCharacter", component: StarWarsCharacter },
    { path: "/marvelPage", component: MarvelPage },
    { path: "/marvelCharacter", component: MarvelCharacter },
    { path: "/about-us", component: AboutPage },
    { path: "/favorites", component: Favorites }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router