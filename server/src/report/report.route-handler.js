const businessRules = require('./report.business-rules')

const report = {
    get: (request, response) => {
        console.log(`Handling ${request.url} at Date.now()`)
        if (!request.params) {
            response.status(400)
            return response.send('Need input.')
        }
        if (!request.params.id) {
            response.status(400)
            return response.send('Need id.')
        }
        const id = request.params.id
        businessRules.getById(id, (err, data) => {
            if (err) {
                console.error(err)
                response.status(400)
                response.send('Invalid id.')
            }
            response.status(200)
            response.send(data)
        })

    },
    post: (request, response) => {
        console.log(`Handling ${request.url} at Date.now()`)
        response.status(200)
        response.send('/report/post')
    },
    put: (request, response) => {
        console.log(`Handling ${request.url} at Date.now()`)
        response.status(200)
        response.send('/report/put')
    },
    delete: (request, response) => {
        console.log(`Handling ${request.url} at Date.now()`)
        response.status(200)
        response.send('/report/delete')
    }
}

module.exports = report
