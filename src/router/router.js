import { createRouter, createWebHashHistory } from 'vue-router'
import pokemonRoutes from '../domain/pokemon/pokemon-routes'
import dbzRoutes from '../domain/dbz/dbz-routes'
// Guards
import isAuthenticatedGuard from '../infrastructure/shared/guards/auth-guard'

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
        beforeEnter: [ isAuthenticatedGuard ] ,
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

// Global Guard - All app routes
// router.beforeEach( ( to, from, next ) => {
//     // console.log( { to, from, next } )
//     const random = Math.random() * 100
//     if( random > 50 ) {
//         console.log('Authenticated')
//         next()
//     } else {
//         console.log( random, 'blocked by beforeEach guard' )
//         next( { name: 'pokemon-home' } )
//     }
// })

// Global Guard (Async) - All App Routes
// const canAccess = () => {
//     return new Promise((resolve) => {
//         const random = Math.random() * 100
//         if (random > 50) {
//             console.log('Authenticated - canAccess')
//             resolve(true)
//         } else {
//             console.log(random, 'Blocked by beforeEach guard - canAccess')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async ( to, from, next ) => {
//     const authorized = await canAccess()

//     authorized 
//         ? next()
//         : next( { name: 'pokemon-home' } )
// })

export default router