import { createRouter, createWebHashHistory } from 'vue-router'

// Pages (Lazy loaded)
// Infrastructure Pages (Lazy loaded)

const routes = [
    { 
        path: '/', 
        component: () => import(/* webpackChunkName: "HomePage" */ '../domain/pokemon/pages/HomePage')
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage" */ '../domain/pokemon/pages/AboutPage')
    },
    { 
        path: '/:id', 
        component: () => import(/* webpackChunkName: "PokemonPage" */ '../domain/pokemon/pages/PokemonPage')
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NotFoundPage" */ '../infrastructure/shared/pages/NotFoundPage')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router