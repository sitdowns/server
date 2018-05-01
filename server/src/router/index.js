const routes = require('./routes').routes

const routeHandler = app => {
    routes.forEach(route => {
        const routed = app.route(route.path)
        route.controllers(routed)
        console.log(`serving ${route.path}`)
    })
}

module.exports = routeHandler
