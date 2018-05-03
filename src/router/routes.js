const report = require('../report/report.routes')
const reports = require('../reports/reports.routes')

/**
 * Handles the default path /, modify for extending help.
 * @param {Request} request
 * @param {Response} response
 */
const serveHelp = (request, response) => {
    console.log(`Handling ${request.url} at Date.now()`)
    response.status(200)
    response.send(`Hello there. This is sitdowns application.`)
}

const routes = [
    { path: '/', controllers: routed => routed.get(serveHelp) },
    ...report,
    ...reports
]

module.exports = routes
