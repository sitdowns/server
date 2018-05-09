const data = require('./report.data')

const getById = (id, callback) => data.getById(id, callback)
const save = (requestData, callback) => data.save(requestData, callback)
const updateById = (id, requestData, callback) => data.updateById(id, requestData, callback)
const deleteById = (id, callback) => data.deleteById(id, callback)

const report = {
    getById,
    save,
    updateById,
    deleteById
}

module.exports = report
