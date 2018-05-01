const businessRules = require('./reports.business-rules')

const reports = {
    get: (request, response) => {
        console.log(`Handling ${request.url} at Date.now()`)
        businessRules.getAll((err, data) => {
            if (err) {
                console.error(err)
                response.status(400)
                response.send('Server error')
            }
            response.status(200)
            response.send(data)
        })
    }
}

module.exports = reports
