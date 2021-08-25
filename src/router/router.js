import { createRouter, createWebHashHistory } from 'vue-router'
import pokemonRoutes from '../domain/pokemon/pokemon-routes'
import dbzRoutes from '../domain/dbz/dbz-routes'

// Pages (Lazy loaded)
// Infrastructure Pages (Lazy loaded)

const routes = [
    {
        path: '/',
        redirect: { name: 'pokemon' }
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '../domain/pokemon/layouts/PokemonLayout.vue'),
        children: pokemonRoutes
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DragonLayout" */ '../domain/dbz/layouts/DragonLayout.vue'),
        children: dbzRoutes
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