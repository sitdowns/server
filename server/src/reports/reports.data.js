const { ODM, DB } = require('../rules')

const reports = {
    getAll: callback => DB.Models['Report'].find(callback)
}

module.exports = reports
