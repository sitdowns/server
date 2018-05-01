const handler = require('./handler')

const routes = [
    { path: '/', controllers: routed => routed.get(handler.serveHelp) },
    { path: '/report/:id', controllers: routed => routed.get(handler.report.get) },
    { path: '/report/new', controllers: routed => routed.post(handler.report.post) },
    { path: '/report/update', controllers: routed => routed.put(handler.report.put) },
    { path: '/report/delete', controllers: routed => routed.delete(handler.report.delete) },
    { path: '/reports/new', controllers: routed => routed.post(handler.reports.get) }
]

const locations = routes.map(route => route.path)

module.exports = {
    routes,
    locations
}
