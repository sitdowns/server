const data = require('./reports.data')

const reports = {
    getAll: callback => data.getAll(callback)
}

module.exports = reports
