const routes = [
    {
        path: 'home',
        name: 'pokemon-home',
        component: () => import(/* webpackChunkName: "HomePage" */ '@/domain/pokemon/pages/HomePage')
    },
    {
        path: 'about',
        name: 'pokemon-about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/domain/pokemon/pages/AboutPage')
    },
    {
        path: 'pokemon/:id',
        name: 'pokemon-id',
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/domain/pokemon/pages/PokemonPage'),
        props: (route) => {
            const id = Number(route.params.id)
            return isNaN(id) ? { pokemonId: 1 } : { pokemonId: id }
        }
    },
    {
        path: '',
        redirect: { name: 'pokemon-home' }
    }
]

export default routes