import { createRouter, createWebHashHistory } from 'vue-router'

// Pages (Lazy loaded)
// Infrastructure Pages (Lazy loaded)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "HomePage" */ '../domain/pokemon/pages/HomePage')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '../domain/pokemon/pages/AboutPage')
    },
    {
        path: '/pokemon/:id',
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage" */ '../domain/pokemon/pages/PokemonPage'),
        props: (route) => {
            const id = Number(route.params.id)
            return isNaN(id) ? { pokemonId: 1 } : { pokemonId: id }
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NotFoundPage" */ '../infrastructure/shared/pages/NotFoundPage')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router