const { ODM, DB } = require('../rules')

const getById = (id, callback) => DB.Models['Report'].findById(id, callback)
const save = (requestData, callback) => DB.Models['Report'].create(requestData, callback)

const report = {
    getById,
    save
}

module.exports = report
