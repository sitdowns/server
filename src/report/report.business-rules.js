const data = require('./report.data')

const getById = (id, callback) => data.getById(id, callback)
const save = (requestData, callback) => data.save(requestData, callback)
const update = (id, requestData, callback) => data.update(id, requestData, callback)

const report = {
    getById,
    save,
    update
}

module.exports = report
