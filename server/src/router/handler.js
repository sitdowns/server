const paths = require('./routes').locations

/**
 * Handles the default path, for help.
 * @param {Request} request
 * @param {Response} response
 */
const serveHelp = (request, response) => {
    console.log(request.url)
    response.status(200)
    response.send(`Serving at following routes: ${paths}`)
}

const reports = {
    get: (request, response) => {
        console.log(request.url)
        response.status(200)
        reponse.send('/reports/get')
    }
}

const report = {
    get: (request, resopnse) => {
        console.log(request.url)
        response.status(200)
        reponse.send('/report/get')
    },
    post: (request, response) => {
        console.log(request.url)
        response.status(200)
        reponse.send('/report/post')
    },
    put: (request, response) => {
        console.log(request.url)
        response.status(200)
        reponse.send('/report/put')
    },
    delete: (request, response) => {
        console.log(request.url)
        response.status(200)
        reponse.send('/report/delete')
    }
}

module.exports = {
    serveHelp,
    report,
    reports
}
