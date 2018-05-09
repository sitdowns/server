const handler = require('./report.route-handler')

const routes = [
    { path: '/report/:id', type: 'GET', controllers: routed => routed.get(handler.get) },
    { path: '/report/new', type: 'POST', controllers: routed => routed.post(handler.post) },
    { path: '/report/:id', type: 'PUT', controllers: routed => routed.put(handler.put) },
    { path: '/report/:id', type: 'DELETE', controllers: routed => routed.delete(handler.delete) }
]

module.exports = routes
