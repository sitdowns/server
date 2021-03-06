const businessRules = require('./report.business-rules')

const report = {
    get: (request, response) => {
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
        if (!request.body) {
            response.status(400)
            return response.send('Need input.')
        }
        businessRules.save(request.body, (err, data) => {
            if (err) {
                console.error(err)
                response.status(500)
                return response.send('Server failed.')
            }
            response.status(200)
            response.json(data)
        })
    },
    put: (request, response) => {
        if (!request.body) {
            response.status(400)
            return response.send('Need input.')
        }
        if (!request.params.id) {
            response.status(400)
            return response.send('Need id in url.')
        }
        businessRules.updateById(request.params.id, request.body, (err, data) => {
            if (err) {
                console.error(err)
                response.status(500)
                return response.send('Server failed.')
            }
            response.status(200)
            response.json(data)
        })
    },
    delete: (request, response) => {
        if (!request.params.id) {
            response.status(400)
            return response.send('Need id in url.')
        }
        businessRules.deleteById(request.params.id, err => {
            if (err) {
                console.error(err)
                response.status(500)
                return response.send('Server failed.')
            }
            response.status(200)
            response.json(`${request.params.id} removed.`)
        })
    }
}

module.exports = report
