const routes = [
    {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(/* webpackChunkName: "CharactersPage" */ '@/domain/dbz/pages/CharactersPage')
    },
    {
        path: 'about',
        name: 'dbz-about',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/domain/dbz/pages/AboutPage')
    },
    {
        path: '',
        redirect: { name: 'dbz-characters' }
    }
]

export default routes