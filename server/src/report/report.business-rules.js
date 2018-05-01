const data = require('./report.data')

const report = {
    getById: (id, callback) => data.getById(id, callback)
}

module.exports = report
