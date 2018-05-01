const handler = require('./reports.route-handler')

const routes = [
    { path: '/reports', controllers: routed => routed.get(handler.get) }
]

module.exports = routes
