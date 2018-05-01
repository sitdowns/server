const paths = require('./routes').locations

/**
 * Handles the default path, for help.
 * @param {Request} request
 * @param {Response} response
 */
const serveHelp = (request, response) => {
    console.log(`Handling ${request.url} at Date.now()`)
    response.status(200)
    response.send(`Serving at following routes: ${paths}`)
}

const reports = {
    get: (request, response) => {
        console.log(`Handling ${request.url} at Date.now()`)
        response.status(200)
        response.send('/reports/get')
    }
}

const report = require('../report/report.route-handler')

module.exports = {
    serveHelp,
    report,
    reports
}
