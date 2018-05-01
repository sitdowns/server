const { ODM, DB } = require('../rules')

const report = {
    getById: (id, callback) => DB.Models['Report'].findById(id, callback)
}

module.exports = report
