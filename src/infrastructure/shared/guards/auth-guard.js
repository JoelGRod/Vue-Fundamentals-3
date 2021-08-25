

const isAuthenticatedGuard = async ( to, from, next ) => {
    const random = Math.random() * 100

    if(random > 50) {
        console.log('Authenticated')
        next()
    } else {
        console.log('Blocked by isAuthenticatedGuard', random)
        next( { name: 'pokemon-home' } )
    }
}

export default isAuthenticatedGuard