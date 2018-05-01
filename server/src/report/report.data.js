const { ODM, DB } = require('../rules')

const report = {
    getById: (id, callback) => {
        return DB.Models['Report'].findById(id, callback)
    }
}

module.exports = report
