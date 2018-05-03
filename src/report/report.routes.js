const handler = require('./report.route-handler')

const routes = [
    { path: '/report/:id', controllers: routed => routed.get(handler.get) },
    { path: '/report/new', controllers: routed => routed.post(handler.post) },
    { path: '/report/update', controllers: routed => routed.put(handler.put) },
    { path: '/report/delete', controllers: routed => routed.delete(handler.delete) }
]

module.exports = routes
